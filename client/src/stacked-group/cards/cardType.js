const cardType = (title) => {
  const styles = {
    read: 'card-type-read',
    watch: 'card-type-watch',
    listen: 'card-type-listen',
  };

  const container = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = title.toUpperCase();
  container.classList.add('card-type', styles[title.toLowerCase()]);
  container.appendChild(p);
  return container;
};

export default cardType;
