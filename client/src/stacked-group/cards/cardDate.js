const cardDate = (date) => {
  const container = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = date;
  container.classList.add('card-date');
  container.appendChild(p);
  return container;
};

export default cardDate;
