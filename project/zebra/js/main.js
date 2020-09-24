/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import SearchComponent from './SearchComponent.js';
import NewsCardComponent from './NewsCardComponent.js';
import { links, loadNews, showError } from './utils.js';

const form = document.querySelector('form');
export const loadMore = document.querySelector('.button--load-more');
export const newsList = document.querySelector('.news');
export const buttonContainer = document.querySelector('.news-wrapper');

const cardItemInstance = new NewsCardComponent(newsList);
const searchBoxInstance = new SearchComponent(form);

export async function getNews(url) {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  if (result.list.length === 0) {
    showError();
    loadMore.setAttribute('disabled', 'true');
    loadMore.removeEventListener('click', loadNews);
  }
  return result.list.forEach((item, index) => {
    if (index < 5) {
      cardItemInstance.init(item);
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  searchBoxInstance.init();
  getNews(links.firstLoad);
});

loadMore.addEventListener('click', loadNews);
