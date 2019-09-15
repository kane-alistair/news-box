const cardBtn = (content) => {
  const btn = document.createElement('button');
  btn.classList.add('card-btn');
  btn.textContent = content;
  return btn;
};

export default cardBtn;
