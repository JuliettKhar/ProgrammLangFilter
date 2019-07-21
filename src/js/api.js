export class Api {
	constructor() {}
	async getData(optionValue) {
		const programmLang = optionValue;
		const url = await fetch(`https://frontend-test-api.alex93.now.sh/api/languages?group=${programmLang}`);
		const response = await url.json();
		return {
			response
		}
	} 
}