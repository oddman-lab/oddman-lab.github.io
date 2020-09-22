import { loadMore, newsList, getNews } from './main.js';

export function removeAllNews() {
  while (newsList.firstChild) {
    newsList.removeChild(newsList.firstChild);
  }
}

export function showError() {
  return (newsList.innerHTML = '<h1>Не удалось получить новости</h1>');
}

export async function getSearchResult(getNews) {
  await getNews;
  const result = await newsList.firstChild;
  result.classList.remove('news__card--main-news');
}

export const links = {
  firstLoad: 'https://my-json-server.typicode.com/bigfootdary/json-news/news',
  loadMore: 'https://my-json-server.typicode.com/bigfootdary/json-news/news-last-page',
  searchLoad: 'https://my-json-server.typicode.com/bigfootdary/json-news/news-filtered',
  error: 'https://my-json-server.typicode.com/bigfootdary/json-news/news-not-found',
};

export const loadNews = () => {
  getNews(links.loadMore);
  loadMore.removeEventListener('click', loadNews);
  loadMore.style.display = 'none';
};
