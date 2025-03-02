(() => {
  document.addEventListener('DOMContentLoaded', () => {

    //============================================================BURGER-START
    const burger = document.querySelector('.burger')
    const burgerOverlay = document.querySelector('.burger__overlay')
    const burgerMenu = document.querySelector('.burger__menu')
    const burgerClose = document.querySelector('.burger__close')
    const burgerOpen = document.querySelector('.burger__open')

    burgerMenu.onclick = function (e) {
      e.stopPropagation()
    }

    function showBurger() {
      burger.classList.add('burger-active')
      document.body.classList.add('scroll-lock');
    }

    function hiddenBurger() {
      burger.classList.remove('burger-active')
      document.body.classList.remove('scroll-lock');
    }

    burgerOpen.addEventListener('click', showBurger)

    burgerClose.addEventListener('click', hiddenBurger)

    burgerOverlay.addEventListener('click', hiddenBurger)
    //============================================================BURGER-END

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
      active = document.getElementsByClassName('nav-active');

    Array.from(navLink).forEach(function (item, i, navLink) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('nav-active');

        this.classList.toggle('nav-active');
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
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".interview__btn-next",
        prevEl: ".interview__btn-prev",
      },

      keyboard: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    var swiper = new Swiper(".tv__slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".tv__btn-next",
        prevEl: ".tv__btn-prev",
      },
      breakpoints: {
        820: {
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
            nextEl: ".tv__btn-next",
            prevEl: ".tv__btn-prev",
          },
          keyboard: true,

        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
            nextEl: ".tv__btn-next",
            prevEl: ".tv__btn-prev",
          },
          keyboard: true,

        },
      },
    });

    var swiper = new Swiper(".popular__slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".popular__btn-next",
        prevEl: ".popular__btn-prev",
      },

      keyboard: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        820: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });

    var swiper = new Swiper(".news__slider-first", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      navigation: {
        nextEl: ".news__slider-first--btn-next",
        prevEl: ".news__slider-first--btn-prev",
      },

      keyboard: true,
    });

    var swiper = new Swiper(".news__slider-second", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      navigation: {
        nextEl: ".news__slider-second--btn-next",
        prevEl: ".news__slider-second--btn-prev",
      },

      keyboard: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });

    var swiper = new Swiper(".theater__slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".theater__btn-next",
        prevEl: ".theater__btn-prev",
      },

      keyboard: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        820: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });

    var swiper = new Swiper(".book__content", {
      direction: "vertical",
      slidesPerView: "auto",
      spaceBetween: 15,
      grabCursor: true,
      freeMode: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      mousewheel: true,
    });

    var swiper = new Swiper(".books__slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".books__btn-next",
        prevEl: ".books__btn-prev",
      },
      breakpoints: {
        660: {
          slidesPerView: 2,
          spaceBetween: 20,
          navigation: {
            nextEl: ".books__btn-next",
            prevEl: ".books__btn-prev",
          },
          keyboard: true,

        },
        820: {
          slidesPerView: 3,
          spaceBetween: 20,
          navigation: {
            nextEl: ".books__btn-next",
            prevEl: ".books__btn-prev",
          },
          keyboard: true,

        },
        991: {
          slidesPerView: 4,
          spaceBetween: 20,
          navigation: {
            nextEl: ".books__btn-next",
            prevEl: ".books__btn-prev",
          },
          keyboard: true,

        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
          navigation: {
            nextEl: ".books__btn-next",
            prevEl: ".books__btn-prev",
          },
          keyboard: true,

        },
      },
    });
    //============================================================SWIPER-END  

    //============================================================FILTER-BTN-START
    (function () {
      const rubricBtn = document.getElementById('rubricBtn');

      if (!rubricBtn) {
        return;
      } else {
        rubricBtn.addEventListener('click', function () {
          rubricBtn.classList.toggle('filter-active');
        });

        var rubricItem = document.querySelectorAll('.rubric__filter-item');

        Array.from(rubricItem).forEach(function (item, i, rubricItem) {
          item.addEventListener('click', function (e) {
            rubricBtn.innerHTML = this.value;
            rubricBtn.value = this.value;
            rubricBtn.classList.remove('filter-active');
          });
        });
      }
    })();

    (function () {
      const theaterBtn = document.getElementById('theaterBtn');

      if (!theaterBtn) {
        return;
      } else {
        theaterBtn.addEventListener('click', function () {
          theaterBtn.classList.toggle('filter-active');
        });

        var theaterItem = document.querySelectorAll('.theater__filter-item');

        Array.from(theaterItem).forEach(function (item, i, theaterItem) {
          item.addEventListener('click', function (e) {
            theaterBtn.innerHTML = this.value;
            theaterBtn.value = this.value;
            theaterBtn.classList.remove('filter-active');
          });
        });
      }
    })();
    //============================================================FILTER-BTN-END

    //============================================================TAB-BTN-START
    const tabBtn = document.querySelectorAll('.theater__tab-item')
    const tabItem = document.querySelectorAll('.theater-box__item')

    tabBtn.forEach(tabClick);

    function tabClick(item) {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('tab-active')) {

          tabBtn.forEach(function (item) {
            item.classList.remove('tab-active');
          });

          tabItem.forEach(function (item) {
            item.classList.remove('tab-active');
          });

          currentBtn.classList.add('tab-active');
          currentTab.classList.add('tab-active');
        }
      })
    }
    //============================================================TAB-BTN-END

    //============================================================TABS-BTN-START
    const tab__btns = document.querySelector('.tab__btns');

    if (!tab__btns) {
      return;
    } else {
      const tabBtn = document.querySelectorAll('.tab__btn')
      const tabItem = document.querySelectorAll('.tab__item')

      tabBtn.forEach(tabClick);

      function tabClick(item) {
        item.addEventListener('click', function () {
          let currentBtn = item;
          let tabId = currentBtn.getAttribute('data-tab');
          let currentTab = document.querySelector(tabId);

          if (!currentBtn.classList.contains('tab-active')) {

            tabBtn.forEach(function (item) {
              item.classList.remove('tab-active');
            });

            tabItem.forEach(function (item) {
              item.classList.remove('tab-active');
            });

            currentBtn.classList.add('tab-active');
            currentTab.classList.add('tab-active');
          }
        })
      }
    }
    //============================================================TABS-BTN-END

  });
})();