import Card from './cards/card';

const StackedGroup = () => {
  const div = document.createElement('div');
  div.classList.add('stacked-group');

  // Quick demo URL img
  const url = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';
  const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  // Usually loop through the actual card data which could be passed in as an argument
  for (let i = 0; i < 9; i += 1) {
    const card = Card(url, content);
    div.appendChild(card);
  }

  return div;
};

export default StackedGroup;
