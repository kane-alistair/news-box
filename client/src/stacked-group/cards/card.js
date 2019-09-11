import ImagePlaceholder from '../../hero/imagePlaceholder';

const Card = (imgSrc, content) => {
  const div = document.createElement('div');
  div.classList.add('card');

  const img = ImagePlaceholder(imgSrc, 'card');
  img.classList.add('card-img');

  const pContainer = document.createElement('div');
  const contentP = document.createElement('p');
  contentP.classList.add('card-content');
  contentP.textContent = content;

  pContainer.appendChild(contentP);
  div.appendChild(img);
  div.appendChild(pContainer);
  return div;
};

export default Card;
