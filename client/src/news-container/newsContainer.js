import HeroContainer from '../hero/heroContainer';
import StackedGroup from '../stacked-group/stackedGroup';
import Header from '../header/header';

const NewsContainer = (navItems, logo, cards) => {
  const div = document.createElement('div');
  const heroContainer = HeroContainer();
  const stackedGroup = StackedGroup(cards);

  const header = Header(navItems, logo);

  div.appendChild(header);
  div.appendChild(heroContainer);
  div.appendChild(stackedGroup);
  return div;
};

export default NewsContainer;
