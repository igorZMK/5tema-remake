const btn1 = document.querySelector(".brand-menu__button_show_all");

const text_show_all = document.querySelector(".brand-menu__text_show_all");

const cards = Array.from(document.querySelectorAll(".swiper .swiper-slide"));

const image_strelka = document.querySelector(".brand-menu__button img");

let flag = true;

btn1.addEventListener("click", openCatalog);

function openCatalog() {
  let abs = window.innerWidth;

  if (flag) {
    cards.forEach((item) => item.classList.remove("hidden"));
    flag = false;
    text_show_all.textContent = "Скрыть";
    image_strelka.style.transform = "rotate(180deg)";
  } else {
    let Elements;
    if (abs >= 768) {
      Elements = cards.slice(6);
    }

    if (abs >= 1120) {
      Elements = cards.slice(8);
    }

    Elements.forEach((item) => item.classList.add("hidden"));
    text_show_all.textContent = "Показать все";
    image_strelka.style.transform = "rotate(0deg)";
    flag = true;
  }
}

window.addEventListener("resize", (event) => {
  if (event.target.window.innerWidth >= 752) response1(), response2();
  if (event.target.window.innerWidth >= 1120) response2();
});
window.addEventListener("load", (event) => {
  if (event.currentTarget.window.innerWidth >= 752) response1();
  if (event.currentTarget.window.innerWidth >= 1120) response2();
});

function response1() {
  {
    if (window.innerWidth >= 769)
      cards.forEach((item, index) => {
        item.classList.add("hidden");
        if (index <= 5) {
          item.classList.remove("hidden");
        }
      });
  }
}
function response2() {
  {
    if (window.innerWidth >= 1120)
      cards.forEach((item, index) => {
        item.classList.add("hidden");
        if (index <= 7) {
          item.classList.remove("hidden");
        }
      });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const resizableswiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);

        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableswiper("(max-width: 769px)", ".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,

    pagination: {
      el: ".swiper-pagination",
    },
  });
});
