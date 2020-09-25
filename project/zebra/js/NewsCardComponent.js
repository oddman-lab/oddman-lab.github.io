export default class NewsCardComponent {
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
