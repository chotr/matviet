export default function ProductModule() {
    const iconHeart = document.querySelectorAll(".favor")

    if (iconHeart.length > 0) {
        iconHeart.forEach((ele, i) => {
            ele.addEventListener("click", () => {
                ele.classList.toggle("loved")
            })
        })
    }
}