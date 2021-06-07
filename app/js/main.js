$(document).ready(function() {
  $(".top__slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true
  });
});

$(document).ready(function() {
  $(".contact__slider").slick({
    dots: true,
    slidesToShow: 10,
    slidesToScroll: 10,
    arrows: false
  });
});

$(document).ready(function() {
  $(".article-slider__box").slick({
    prevArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-right.svg" alt=""></button>'
  });
});

const rightsideMenuClose = document.querySelector(".rightside-menu__close");
const rightsideMenu = document.querySelector(".rightside-menu");
const headerBtn = document.querySelector(".header__btn");
rightsideMenuClose.addEventListener("click", () => {
  rightsideMenu.classList.remove("rightside-menu-show");
});
headerBtn.addEventListener("click", () => {
  rightsideMenu.classList.add("rightside-menu-show");
});

const containerEl = document.querySelector(".gallery__inner");

if (containerEl) {
  let mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".bedroom"
    },
    animation: {
      duration: 1000,
      nudge: false,
      reverseOut: false,
      effects: "fade scale(0.41)"
    }
  });
}

$(document).ready(function() {
  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 0,
      showinfo: 0
    },
    vimeo: {
      color: "f00"
    }
  });
});
