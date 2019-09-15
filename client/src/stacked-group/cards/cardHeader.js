const cardHeader = (header) => {
  const container = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = header;
  container.classList.add('card-header');
  container.appendChild(p);
  return container;
};

export default cardHeader;
