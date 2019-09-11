const ImagePlaceholder = (src, alt) => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  img.classList.add('hero');
  img.src = src;
  img.alt = alt;
  div.appendChild(img);
  return div;
};


export default ImagePlaceholder;
