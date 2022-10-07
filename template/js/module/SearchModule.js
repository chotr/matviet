export default function SearchModule() {
    const searchBtn = document.querySelector('.header-act .search .icon');
    const searchCT = document.querySelector('.header-seach');

    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
            searchCT.classList.toggle("active")
        })

        // document.addEventListener("click", (e) => {
        //     const isClickInsideElement = searchCT.contains(e.target);

        //     if (e.target.matches(".header-search .icon, .header-search .icon *") ||
        //     isClickInsideElement) {
        //       return;
        //     }
        //     searchCT.classList.remove("active")
        // })
    }

}