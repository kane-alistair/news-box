const cardType = (title) => {
  const styles = {
    Read: 'card-type-read',
    Watch: 'card-type-watch',
    Listen: 'card-type-listen',
  };

  const container = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = title.toUpperCase();
  container.classList.add('card-type', styles[title]);
  container.appendChild(p);
  return container;
}

export default cardType;
