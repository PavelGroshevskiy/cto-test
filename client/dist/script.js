/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_components_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/components/chart */ "./src/js/modules/components/chart.js");
/* harmony import */ var _modules_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data/data */ "./src/js/modules/data/data.js");


window.addEventListener("DOMContentLoaded", () => {
  const lineChart = new _modules_components_chart__WEBPACK_IMPORTED_MODULE_0__["LineChart"](Object(_modules_data_data__WEBPACK_IMPORTED_MODULE_1__["default"])(), "chart");
  lineChart.create();
  console.log(lineChart);
});

/***/ }),

/***/ "./src/js/modules/components/chart.js":
/*!********************************************!*\
  !*** ./src/js/modules/components/chart.js ***!
  \********************************************/
/*! exports provided: LineChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChart", function() { return LineChart; });
class Chart {
  createSvgElement(tagName) {
    return document.createElementNS("http://www.w3.org/2000/svg", tagName);
  }
  setAttributes($svgElement, attributesObject) {
    Object.keys(attributesObject).forEach(key => {
      $svgElement.setAttribute(key, attributesObject[key]);
    });
  }
}
class LineChart extends Chart {
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
      "stroke-linejoin": "round"
    });
    return $chartLine;
  }
  create() {
    try {
      const $svg = this.createSvgElement("svg");
      this.setAttributes($svg, {
        width: "100%",
        height: "100%",
        viewBox: `0 0 ${this.maxWidth} ${this.maxHeight}`
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
        el.value.forEach(el => {
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

/***/ }),

/***/ "./src/js/modules/constants/nodeApi.js":
/*!*********************************************!*\
  !*** ./src/js/modules/constants/nodeApi.js ***!
  \*********************************************/
/*! exports provided: MAIN_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_URL", function() { return MAIN_URL; });
// Константы для SWAPI
const MAIN_URL = "http://localhost:4444/";

/***/ }),

/***/ "./src/js/modules/data/data.js":
/*!*************************************!*\
  !*** ./src/js/modules/data/data.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_nodeApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/nodeApi.js */ "./src/js/modules/constants/nodeApi.js");

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const responseObj = new Map();
  const data = [{
    key: "2010",
    value: [10, 50]
  }];
  async function timeoutFetch(url) {
    fetch(url).then(response => response.text()).then(data => print(data));
  }
  function print(text) {
    text.split("\n").forEach(el => {
      const name = el.match(/[А-Яа-я]+/g);
      const digits = el.match(/\d+\.?\d+/g);
      responseObj.set(...name, digits);
    });
    responseObj.forEach((value, key) => {
      data.push({
        key,
        value
      });
    });
    return responseObj;
  }
  timeoutFetch(_constants_nodeApi_js__WEBPACK_IMPORTED_MODULE_0__["MAIN_URL"]);
  return data;
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map