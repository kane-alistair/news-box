import NewsContainer from './news-container/newsContainer';

const app = () => {
  const root = document.getElementById('root');
  const newsContainer = NewsContainer();

  root.appendChild(newsContainer);
};

window.addEventListener('load', app);
