class Chart {
	createSvgElement(tagName) {
		return document.createElementNS("http://www.w3.org/2000/svg", tagName);
	}

	setAttributes($svgElement, attributesObject) {
		Object.keys(attributesObject).forEach((key) => {
			$svgElement.setAttribute(key, attributesObject[key]);
		});
	}
}

export class LineChart extends Chart {
	constructor(data, $container) {
		super();

		this.data = data;
		this.$container = document.getElementById($container);

		this.maxWidth = this.$container.offsetWidth;
		this.maxHeight = this.$container.offsetHeight;
		// this.maxY = Math.max(...data.map((el) => el.y)); для зума
		// this.minY = Math.min(...data.map((el) => el.y)); для зума
		this.zoom = this.maxHeight / (this.maxY - this.minY);
		if (!isFinite(this.zoom)) {
			this.zoom = 1;
		}
		console.log(this.data);
	}

	createChartLine() {
		const $chartLine = this.createSvgElement("path");

		this.setAttributes($chartLine, {
			stroke: "#FF5D5B",
			"stroke-width": "5px",
			fill: "none",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
		});
		return $chartLine;
	}

	create() {
		try {
			const $svg = this.createSvgElement("svg");
			this.setAttributes($svg, {
				width: "100%",
				height: "100%",
				viewBox: `0 0 ${this.maxWidth} ${this.maxHeight}`,
			});

			const $chartLine = this.createChartLine();
			const lineLength = this.maxWidth / (this.data.length - 1);
			const yShift = this.minY * this.zoom;

			let d = "M ";
			let currentX = 0;

			this.data.forEach((el, i) => {
				console.log(el);
				const x = currentX;
				// const y = this.maxHeight - el.y * this.zoom + yShift; зум для графика
				el.value.forEach((el) => {
					const y = this.maxHeight - el;
					d += `${x} ${y} L `;
					currentX += lineLength;
				});
			});
			// this.data.then(console.log);

			d = d.slice(0, -3);

			$chartLine.setAttribute("d", d);
			$svg.appendChild($chartLine);
			this.$container.appendChild($svg);
		} catch (e) {
			console.log(e);
		}
	}
}
