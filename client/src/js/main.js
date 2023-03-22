import { LineChart } from "./modules/components/chart";

import data from "./modules/data/data";

window.addEventListener("DOMContentLoaded", () => {
	const lineChart = new LineChart(data(), "chart");
	lineChart.create();
	console.log(lineChart);
});
