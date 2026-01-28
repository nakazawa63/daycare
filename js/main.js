
{
  const hamburger = document.querySelector('.hamburger');
  const hamburger__nav = document.querySelector('.hamburger__nav');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    hamburger__nav.classList.toggle('open');
  });
}

const button = document.querySelector('.backtotop');

button.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    button.classList.add('is-active');
  } else {
    button.classList.remove('is-active');
  }
});
