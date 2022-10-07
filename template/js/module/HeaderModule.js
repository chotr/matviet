export default function HeaderModule() {
  const lang = document.querySelector(".lang");
  const toggleHd = document.querySelector(".right .header-toggle");
  const toggleHdLeft = document.querySelector(".left .header-toggle");
  const headerCT = document.querySelector(".header-sidebar");
  const headerMB = document.querySelector(".menu-mobile");
  const bg = document.querySelector(".bg-fade");
  const bg2 = document.querySelector(".bg-fade2");
  const bg3 = document.querySelector(".bg-fade3");
  const headeeMN = document.querySelectorAll(".header-nav .menu-dropdown")
  if (lang) {
    $(".lang").click(function () {
      $(".lang-lst").slideToggle("300", function () {
        // Animation complete.
      });
    });
  }

  if (toggleHd && headerCT) {
    toggleHd.addEventListener("click", () => {
      headerCT.classList.toggle("show");
      bg.classList.toggle("show");
      toggleHd.classList.add("hide");
      document.body.classList.toggle("overflow-hidden");
    });
  }

  if (toggleHdLeft) {
    toggleHdLeft.addEventListener("click", () => {
      headerMB.classList.toggle("show");
      bg2.classList.toggle("show");
      document.body.classList.toggle("overflow-hidden");
      headerCT.classList.remove("show");
      bg.classList.remove("show");
    });
  }

  headeeMN.forEach(ele => {
    $(ele.parentElement).hover(function(){
      bg3.classList.add("show")
      }, function(){
        bg3.classList.remove("show")
    });
  })

  document.addEventListener("click", (e) => {
    const isClickInsideElement = toggleHd.contains(e.target);
    if (
      e.target.matches(".header-menu, .header-menu *") ||
      isClickInsideElement
    ) {
      return;
    }
    headerCT.classList.remove("show");
    bg.classList.remove("show");
    document.body.classList.remove("overflow-hidden");

    const isClickInsideElement2 = toggleHdLeft.contains(e.target);
    if (
      e.target.matches(".menu-mobile, .menu-mobile *") ||
      isClickInsideElement2
    ) {
      return;
    }

    headerMB.classList.remove("show");
    bg2.classList.remove("show");
    document.body.classList.remove("overflow-hidden");
  });

  window.onscroll = function () {
    var prevScrollpos = window.pageYOffset;
    if (prevScrollpos > 0) {
      document.querySelector(".header").classList.add("out");
    } else {
      document.querySelector(".header").classList.remove("out");
    }
  };
}
