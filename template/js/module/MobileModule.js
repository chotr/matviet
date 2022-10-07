export default function MobileModule() {
  const menuItem = document.querySelectorAll(".menu-item a i");
  const menuMB = document.querySelector(".menu-mobile");
  const bg2 = document.querySelector(".bg-fade2")

  if (menuItem.length > 0) {
    menuItem.forEach((ele, i) => {
      ele.addEventListener("click", (e) => {
        e.preventDefault();

        const lstSub =
          ele.parentElement.parentElement.querySelectorAll(".menu-list")[0];

        ele.classList.toggle("active");

        $(lstSub).slideToggle(300);
      });
    });
  }

  if (menuMB) {
    const close = document.createElement("span");
    close.className = "icon-close";
    close.innerHTML = `<i class="ti-close"></i>`;
    menuMB.appendChild(close);
    close.addEventListener("click", (e) => {
      menuMB.classList.remove("show")
      bg2.classList.remove("show");
    })
  }
}
