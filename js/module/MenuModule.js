export default function MenuModule() {
    const listDr = document.querySelectorAll(".dropdown");
    
    listDr.forEach((ele, i) => {
        const icon = document.createElement("i")
        icon.className = "ti-angle-down"
        ele.querySelectorAll("a")[0].appendChild(icon);
        icon.addEventListener("click", (e) => {
            e.preventDefault();
            icon.classList.toggle("active")
            $(ele.querySelectorAll(".sub-menu-wrap")[0]).stop().slideToggle(300,"linear");
        })
        
    })
}