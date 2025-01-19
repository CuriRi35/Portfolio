document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    scrollingSpeed: 700,
    anchors: ['section1', 'section2', 'section3', 'section4'],
  });
});