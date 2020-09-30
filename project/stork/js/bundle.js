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

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const addContactBtn = document.querySelector('.button--new');
const newContactWindow = document.querySelector('.create-contact');

addContactBtn.addEventListener('click', () => {
  newContactWindow.classList.toggle('hide');
});

const newContactForm = document.querySelector('.create-contact__form');
const nameFiled = newContactForm.querySelector('input[type="text"]');
const phoneFiled = newContactForm.querySelector('input[type="tel"]');
const mailFiled = newContactForm.querySelector('input[type="email"]');
const container = document.querySelector('.contacts__list');
let counter = 0;

class User {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this._element = null;
  }

  getTemaplte() {
    return `
        <input
          class="contacts__input"
          type="text"
          name="name"
          minlength="3"
          maxlength="32"
          value="${this.name}"
          disabled
        />
        <input 
          class="contacts__input" 
          type="email" 
          name="email" 
          value="${this.email}"
          disabled
        />
        <input
          class="contacts__input"
          type="tel"
          name="phone"
          pattern="[\+]\d{1}[\(]\d{3}[\)]\d{3}[\-]\d{2}[\-]\d{2}"
          minlength="16"
          maxlength="16"
          value="${this.phone}"
          disabled
        />
        <button class="button button--edit"></button>
        <button class="button button--remove"></button>
      `;
  }

  init() {
    this.createElement();
    container.appendChild(this._element);
    this.setListener();
  }

  createElement() {
    this._element = document.createElement('li');
    this._element.classList.add('contacts__item');
    this._element.innerHTML = this.getTemaplte();
  }

  setListener() {
    this._element.addEventListener('click', this.removeElement);
  }

  removeElement(evt) {
    this._element = null;

    const clickTarget = evt.target;
    const targetContainer = clickTarget.closest('li').querySelectorAll('input');

    if (clickTarget.classList.contains('button--edit')) {
      counter += 1;
      targetContainer.forEach((input) => {
        counter % 2 === 0
          ? input.setAttribute('disabled', 'true')
          : input.removeAttribute('disabled', 'true');
      });

      clickTarget.closest('li').classList.toggle('contacts__item--editable');
      clickTarget.classList.toggle('button--save');
    } else if (clickTarget.classList.contains('button--remove')) {
      container.removeChild(clickTarget.closest('li'));
    }
  }
}

let userInstance;

newContactForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  userInstance = new User(nameFiled.value, mailFiled.value, phoneFiled.value).init();

  newContactForm.reset();
});

const searchForm = document.querySelector('.search');
const searchField = searchForm.querySelector('input[type="search"]');

searchForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const contactsList = container.querySelectorAll('input[name="name"]');

  let searchResult = [];
  searchResult = Array.from(contactsList)
    .filter((item) => item.value.split(' ')[0] !== searchField.value)
    .forEach((element) => {
      console.log(element);
      element.closest('li').classList.add('visually-hidden');
    });
});

const refreshBtn = document.querySelector('.button--refresh');

refreshBtn.addEventListener('click', () => {
  container.querySelectorAll('li').forEach((el) => el.classList.remove('visually-hidden'));
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map