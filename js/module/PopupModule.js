export default function PopupModule() {
  $(document).ready(function () {
    $(".vd-bg").magnificPopup({
      // disableOn: 500,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 300,
      // preloader: false,
      fixedContentPos: false,

      callbacks: {
        open: function () {
          // When you open the
          $("body").css("overflow", "hidden"); // window, the element
        }, // "body" is used "overflow: hidden".

        close: function () {
          // When the window
          $("body").css("overflow", ""); // is closed, the
        }, // "overflow" gets the initial value.
      },
    });
  });

  $(document).ready(function () {
    $(".sidevd").magnificPopup({
      // disableOn: 500,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 300,
      // preloader: false,
      fixedContentPos: false,

      callbacks: {
        open: function () {
          // When you open the
          $("body").css("overflow", "hidden"); // window, the element
        }, // "body" is used "overflow: hidden".

        close: function () {
          // When the window
          $("body").css("overflow", ""); // is closed, the
        }, // "overflow" gets the initial value.
      },
    });
  });

  const pu = document.querySelector(".popup-signup");
  const btn = document.querySelector(".home-9 .button .btn")

  if (pu && btn) {
    pu.querySelector(".ti-close.icon").addEventListener("click",() => {
      pu.classList.remove("open");
      document.body.style.overflow = "auto"
    })

    pu.querySelector(".popup-overlay").addEventListener("click",() => {
      pu.classList.remove("open");
      document.body.style.overflow = "auto"
    })

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      pu.classList.add("open");
      document.body.style.overflow = "hidden"
    })
  }

}
