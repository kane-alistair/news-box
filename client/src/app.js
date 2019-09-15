import NewsContainer from './news-container/newsContainer';
import cards from './cardData';

const app = () => {
  const root = document.getElementById('root');

  const logo = 'Nottingham Playhouse';
  const navItems = ['What\'s on', 'Get Involved', 'Your Visit', 'Hire Us', 'Support Us', 'About Us'];

  const newsContainer = NewsContainer(navItems, logo, cards);

  root.appendChild(newsContainer);
};

window.addEventListener('load', app);
