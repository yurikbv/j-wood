'use strict';

(function () {
  let portfolio = document.querySelector('.portfolio');
  let modalSlider = document.querySelector('.modal__fullscreen-image');
  let modalImage = modalSlider.querySelector('.modal__picture');
  let modalClose = modalSlider.querySelector('.modal__close');

  function setClose(){
    modalClose.style.left = modalImage.clientWidth + modalImage.getBoundingClientRect().left - 50  + 'px';
    modalClose.style.top = modalImage.getBoundingClientRect().top + 15 + 'px'
  }

  function closeModal(){
    modalSlider.style.display = 'none';
    modalImage.src = '';
  }

  function onEscPress(event){
    if(event.code === 'Escape'){
      closeModal();
      window.removeEventListener('keydown',onEscPress);
    }
  }

  portfolio.addEventListener('click',function (event) {
    event.preventDefault();
    if(event.target.nodeName === 'IMG'){
      modalSlider.style.display = 'flex';
      modalImage.src = event.target.dataset.src;
      modalImage.addEventListener('load',setClose);
      modalClose.addEventListener('click',closeModal);
      window.addEventListener('keydown',onEscPress);
    }
  });

})();