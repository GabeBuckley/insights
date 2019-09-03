export class TemplateBroker {
	constructor(objConfig) {
		this.initial_config = objConfig;
		this.template_loaded = false;
		this.init();
	}
	
	parseConfig(){
		if(this.initial_config){
			var icfg = this.initial_config;
			
			this.owner = icfg.owner;
			
			if(icfg.debug_mode){
				this.debug_mode = true;
			}
		}
	}
	
	init() {
		this.parseConfig();
		
		console.log('TemplateBroker init function fired');
		var strTemplate = this.requestedTemplate;
		console.log(strTemplate + ' requested');
		
		this.loadTemplateData(strTemplate);
		
		window.addEventListener("hashchange", this.handleHashChange.bind(this), false);
	}
	
	get requestedTemplate() {
		var strTemplate = "home";
		
		var strReq = location.hash;
		
		var arrReqParts = strReq.split('/');
		
		strReq = arrReqParts.pop();
		
		if(strReq.length > 4){
			strTemplate = strReq;
		}
		
		return strTemplate;
	}
	
	loadTemplateData(strTemplate){
		var strBaseURL = '/res/templates/';
		
		var handleResponse = function(data){
			var strTemplateHTML = data.currentTarget.responseText;

			var templateTarget = document.querySelector('main#content');
			
			if(templateTarget){
				templateTarget.innerHTML = strTemplateHTML;
			}
			
			this.template_loaded = true;
			
			if(this.owner && this.owner.handlePostInit){
				this.owner.handlePostInit();
			}
		}
		
		var strTemplateURL = strBaseURL + strTemplate + '.html';
		
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", handleResponse.bind(this) );
		oReq.open("GET", strTemplateURL);
		oReq.send();
		
	}
	
	handleHashChange() {
		var strTemplate = this.requestedTemplate;
		var templateTarget = document.querySelector('main#page-container');
			
			if(templateTarget){
				templateTarget.innerHTML = '';
			}
		
		this.loadTemplateData(strTemplate);
		
	}
}