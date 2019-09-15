const cardContent = (content) => {
  const p = document.createElement('p');
  p.classList.add('card-content');
  p.textContent = content;
  return p;
};

export default cardContent;
