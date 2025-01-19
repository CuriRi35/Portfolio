function checkVisibility() {
  document.querySelectorAll('.fade-in').forEach(element => {
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

window.addEventListener('wheel', function(event) {
  event.preventDefault();
  window.scrollBy(0, event.deltaY * 0.4);
}, { passive: false });

checkVisibility();