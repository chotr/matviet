export default function SwiperModule() {
  var galleryTop = new Swiper(".gallery-top", {
    loop: true,
    loopedSlides: 2,
    speed: 1000,
    effect: "fade",
    parallax: true,
    grabCursor: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 5000,
    },
    on: {
      slideChange: function () {
        var activeIndex = this.activeIndex;
        var realIndex = this.slides
          .eq(activeIndex)
          .attr("data-swiper-slide-index");
        $(".banner .gallery-top .swiper-slide").removeClass("my-active");
        $(
          '.banner .gallery-top .swiper-slide[data-swiper-slide-index="' +
            realIndex +
            '"]'
        ).addClass("my-active");
      },
    },
  });
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 2,
    speed: 1000,
    on: {
      slideChange: function () {
        var activeIndex = this.activeIndex;
        var realIndex = this.slides
          .eq(activeIndex)
          .attr("data-swiper-slide-index");
        $(".banner-home .gallery-thumbs .swiper-slide").removeClass(
          "my-active"
        );
        $(
          '.banner-home .gallery-thumbs .swiper-slide[data-swiper-slide-index="' +
            realIndex +
            '"]'
        ).addClass("my-active");
      },
    },

    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 2.3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;

  const marqueeTxt = document.querySelector(".marquee-list");

  if (marqueeTxt) {
    let SwiperTop = new Swiper(".marquee-list", {
      spaceBetween: 0,
      centeredSlides: true,
      speed: 7000,
      autoplay: {
        delay: 1,
      },
      loop: true,
      slidesPerView: "auto",
      allowTouchMove: false,
      disableOnInteraction: true,
    });
  }

  const SwiperTabCT = document.querySelector(".home-1");

  if (SwiperTabCT) {
    SwiperTabCT.querySelectorAll(".tab-content-item").forEach((ele, i) => {
      var tabSw = new Swiper(ele.querySelectorAll(".swiper-container")[0], {
        spaceBetween: 10,
        speed: 1000,
        slidesPerView: 1,
        navigation: {
          nextEl: ele.querySelector(".tab.next"),
          prevEl: ele.querySelector(".tab.prev"),
        },
      });
    });
  }
  var swiper = new Swiper(".banner-home .banner-slide", {
    direction: "vertical",
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".banner-home .swiper-pagination",
      clickable: true,
    },
  });

  const collectionSl = document.querySelector(".collection-slide");

  if (collectionSl) {
    var tabSw = new Swiper(collectionSl.querySelector(".swiper-container"), {
      spaceBetween: 12,
      speed: 1000,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: collectionSl.querySelector(".collec.next"),
        prevEl: collectionSl.querySelector(".collec.prev"),
      },
      breakpoints: {
        450: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        }
      }
    });
  }

  const prSL = document.querySelector(".product-slide");

  if (prSL) {
    var prsw = new Swiper(prSL.querySelector(".all"), {
      speed: 1000,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: prSL.querySelector(".for-u.next"),
        prevEl: prSL.querySelector(".for-u.prev"),
      },

      breakpoints: {
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
      },
    });
  }

  const productItem = document.querySelectorAll(".product-item");

  if (productItem.length > 0) {
    productItem.forEach((ele, i) => {
      const main = ele.querySelector(".img-main .swiper-container");
      const thumbs = ele.querySelector(".img-thumbs .swiper-container");

      var imgThumbs = new Swiper(thumbs, {
        spaceBetween: 5,
        speed: 1000,
        slidesPerView: 3,
        breakpoints: {
          400: {
            spaceBetween: 10,
            slidesPerView: 4,
          },
          800: {
            slidesPerView: 4,
          },
          1200: {
            spaceBetween: 25,
            slidesPerView: 5,
          }
        }
      });

      var mainImg = new Swiper(main, {
        spaceBetween: 10,
        speed: 1000,
        slidesPerView: 1,
        thumbs: {
          swiper: imgThumbs,
        },
        navigation: {
          nextEl: ele.querySelector(".next"),
          prevEl: ele.querySelector(".prev"),
        },
      });
    });

    // mainImg.controller.control = imgThumbs;
    // imgThumbs.controller.control = mainImg;
  }

  const brandLst = document.querySelector(".brand-slide");

  if (brandLst) {
    var prsw = new Swiper(brandLst.querySelector(".swiper-container"), {
      speed: 1000,
      slidesPerView: 1,
      freeMode: true,
      navigation: {
        nextEl: brandLst.querySelector(".brand.next"),
        prevEl: brandLst.querySelector(".brand.prev"),
      },
    });
  }

  const cmtSl = document.querySelector(".comment-slide");

  if (cmtSl) {
    var cmt = new Swiper(".comment-slide .swiper-container", {
      direction: "horizontal",
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      },
      slidesPerView: 1,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      spaceBetween: 15,
      pagination: {
        el: ".comment-slide .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        800: {
          direction: "vertical",
        },
      }
    });
  }

  const newsHome = document.querySelector(".news-list");

  if (newsHome) {
    var cmt = new Swiper(".news-list .swiper-container", {
      slidesPerView: 1,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      loop: true,
      navigation: {
        nextEl: newsHome.querySelector(".next"),
        prevEl: newsHome.querySelector(".prev"),
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      }
    });
  }

  const newsRlated = document.querySelector(".news-related-list");

  if (newsRlated) {
    var cmt = new Swiper(".news-related-list .swiper-container", {
      slidesPerView: 3,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      loop: true,
      navigation: {
        nextEl: newsRlated.querySelector(".next"),
        prevEl: newsRlated.querySelector(".prev"),
      },
    });
  }

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    centeredSlides: true,
    speed: 7000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });

  const slLogo = document.querySelector(".logo-slide .swiper-container");

  if (slLogo) {
    var swiper = new Swiper(".logo-slide .swiper-container", {
      spaceBetween: 50,
      speed: 1000,
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: slLogo.parentElement.querySelector(".next"),
        prevEl: slLogo.parentElement.querySelector(".prev"),
      },
      breakpoints: {
        360: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 4,
        }
      }
    });
  }

  const ftCt = document.querySelectorAll(".feature-content");

  if (ftCt.length > 0) {
    ftCt.forEach((ele, i) => {
      var cmt = new Swiper(ele.querySelector(".swiper-container"), {
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
          delay: 5000,
        },
        effect: "fade",
        pagination: {
          el: ele.querySelector(".swiper-pagination"),
          clickable: true,
        },
      });
    });
  }

  const category = document.querySelector(".cate-silde .swiper-container");

  if (category) {
    var swiper = new Swiper(category, {
      spaceBetween: 10,
      speed: 1000,
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: category.querySelector(".next"),
        prevEl: category.querySelector(".prev"),
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        450: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 4,
        },
        800: {
          slidesPerView: 5,
        },
      },
    });
  }

  const prThums = document.querySelector(".product-thumbs");
  const prMain = document.querySelector(".product-main");

  if (prMain && prThums) {
    var thumbs = new Swiper(prThums.querySelector(".swiper-container"), {
      direction: "horizontal",
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      },
      watchSlidesProgress: false,
      slidesPerView: 4,
      speed: 1000,
      spaceBetween: 15,
      pagination: {
        el: ".comment-slide .swiper-pagination",
        clickable: true,
      },
      pagination: {
        el: prThums.querySelector(".swiper-pagination"),
        type: "progressbar",
      },
      breakpoints: {
        1201: {
          direction: "vertical",
        },
      },
    });

    var swiper = new Swiper(prMain.querySelector(".swiper-container"), {
      spaceBetween: 10,
      speed: 1000,
      slidesPerView: 1,
      thumbs: {
        swiper: thumbs,
      },
    });
  }

  const colorSl = document.querySelector(".color-content");

  if (colorSl) {
    var swiper = new Swiper(colorSl.querySelector(".swiper-container"), {
      spaceBetween: 32,
      speed: 1000,
      slidesPerView: 4,
      navigation: {
        nextEl: colorSl.querySelector(".next"),
        prevEl: colorSl.querySelector(".prev"),
      },
    });

    const listCl = colorSl.querySelectorAll(".swiper-slide");

    listCl.forEach((ele, i) => {
      ele.addEventListener("click", (e) => {
        listCl.forEach((ele1, j) => {
          ele1.classList.remove("cl-active");
        });

        ele.classList.add("cl-active");
      });
    });
  }

  const glassesSl = document.querySelector(".glasses-slide .swiper-container");

  if (glassesSl) {
    var swiper2 = new Swiper(glassesSl, {
      spaceBetween: 0,
      speed: 1000,
      slidesPerView: 5,
      loop: true,
      centeredSlides: true,
      on: {
        slideChange: function (realIndex) {
          var activeIndex = this.activeIndex;
          var realIndex = this.slides
            .eq(activeIndex)
            .attr("data-swiper-slide-index");
          $(".glasses-slide .swiper-slide").removeClass("my-active");
          $(
            '.glasses-slide .swiper-slide[data-swiper-slide-index="' +
              realIndex +
              '"]'
          ).addClass("my-active");
          $(".glasses-slide .swiper-slide").removeClass("my-active-1");
          $(".glasses-slide .my-active").next().addClass("my-active-1");

          $(".glasses-slide .swiper-slide").removeClass("my-active-2");
          $(".glasses-slide .my-active").next().next().addClass("my-active-2");

          $(".glasses-slide .swiper-slide").removeClass("my-active-2-1");
          $(".glasses-slide .my-active")
            .next()
            .next()
            .next()
            .addClass("my-active-2-1");

          $(".glasses-slide .swiper-slide").removeClass("my-active-3");
          $(".glasses-slide .my-active").prev().addClass("my-active-3");

          $(".glasses-slide .swiper-slide").removeClass("my-active-4");
          $(".glasses-slide .my-active").prev().prev().addClass("my-active-4");
        },
      },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      loopedSlides: 5,
    });

    var swiper1 = new Swiper(".glasses-slide-content .swiper-container", {
      spaceBetween: 10,
      speed: 1000,
      slidesPerView: 1,
      loopedSlides: 5,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: ".glasses-slide-content .swiper-pagination",
        clickable: true,
      },
      // effect: "fade",
    });

    swiper2.controller.control = swiper1;
    swiper1.controller.control = swiper2;
  }

  const glRelated = document.querySelector(
    ".glasses-related .swiper-container"
  );

  if (glRelated) {
    var swiper1 = new Swiper(glRelated, {
      spaceBetween: 104,
      speed: 1000,
      slidesPerView: 3,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: glRelated.parentElement.querySelector(".next"),
        prevEl: glRelated.parentElement.querySelector(".prev"),
      },
    });
  }
  var cmtSwiper = new Swiper(".cmt-slider .swiper", {
    spaceBetween: 0,
    speed: 1000,
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: ".cmt-slider .swiper-next",
      prevEl: ".cmt-slider .swiper-prev",
    },
    pagination: {
      el: ".cmt-slider .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 1,
      },
    },
  });
  const svSl = document.querySelector(".services-list .swiper-container");

  if (svSl) {
    var swiper1 = new Swiper(svSl, {
      spaceBetween: 0,
      speed: 1000,
      slidesPerView: 1,
      // navigation: {
      //   nextEl: glRelated.parentElement.querySelector(".next"),
      //   prevEl: glRelated.parentElement.querySelector(".prev"),
      // },
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        850: {
          slidesPerView: 3,
        },
        1201: {
          slidesPerView: 4,
        },
      },
    });
  }
}
