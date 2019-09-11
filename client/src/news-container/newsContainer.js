import HeroContainer from '../hero/heroContainer';
import StackedGroup from '../stacked-group/stackedGroup';

const NewsContainer = () => {
  const div = document.createElement('div');
  const heroContainer = HeroContainer();
  const stackedGroup = StackedGroup();

  div.appendChild(heroContainer);
  div.appendChild(stackedGroup);
  return div;
};

export default NewsContainer;
