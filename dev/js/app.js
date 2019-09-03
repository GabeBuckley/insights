import {
	InsightsApp
} from './insights-app.js';

window.addEventListener('DOMContentLoaded', function () {
	window['_insights'] = new InsightsApp();
});
