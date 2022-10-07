export default function StepsModule() {
    const stepJS = document.querySelectorAll(".stepJS");
    if (stepJS) {
        stepJS.forEach((item) => {
            const stepPanels = item.querySelectorAll(".stepPanel");
            const stepBtns = item.querySelectorAll(".stepBtn");
            stepPanels[0].classList.add("open");
            let stepLenght = stepPanels.length;
            let countClick = -1;
            if (stepBtns) {
                stepBtns.forEach((item) => {
                    item.addEventListener("click", () => {
                        if (countClick < stepLenght) {
                            countClick += 1;
                        }
                        stepPanels.forEach((item) => {
                            item.classList.remove("open");
                        });
                        stepPanels[countClick + 1].classList.add("open");
                    });
                });
            }
        });
    }
}