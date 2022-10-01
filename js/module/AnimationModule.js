export default function AnimationModule() {
  // animation slide change
  const bannerSlide = document.querySelectorAll(".banner-slide-image");

  if (bannerSlide.length > 0) {
    bannerSlide.forEach((ele, i) => {
      const link_img = ele.querySelector("img").src;

      for (let i = 0; i < 6; i++) {
        const imgTag = document.createElement("div");
        imgTag.className = "img-animate";
        imgTag.innerHTML = `<img src="${link_img}" alt="">`;
        ele.querySelector(".img-abs").appendChild(imgTag);
      }
    });
  }

  const boardslide = document.querySelectorAll(".board-main .img");

  const resize = () => {
    let width = $(".board-main .img").width();

    const img = document.querySelectorAll(".board-main .img-abs img");

    img.forEach((ele, i) => {
      ele.setAttribute("style", `width: ${width}px`);

      // if (window.innerWidth > 1200) {
      //   ele.setAttribute("style", `width: ${$(".board-main .img").first().width()}px`);
      // }
    });
  };
  if (boardslide.length > 0) {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1200) {
      const widtSet = boardslide[0];

    }
    boardslide.forEach((ele, i) => {
      const link_img = ele.querySelector("img").src;
      const imgAbs = document.createElement("div");
      imgAbs.className = "img-abs";

      for (let i = 0; i < 4; i++) {
        const imgTag = document.createElement("div");
        imgTag.className = "img-animate";
        imgTag.innerHTML = `<img src="${link_img}" alt="">`;
        imgAbs.appendChild(imgTag);
      }
      ele.appendChild(imgAbs);
      resize();

      window.addEventListener("resize", () => {
        const windowWidth = window.innerWidth;
        const width1200 = 0;
        resize();
        // if (windowWidth < 1201) {
        //   resize();
        // } 
      });
    });
  }

  // banner grid square
  const bn = document.querySelector(".banner-grid");
  const heightb = $(".banner-layout").height();

  let j = 0;
  let count = 0;
  let delay = 0;

  if (bn) {
    for (let i = 0; i < 300; i++) {
      const newElement = document.createElement("div");
      newElement.className = "blocks";
      bn.appendChild(newElement);
    }

    const blocks = document.querySelectorAll(".blocks");
    const heightBlock = $(".blocks").outerHeight();

    const setAnimation = () => {
      const winHieght = window.innerWidth;
      let heightSet = winHieght / 20;
      let windowWidth = window.innerWidth;

      if (windowWidth < 1025) {
        heightSet = winHieght / 17;
      }

      blocks.forEach((ele, i) => {
        if (j >= 20) {
          j = 0;
          delay = count;
          count++;
        }

        ele.setAttribute(
          "style",
          `animation-delay:${delay * 0.1}s; height: ${heightSet}px`
        );
        j++;
        delay++;
      });
    };
    setAnimation();
  }
}
