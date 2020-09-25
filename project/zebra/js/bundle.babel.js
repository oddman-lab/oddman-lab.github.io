"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/assets/js/NewsCardComponent.js":
  /*!********************************************!*\
    !*** ./src/assets/js/NewsCardComponent.js ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsJsNewsCardComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return NewsCardComponent;
    });

    var NewsCardComponent = /*#__PURE__*/function () {
      function NewsCardComponent(container) {
        _classCallCheck(this, NewsCardComponent);

        this.element = null;
        this.container = container;
      }

      _createClass(NewsCardComponent, [{
        key: "getTemplate",
        value: function getTemplate(news) {
          var date = news.date,
              title = news.title,
              theme = news.theme,
              spotlight = news.spotlight;
          return "\n          <p class=\"news__date\">".concat(date, "</p>\n          <h3 class=\"news__title\">\n              ").concat(title, "\n          </h3>\n          <p class=\"news__tags\">").concat(spotlight ? 'В центре внимания' : theme, "</p>\n          ");
        }
      }, {
        key: "init",
        value: function init(item) {
          this.createElement(item);
          this.container.appendChild(this.element);
          this.setMainNews(item);
          this.isTag();
        }
      }, {
        key: "createElement",
        value: function createElement(item) {
          this.element = document.createElement('div');
          this.element.classList.add('news__card');
          this.element.innerHTML = this.getTemplate(item);
        }
      }, {
        key: "setMainNews",
        value: function setMainNews(item) {
          if (item.spotlight) {
            console.log('I find spotlight', item);
            var mainNews = this.container.firstChild;
            mainNews.classList.add('news__card--main-news');
          }
        }
      }, {
        key: "removeMainNews",
        value: function removeMainNews() {
          var mainNews = this.container.firstChild;
          mainNews.classList.remove('news__card--main-news');
        }
      }, {
        key: "isTag",
        value: function isTag() {
          var el = this.element.querySelector('.news__tags');

          if (el.textContent === '') {
            el.style.display = 'none';
          }
        }
      }]);

      return NewsCardComponent;
    }();
    /***/

  },

  /***/
  "./src/assets/js/SearchComponent.js":
  /*!******************************************!*\
    !*** ./src/assets/js/SearchComponent.js ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsJsSearchComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./utils.js */
    "./src/assets/js/utils.js");
    /* harmony import */


    var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main.js */
    "./src/assets/js/main.js");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(container) {
        _classCallCheck(this, SearchComponent);

        this.element = null;
        this.input = null;
        this.container = container;
      }

      _createClass(SearchComponent, [{
        key: "init",
        value: function init() {
          this.createElement();
          this.container.appendChild(this.element);
          this.setStyles();
          this.addListener();
        }
      }, {
        key: "createElement",
        value: function createElement() {
          this.element = document.createElement('input');
        }
      }, {
        key: "setStyles",
        value: function setStyles() {
          this.element.type = 'search';
          this.element.classList.add('search-form__input', 'search');
          this.element.setAttribute('id', 'search');
          this.element.placeholder = 'Поиск';
        }
      }, {
        key: "addListener",
        value: function addListener() {
          this.container.addEventListener('submit', this.onSearchHandler);
        }
      }, {
        key: "onSearchHandler",
        value: function onSearchHandler(evt) {
          evt.preventDefault();
          isButtonVisible();
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["removeAllNews"])();
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getSearchResult"])(Object(_main_js__WEBPACK_IMPORTED_MODULE_1__["getNews"])(_utils_js__WEBPACK_IMPORTED_MODULE_0__["links"].searchLoad));
        }
      }]);

      return SearchComponent;
    }();

    function isButtonVisible() {
      if (_main_js__WEBPACK_IMPORTED_MODULE_1__["buttonContainer"].classList.contains('hide')) {
        _main_js__WEBPACK_IMPORTED_MODULE_1__["buttonContainer"].removeChild(_main_js__WEBPACK_IMPORTED_MODULE_1__["buttonContainer"].lastElementChild);

        _main_js__WEBPACK_IMPORTED_MODULE_1__["buttonContainer"].classList.remove('hide');
      }
    }
    /***/

  },

  /***/
  "./src/assets/js/main.js":
  /*!*******************************!*\
    !*** ./src/assets/js/main.js ***!
    \*******************************/

  /*! exports provided: loadMore, newsList, buttonContainer, getNews */

  /***/
  function srcAssetsJsMainJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadMore", function () {
      return loadMore;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "newsList", function () {
      return newsList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "buttonContainer", function () {
      return buttonContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNews", function () {
      return getNews;
    });
    /* harmony import */


    var _SearchComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./SearchComponent.js */
    "./src/assets/js/SearchComponent.js");
    /* harmony import */


    var _NewsCardComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./NewsCardComponent.js */
    "./src/assets/js/NewsCardComponent.js");
    /* harmony import */


    var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utils.js */
    "./src/assets/js/utils.js");
    /* eslint-disable class-methods-use-this */

    /* eslint-disable max-classes-per-file */


    var form = document.querySelector('form');
    var loadMore = document.querySelector('.button--load-more');
    var newsList = document.querySelector('.news');
    var buttonContainer = document.querySelector('.news-wrapper');
    var cardItemInstance = new _NewsCardComponent_js__WEBPACK_IMPORTED_MODULE_1__["default"](newsList);
    var searchBoxInstance = new _SearchComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"](form);

    function getNews(_x) {
      return _getNews.apply(this, arguments);
    }

    function _getNews() {
      _getNews = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
        var response, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(url);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                result = _context.sent;
                console.log(result);

                if (result.list.length === 0) {
                  Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["showError"])();
                  loadMore.setAttribute('disabled', 'true');
                  loadMore.removeEventListener('click', _utils_js__WEBPACK_IMPORTED_MODULE_2__["loadNews"]);
                }

                return _context.abrupt("return", result.list.forEach(function (item, index) {
                  if (index < 5) {
                    cardItemInstance.init(item);
                  }
                }));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getNews.apply(this, arguments);
    }

    window.addEventListener('DOMContentLoaded', function () {
      searchBoxInstance.init();
      getNews(_utils_js__WEBPACK_IMPORTED_MODULE_2__["links"].firstLoad);
    });
    loadMore.addEventListener('click', _utils_js__WEBPACK_IMPORTED_MODULE_2__["loadNews"]);
    /***/
  },

  /***/
  "./src/assets/js/utils.js":
  /*!********************************!*\
    !*** ./src/assets/js/utils.js ***!
    \********************************/

  /*! exports provided: removeAllNews, showError, getSearchResult, links, loadNews */

  /***/
  function srcAssetsJsUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeAllNews", function () {
      return removeAllNews;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "showError", function () {
      return showError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSearchResult", function () {
      return getSearchResult;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "links", function () {
      return links;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadNews", function () {
      return loadNews;
    });
    /* harmony import */


    var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./main.js */
    "./src/assets/js/main.js");

    function removeAllNews() {
      while (_main_js__WEBPACK_IMPORTED_MODULE_0__["newsList"].firstChild) {
        _main_js__WEBPACK_IMPORTED_MODULE_0__["newsList"].removeChild(_main_js__WEBPACK_IMPORTED_MODULE_0__["newsList"].firstChild);
      }
    }

    function showError() {
      return _main_js__WEBPACK_IMPORTED_MODULE_0__["newsList"].innerHTML = '<h1>Не удалось получить новости</h1>';
    }

    function getSearchResult(_x2) {
      return _getSearchResult.apply(this, arguments);
    }

    function _getSearchResult() {
      _getSearchResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(getNews) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getNews;

              case 2:
                _context2.next = 4;
                return _main_js__WEBPACK_IMPORTED_MODULE_0__["newsList"].firstChild;

              case 4:
                result = _context2.sent;
                result.classList.remove('news__card--main-news');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _getSearchResult.apply(this, arguments);
    }

    var links = {
      firstLoad: 'https://my-json-server.typicode.com/bigfootdary/json-news/news',
      loadMore: 'https://my-json-server.typicode.com/bigfootdary/json-news/news-last-page',
      searchLoad: 'https://my-json-server.typicode.com/bigfootdary/json-news/news-filtered',
      error: 'https://my-json-server.typicode.com/bigfootdary/json-news/news-not-found'
    };

    function isAllNewsShown(_x3) {
      return _isAllNewsShown.apply(this, arguments);
    }

    function _isAllNewsShown() {
      _isAllNewsShown = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(link) {
        var response, result, message;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch(link);

              case 2:
                response = _context3.sent;
                _context3.next = 5;
                return response.json();

              case 5:
                result = _context3.sent;

                if (result.page.current === result.page.total) {
                  message = document.createElement('p');
                  message.textContent = 'Все новости загружены';

                  _main_js__WEBPACK_IMPORTED_MODULE_0__["buttonContainer"].appendChild(message);

                  setTimeout(function () {
                    _main_js__WEBPACK_IMPORTED_MODULE_0__["buttonContainer"].classList.add('hide');
                  }, 1000);
                }

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _isAllNewsShown.apply(this, arguments);
    }

    function loadNews() {
      Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["getNews"])(links.loadMore);
      isAllNewsShown(links.loadMore);
    }
    /***/

  }
  /******/

});