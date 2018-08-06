'use strict';

(function() {

	let menuMain = document.querySelector('.menu__main');
	let menuLinkMobile = menuMain.querySelector('.menu__link--mobile');
	let iconMobile = menuMain.querySelector('.icon__mobile');

	function openMenu(){
		menuMain.classList.remove('menu__main--closed');
		menuMain.classList.add('menu__main--opened');
    iconMobile.classList.remove('icon__mobile--open');
    iconMobile.classList.add('icon__mobile--close');
		window.addEventListener('keydown',onEscPress)
	}

	function closeMenu(){
    menuMain.classList.remove('menu__main--opened');
    menuMain.classList.add('menu__main--closed');
    iconMobile.classList.remove('icon__mobile--close');
    iconMobile.classList.add('icon__mobile--open');
	}

	function onEscPress(event){
    if (event.code === 'Escape'){
      closeMenu();
      window.removeEventListener('keydown',onEscPress);
    }
	}

  menuLinkMobile.addEventListener('click',function (event) {
		event.preventDefault();
		if (iconMobile.classList.contains('icon__mobile--open')){
			openMenu();
		} else if(iconMobile.classList.contains('icon__mobile--close')){
			closeMenu();
		}
  })
})();
