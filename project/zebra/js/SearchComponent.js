import { links, removeAllNews, getSearchResult } from './utils.js';
import { getNews } from './main.js';

export default class SearchComponent {
  constructor(container) {
    this.element = this.getTemplate();
    this.input = null;
    this.container = container;
  }

  getTemplate() {
    return `
        <input type="text" class="serch-form__input search" placeholder="Поиск" />
    `;
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
    this.element.type = 'text';
    this.element.classList.add('serch-form__input', 'search');
    this.element.placeholder = 'Поиск';
  }

  addListener() {
    this.container.addEventListener('submit', this.onSearchHandler);
  }

  onSearchHandler(evt) {
    evt.preventDefault();
    removeAllNews();
    getSearchResult(getNews(links.searchLoad));
  }
}
