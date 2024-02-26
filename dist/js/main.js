(() => {
  document.addEventListener('DOMContentLoaded', () => {

    //============================================================LANGUAGE-BTN-START
    var langBtn = document.querySelectorAll('.language__btn'),
      langActive = document.getElementsByClassName('language-active');

    if (!langBtn) {
      return;
    } else {
      Array.from(langBtn).forEach(function (item, i, langBtn) {
        item.addEventListener('click', function (e) {
          if (langActive.length > 0 && langActive[0] !== this)
            langActive[0].classList.remove('language-active');

          this.classList.add('language-active');
        });
      });
    }
    //============================================================LANGUAGE-BTN-END

    //============================================================NAV-BTN-START
    var navLink = document.querySelectorAll('.nav__link'),
      active = document.getElementsByClassName('nav-active'),
      burgerBtn = document.getElementById('burger');

    Array.from(navLink).forEach(function (item, i, navLink) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('nav-active');

        this.classList.toggle('nav-active');

        if (active.length != 0) {
          burgerBtn.classList.add('active');
        } else {
          burgerBtn.classList.remove('active');
        }
      });

      burgerBtn.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('nav-active');

        burgerBtn.classList.remove('active');
      });
    });
    //============================================================NAV-BTN-END


    //============================================================SMOOTH-SCROLL-START
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
    //============================================================SMOOTH-SCROLL-END

    //============================================================SWIPER-START
    var swiper = new Swiper(".banner__slider", {
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });

    var swiper = new Swiper(".interview__slider", {
      slidesPerView: 4,
      spaceBetween: 20,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".interview__btn-next",
        prevEl: ".interview__btn-prev",
      },
      mousewheel: true,
      keyboard: true,
    });

    var swiper = new Swiper(".tv__slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".tv__btn-next",
        prevEl: ".tv__btn-prev",
      },
      mousewheel: true,
      keyboard: true,
    });

    var swiper = new Swiper(".popular__slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".popular__btn-next",
        prevEl: ".popular__btn-prev",
      },
      mousewheel: true,
      keyboard: true,
    });
    //============================================================SWIPER-END  

  });
})();