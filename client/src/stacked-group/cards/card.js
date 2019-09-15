import ImagePlaceholder from '../../hero/imagePlaceholder';
import CardHeader from './cardHeader';
import CardDate from './cardDate';
import CardContent from './cardContent';
import CardBtn from './cardBtn';
import CardType from './cardType';

const Card = (card) => {
  const div = document.createElement('div');
  div.classList.add('card');

  const img = ImagePlaceholder(card.img.url, card.img.alt, 'card-img');
  const cardHeader = CardHeader(card.header);
  const cardType = CardType(card.type);
  const cardContent = CardContent(card.content);
  const cardDate = CardDate(card.date);
  const moreInfoBtn = CardBtn('More Info');

  div.appendChild(img);
  div.appendChild(cardType);
  div.appendChild(cardHeader);
  div.appendChild(cardDate);
  div.appendChild(cardContent);
  div.appendChild(moreInfoBtn);
  return div;
};

export default Card;
