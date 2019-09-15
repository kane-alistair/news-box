import ImagePlaceholder from './imagePlaceholder';

const HeroContainer = () => {
  const div = document.createElement('div');
  const imagePlaceholder = ImagePlaceholder('https://images.unsplash.com/photo-1435686858161-59da32dfd4b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80', 'audience', 'hero-img');

  div.appendChild(imagePlaceholder);
  return div;
};

export default HeroContainer;
