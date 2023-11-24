const headerEl = document.querySelector('.unorder-menu');
const mobileEl = document.querySelector('.menuBars');
const closeEl = document.querySelector('.times');

mobileEl.addEventListener('click', () => {
  headerEl.classList.add('hidden');
  closeEl.classList.remove('hidden');
  console.log(`kauga`);
})

console.log();