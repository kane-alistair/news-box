const ImagePlaceholder = (src, alt, className) => {
  const div = document.createElement('div');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add(`${className}-container`);

  const img = document.createElement('img');

  img.classList.add('img', className);
  img.src = src;
  img.alt = alt;

  imgContainer.appendChild(img);
  div.appendChild(imgContainer);
  return div;
};

export default ImagePlaceholder;
