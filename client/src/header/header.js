import MainNav from '../main-nav/mainNav';
import Logo from './logo/logo';

const Header = (navItems, logoText) => {
  const div = document.createElement('div');
  div.classList.add('header');

  const logo = Logo(logoText);
  const navBar = MainNav(navItems);

  div.appendChild(logo);
  div.appendChild(navBar);
  return div;
};

export default Header;
