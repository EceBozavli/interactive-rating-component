const ratingBtns = document.querySelectorAll('.ratingBtns button');
const submitBtn = document.querySelector('.submitBtn');
const ratingResult = document.querySelector('.ratingResult');
const thankYou = document.querySelector('.thankYou');
const containerInner = document.querySelector('.containerInner');
let btnValue = '';

for(const btn of ratingBtns) {
  
  btn.addEventListener('click', function() {
    btnValue = btn.innerText;

  });
}

submitBtn.addEventListener('click', function() {
  thankYou.classList.remove('disable');
  containerInner.classList.add('disable');
  ratingResult.innerText = `You selected ${btnValue} out of 5`
});