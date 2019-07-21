import { Api } from './api.js';
import { UI } from './ui.js';
const api = new Api();
const ui = new UI();


function getLanguages(optionValue) {
	const query = api.getData(optionValue)
		.then( data => ui.displayProgrammLangs(data))
		.catch( err => console.log(err))
}

function getSelectedIndex() {
	const optionValue = ui.select.options[ui.select.selectedIndex].value;
	getLanguages(optionValue);
}

function onBtnClick() {
	getSelectedIndex();
}


function subscribe() {
	ui.btn.addEventListener('click', onBtnClick);
}


export function init() {
	subscribe();
}

