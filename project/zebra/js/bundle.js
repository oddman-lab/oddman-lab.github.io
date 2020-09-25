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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/NewsCardComponent.js":
/*!********************************************!*\
  !*** ./src/assets/js/NewsCardComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsCardComponent; });
class NewsCardComponent {
  constructor(container) {
    this.element = null;
    this.container = container;
  }

  getTemplate(news) {
    const { date, title, theme, spotlight } = news;

    return `
          <p class="news__date">${date}</p>
          <h3 class="news__title">
              ${title}
          </h3>
          <p class="news__tags">${spotlight ? 'В центре внимания' : theme}</p>
          `;
  }

  init(item) {
    this.createElement(item);
    this.container.appendChild(this.element);
    this.setMainNews(item);
    this.isTag();
  }

  createElement(item) {
    this.element = document.createElement('div');
    this.element.classList.add('news__card');
    this.element.innerHTML = this.getTemplate(item);
  }

  setMainNews(item) {
    if (item.spotlight) {
      console.log('I find spotlight', item);
      const mainNews = this.container.firstChild;
      mainNews.classList.add('news__card--main-news');
    }
  }

  removeMainNews() {
    const mainNews = this.container.firstChild;
    mainNews.classList.remove('news__card--main-news');
  }

  isTag() {
    const el = this.element.querySelector('.news__tags');
    if (el.textContent === '') {
      el.style.display = 'none';
    }
  }
}


/***/ }),

/***/ "./src/assets/js/SearchComponent.js":
/*!******************************************!*\
  !*** ./src/assets/js/SearchComponent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchComponent; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/assets/js/utils.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/assets/js/main.js");



class SearchComponent {
  constructor(container) {
    this.element = null;
    this.input = null;
    this.container = container;
  }

  init() {
    this.createElement();
    this.container.appendChild(this.element);
    this.setStyles();
    this.addListener();
  }

  createElement() {
    this.element = document.createElement('input');
  }

  setStyles() {
    this.element.type = 'search';
    this.element.classList.add('search-form__input', 'search');
    this.element.setAttribute('id', 'search');
    this.element.placeholder = 'Поиск';
  }

  addListener() {
    this.container.addEventListener('submit', this.onSearchHandler);
  }

  onSearchHandler(evt) {
    evt.preventDefault();
    isButtonVisible();
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["removeAllNews"])();
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getSearchResult"])(Object(_main_js__WEBPACK_IMPORTED_MODULE_1__["getNews"])(_utils_js__WEBPACK_IMPORTED_MODULE_0__["links"].searchLoad));
  }
}

function isButtonVisible() {
  if (_main_js__WEBPACK_IMPORTED_MODULE_1__["buttonContainer"].classList.contains('hide')) {
    _main_js__WEBPACK_IMPORTED_MODULE_1__["buttonContainer"].removeChild(_main_js__WEBPACK_IMPORTED_MODULE_1__["buttonContainer"].lastElementChild);
    _main_js__WEBPACK_IMPORTED_MODULE_1__["buttonContainer"].classList.remove('hide');
  }
}


/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! exports provided: loadMore, newsList, buttonContainer, getNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsList", function() { return newsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonContainer", function() { return buttonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony import */ var _SearchComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchComponent.js */ "./src/assets/js/SearchComponent.js");
/* harmony import */ var _NewsCardComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsCardComponent.js */ "./src/assets/js/NewsCardComponent.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/assets/js/utils.js");
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */




const form = document.querySelector('form');
const loadMore = document.querySelector('.button--load-more');
const newsList = document.querySelector('.news');
const buttonContainer = document.querySelector('.news-wrapper');

const cardItemInstance = new _NewsCardComponent_js__WEBPACK_IMPORTED_MODULE_1__["default"](newsList);
const searchBoxInstance = new _SearchComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"](form);

async function getNews(url) {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  if (result.list.length === 0) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["showError"])();
    loadMore.setAttribute('disabled', 'true');
    loadMore.removeEventListener('click', _utils_js__WEBPACK_IMPORTED_MODULE_2__["loadNews"]);
  }
  return result.list.forEach((item, index) => {
    if (index < 5) {
      cardItemInstance.init(item);
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  searchBoxInstance.init();
  getNews(_utils_js__WEBPACK_IMPORTED_MODULE_2__["links"].firstLoad);
});

loadMore.addEventListener('click', _utils_js__WEBPACK_IMPORTED_MODULE_2__["loadNews"]);


/***/ }),

/***/ "./src/assets/js/utils.js":
/*!********************************!*\
  !*** ./src/assets/js/utils.js ***!
  \********************************/
/*! exports provided: removeAllNews, showError, getSearchResult, links, loadNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllNews", function() { return removeAllNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchResult", function() { return getSearchResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadNews", function() { return loadNews; });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/assets/js/main.js");


function removeAllNews() {
  while (_main_js__WEBPACK_IMPORTED_MODULE_0__["newsList"].firstChild) {
    _main_js__WEBPACK_IMPORTED_MODULE_0__["newsList"].removeChild(_main_js__WEBPACK_IMPORTED_MODULE_0__["newsList"].firstChild);
  }
}

function showError() {
  return (_main_js__WEBPACK_IMPORTED_MODULE_0__["newsList"].innerHTML = '<h1>Не удалось получить новости</h1>');
}

async function getSearchResult(getNews) {
  await getNews;
  const result = await _main_js__WEBPACK_IMPORTED_MODULE_0__["newsList"].firstChild;
  result.classList.remove('news__card--main-news');
}

const links = {
  firstLoad: 'https://my-json-server.typicode.com/bigfootdary/json-news/news',
  loadMore: 'https://my-json-server.typicode.com/bigfootdary/json-news/news-last-page',
  searchLoad: 'https://my-json-server.typicode.com/bigfootdary/json-news/news-filtered',
  error: 'https://my-json-server.typicode.com/bigfootdary/json-news/news-not-found',
};

async function isAllNewsShown(link) {
  const response = await fetch(link);
  const result = await response.json();
  if (result.page.current === result.page.total) {
    const message = document.createElement('p');
    message.textContent = 'Все новости загружены';
    _main_js__WEBPACK_IMPORTED_MODULE_0__["buttonContainer"].appendChild(message);
    setTimeout(() => {
      _main_js__WEBPACK_IMPORTED_MODULE_0__["buttonContainer"].classList.add('hide');
    }, 1000);
  }
}

function loadNews() {
  Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["getNews"])(links.loadMore);
  isAllNewsShown(links.loadMore);
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map