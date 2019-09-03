import {
	TemplateBroker
} from './util/template-broker.js';

import {
	SurgicalProcedureSearch
} from '../components/surgical-procedure-search.js';

export class InsightsApp {
	
	constructor() {
		
		
		// Set this flag to false to suppress debugging 
		// messages to the console
		this.debug = true;
		this.components = [];
		
		if(this.debug){
			console.log('InsightsApp constructor fired');
		}
		
		this.templates = new TemplateBroker({owner: this, debug_mode: this.debug});
		
		this.init();
	}
	
	init() {
		if(this.debug){
			console.log('InsightsApp init function fired');
		}
		
		var waitTemplateLoaded = function(){
			if(this.templates.template_loaded){

				this.handlePostInit( );
			}
			else {

				window.setTimeout(waitTemplateLoaded, 200);
			}
		}.bind(this)
		
		waitTemplateLoaded();
		
		
	}
	
	handlePostInit() {

		var arrComponents = [
			{
				tagname: 'surgical-procedure-search',
				fnConstruct: SurgicalProcedureSearch
			}
		];
		
		for(var i = 0; i < arrComponents.length; i++){
			var currComponent = arrComponents[i];
			var strTag = currComponent.tagname;
			var objEl = document.querySelector('[data-component="' + strTag + '"]');
			if(objEl){
				this.components.push(
					new currComponent.fnConstruct(
						{
							parent: objEl
						}
					)
				);
			}
		}
	}
}