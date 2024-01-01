document.querySelector('.burger').addEventListener('click', function () {
   document.querySelector('.burger').classList.toggle('active');
   document.querySelector('.nav__bar').classList.toggle('active');
   document.querySelector('.nav__button').classList.toggle('active');
})