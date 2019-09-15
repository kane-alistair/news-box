const Logo = (logoText) => {
  const div = document.createElement('div');
  const logoContainer = document.createElement('div');
  const logo = document.createElement('h1');
  logo.textContent = logoText;

  logoContainer.appendChild(logo);
  div.appendChild(logoContainer);
  return div;
};

export default Logo;
