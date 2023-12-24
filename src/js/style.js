// How to use
// data-da="куда,когда,какой"
import { useDynamicAdapt } from '/src/js/dynamicAdapt.js'
useDynamicAdapt()

document.querySelector('.burger').addEventListener('click', function () {
   document.querySelector('.burger').classList.toggle('active');
   document.querySelector('.header__bar').classList.toggle('active');
   document.querySelector('.header__button').classList.toggle('active');
})
