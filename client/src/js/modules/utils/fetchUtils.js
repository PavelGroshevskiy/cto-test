// Модуль с утилитами для fetch
const createFetch = (url) => (callback, errorCallback) => {
	fetch(url)
		.then((response) => response.text())
		.then((res) => new Array(res))
		.then(callback)
		.catch(errorCallback);
};

const timeoutFetch = async (url) => {
	const response = await fetch(url);
	const data = await response.text();
	const mapData = print(data);
	return mapData;
	// fetch(url)
	// 	.then((response) => response.text())
	// 	.then(print)

	// 	.catch();
};

// const timeoutFetch = (url) => (callback, errorCallback) => {
// 	setInterval(() => {
// 		fetch(url)
// 			.then((response) => response.text())
// 			.then((res) => new Array(res))
// 			.then(console.log)
// 			.then(callback)
// 			.catch(errorCallback);
// 	}, 5000);
// };
const responseObj = new Map();

function print(text) {
	text.split("\n").forEach((el) => {
		const name = el.match(/[А-Яа-я]+/g);
		const digits = el.match(/\d+\.?\d+/g);
		responseObj.set(...name, digits);
	});
	return responseObj;
}

export { createFetch, timeoutFetch };
