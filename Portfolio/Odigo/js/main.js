document.querySelector('.menu-icon-wrapper').onclick = function(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  document.querySelector('.header__nav').classList.toggle('header__nav--visible');
}


(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
  const menuLinks = document.querySelectorAll('.header__link');
  burgerItem.addEventListener('click', () => {
      menu.classList.add('header__nav_active');
  });
  menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
  });
  if (window.innerWidth <= 767) {
      for (let i = 0; i < menuLinks.length; i += 1) {
          menuLinks[i].addEventListener('click', () => {
              menu.classList.remove('header__nav_active');
          });
      }
  }
}());
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add('header__active');
    } else {
      header.classList.remove('header__active')
    }
  };
}());