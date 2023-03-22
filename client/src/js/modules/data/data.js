import * as urls from "../constants/nodeApi.js";

export default () => {
	const responseObj = new Map();
	const data = [
		{
			key: "2010",
			value: [10, 50],
		},
	];

	async function timeoutFetch(url) {
		fetch(url)
			.then((response) => response.text())
			.then((data) => print(data));
	}

	function print(text) {
		text.split("\n").forEach((el) => {
			const name = el.match(/[А-Яа-я]+/g);
			const digits = el.match(/\d+\.?\d+/g);
			responseObj.set(...name, digits);
		});
		responseObj.forEach((value, key) => {
			data.push({ key, value });
		});
		return responseObj;
	}
	timeoutFetch(urls.MAIN_URL);

	return data;
};
