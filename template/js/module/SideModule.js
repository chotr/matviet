export default function SideModule() {
  const catalogue = document.querySelector(".side-fixed .filter-wrap");

  const address = document.querySelectorAll(
    ".info-tab.list-item .info-tab-item"
  );

  if (catalogue) {
    catalogue.querySelectorAll(".filter-list").forEach((ele) => {
      ele.querySelector(".text").addEventListener("click", () => {
        $(ele.querySelector(".list")).stop().slideToggle(500);
      })
    })

   
  }

  const cateLst = document.querySelectorAll(".cate-item");
  const cateSubItem = document.querySelectorAll(".sub-cate-item");

  if (cateLst) {
    cateLst.forEach((ele, i) => {
      ele.addEventListener("click", () => {
        ele.classList.toggle("active");
        $(ele.querySelector(".sub-cate")).stop().slideToggle(400);
      });
    });

    cateSubItem.forEach((ele, i) => {
      ele.className.search("active");

      if (ele.className.search("active") != -1) {
        ele.parentElement.parentElement.classList.add("active");
        ele.parentElement.setAttribute("style", "display: block");
        // ele.parentElement.parentElement
        //   .querySelector(".icon-drop")
        //   .classList.add("active");
      }
    });
  }

  // const sidewrap = document.querySelector(".sidebar-wrap");
  // const filterBtn = document.querySelector(".gen-layout-content .filter .icon");
  // const bgFadde2 = document.querySelector(".bg-fade2");

  // if (sidewrap) {
  //   filterBtn.addEventListener("click", () => {
  //     sidewrap.classList.add("show");
  //     document.body.classList.add("overflow-hidden");
  //     bgFadde2.classList.add("show");
  //   });

  //   sidewrap.querySelector(".header-close").addEventListener("click", () => {
  //     sidewrap.classList.remove("show");
  //     document.body.classList.remove("overflow-hidden");
  //     bgFadde2.classList.remove("show");
  //   });
  // }

  const sideOpen = document.querySelector(".filter-pro");
  const sideClose = document.querySelector(".side-close");
  const sideFixed = document.querySelector(".side-fixed");
  const sideOverlay = document.querySelector(".side-overlay");
  const body = document.getElementsByTagName("body")[0];

  if (sideOpen) {
    sideOpen.addEventListener("click", (e) => {
      
      sideFixed.classList.add("open");
      sideOverlay.classList.add("open");
      sideOpen.classList.add("close");
      body.classList.add("overflow-hidden")
    });
  }
  if (sideClose) {
    sideClose.addEventListener("click", () => {
      sideFixed.classList.remove("open");
      sideOverlay.classList.remove("open");
      sideOpen.classList.remove("close");
      body.classList.remove("overflow-hidden")
    });
  }
  if (sideOverlay) {
    sideOverlay.addEventListener("click", () => {
      sideFixed.classList.remove("open");
      sideOverlay.classList.remove("open");
      sideOpen.classList.remove("close");
      body.classList.remove("overflow-hidden")
      // e.stopPropagation()
    });
  }
}
