import Card from './cards/card';

const StackedGroup = (cards) => {
  const div = document.createElement('div');
  div.classList.add('stacked-group');

  cards.forEach((data) => {
    const card = Card(data);
    div.appendChild(card);
  });

  return div;
};

export default StackedGroup;
