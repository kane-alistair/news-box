const MainNav = (items) => {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const navContainer = document.createElement('div');
  navContainer.classList.add('navbar-container');

  const list = document.createElement('ul');
  list.classList.add('navbar');

  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('nav-item');
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  navContainer.appendChild(list);
  nav.appendChild(navContainer);
  return nav;
};

export default MainNav;
