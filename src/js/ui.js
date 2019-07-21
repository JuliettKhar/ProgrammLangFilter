export class UI {
	constructor() {
		this.init();
	}
	init() {
		this.select = document.querySelector('#languagesList');
		this.btn = document.querySelector('.languageBtn');
		this.result = document.querySelector('#results');
	}
	displayProgrammLangs(data) {
		const instance = data.response.data;
		let template = '';
		instance.forEach( lang => {
			if(lang.logo) {
				template += `
					<ul class="langs">
						<li class="langsList"><img class="langsListImage" src="${lang.logo}" alt="logo"></li>
						<li class="langsHeader">${lang.name}</li>
						<li class="langsList">Основан в ${lang.year}</li>
						<li class="langsList">${lang.projectsCount} проектов на GitHub</li>
						<li class="langsList"><a href="${lang.docs !== undefined ? lang.docs : '#' }">Документация</a></li>
					</ul>
				`
			}
		});
		this.result.innerHTML = template;
	}
}