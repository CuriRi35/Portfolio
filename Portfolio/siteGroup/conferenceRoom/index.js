const trueButton = document.getElementById('true');
trueButton.addEventListener('click', function() {
  const flagElement = document.querySelector('.flag');
  flagElement.textContent = '使用中';
});

const falseButton = document.getElementById('false');
falseButton.addEventListener('click', function() {
  const flagElement = document.querySelector('.flag');
  flagElement.innerHTML = '&nbsp;空き&nbsp;&nbsp;';
});