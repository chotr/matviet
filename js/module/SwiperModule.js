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
      slidesPerView: 4,
      loop: true,
      navigation: {
        nextEl: collectionSl.querySelector(".collec.next"),
        prevEl: collectionSl.querySelector(".collec.prev"),
      },
    });
  }

  const prSL = document.querySelector(".product-slide");

  if (prSL) {
    var prsw = new Swiper(prSL.querySelector(".all"), {
      speed: 1000,
      slidesPerView: 3,
      loop: true,
      navigation: {
        nextEl: prSL.querySelector(".for-u.next"),
        prevEl: prSL.querySelector(".for-u.prev"),
      },
    });
  }

  const productItem = document.querySelectorAll(".product-item");

  if (productItem.length > 0) {
    productItem.forEach((ele, i) => {
      const main = ele.querySelector(".img-main .swiper-container");
      const thumbs = ele.querySelector(".img-thumbs .swiper-container");

      var imgThumbs = new Swiper(thumbs, {
        spaceBetween: 25,
        speed: 1000,
        loop: true,
        slidesPerView: 5,
      });

      var mainImg = new Swiper(main, {
        spaceBetween: 10,
        loop: true,
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
      spaceBetween: 15,
      pagination: {
        el: ".comment-slide .swiper-pagination",
        clickable: true,
      },
    });
  }

  const newsHome = document.querySelector(".news-list");

  if (newsHome) {
    var cmt = new Swiper(".news-list .swiper-container", {
      slidesPerView: 2,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      loop: true,
      navigation: {
        nextEl: newsHome.querySelector(".next"),
        prevEl: newsHome.querySelector(".prev"),
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

  const slLogo = document.querySelector(".logo-slide .swiper-container")

  if (slLogo) {
    var swiper = new Swiper(".logo-slide .swiper-container", {
      spaceBetween: 50,
      speed: 1000,
      loop: true,
      slidesPerView: 4,
      navigation: {
        nextEl: slLogo.parentElement.querySelector(".next"),
        prevEl: slLogo.parentElement.querySelector(".prev"),
      },
    });
  }

  const ftCt = document.querySelectorAll(".feature-content")

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
    })
  }

  const category = document.querySelector(".cate-silde .swiper-container")

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
      }
    });
  }

  const prThums = document.querySelector(".product-thumbs");
  const prMain = document.querySelector(".product-main");

  if (prMain && prThums) {
   

    var thumbs = new Swiper(prThums.querySelector(".swiper-container"), {
      direction: "vertical",
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      },
      watchSlidesProgress: false,
      slidesPerView: 4,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      spaceBetween: 15,
      pagination: {
        el: ".comment-slide .swiper-pagination",
        clickable: true,
      },
      pagination: {
        el:prThums.querySelector( ".swiper-pagination"),
        type: "progressbar",
      },
    });

    var swiper = new Swiper(prMain.querySelector(".swiper-container"), {
      spaceBetween: 10,
      speed: 1000,
      loop: true,
      slidesPerView: 1,
      thumbs: {
        swiper : thumbs
      }
    });
  }
}
