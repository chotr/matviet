export default function tabModule() {
  const tabL = document.querySelectorAll(".tab-lst");
  const tabContent = document.querySelectorAll(".tab-content");


  const resetTabActive = (lstTabi, lstTab) => {
    lstTabi.forEach((ele) => {
      ele.classList.remove("active");
    });
    lstTab.forEach((ele) => {
      ele.classList.remove("active");
    });
  };

  if (tabL.length > 0) {
    tabL.forEach((el, k) => {
      const lstTab = el.querySelectorAll(".tab-item ");
      console.log(lstTab)

      if (tabContent.length > 0) {
        const tabContentLst =
          tabContent[k].querySelectorAll(".tab-content-item");

        lstTab.forEach((tab, i) => {
          tab.addEventListener("click", () => {
            console.log(tab)
            resetTabActive(lstTab, tabContentLst);
            tab.classList.add("active");

            if (tabContentLst[i]) {
              tabContentLst[i].classList.add("active");
            }
          });
        });
      }
    });
  }


}
