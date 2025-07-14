'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const text = document.getElementById('under-construction');
  let numberOfDots = 0;
  setInterval(() => {
    numberOfDots = (numberOfDots + 1) % 4;
    text.textContent = 'Under Construction' + '.'.repeat(numberOfDots);
  }, 500);
});
