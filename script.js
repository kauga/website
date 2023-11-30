const headerEl = document.querySelector('.unorder-menu');
const mobileEl = document.querySelector('.menuBars');
const closeEl = document.querySelector('.times');

mobileEl.addEventListener('click', () => {
  headerEl.classList.add('hidden');
  console.log(`kauga`);
});

closeEl.addEventListener('click', function() {
  headerEl.classList.remove('hidden');
  console.log(`hellow world`);
})
