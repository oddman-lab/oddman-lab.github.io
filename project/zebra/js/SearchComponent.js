import { links, removeAllNews, getSearchResult } from './utils.js';
import { getNews, buttonContainer } from './main.js';

export default class SearchComponent {
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
    removeAllNews();
    getSearchResult(getNews(links.searchLoad));
  }
}

function isButtonVisible() {
  if (buttonContainer.classList.contains('hide')) {
    buttonContainer.removeChild(buttonContainer.lastElementChild);
    buttonContainer.classList.remove('hide');
  }
}
