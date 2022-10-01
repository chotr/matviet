export default function TabModule() {

    let tab = document.querySelectorAll('.tabJS');
    if (tab) {
        tab.forEach((t) => {
            let tBtn = t.querySelectorAll('.tabBtn');
            let tPanel = t.querySelectorAll('.tabPanel');

            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add('active');
                tPanel[0].classList.add('open');

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener('click', showPanel);

                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove('active');
                            tPanel[a].classList.remove('open');
                        }
                        tBtn[i].classList.add('active');
                        tPanel[i].classList.add('open');
                    }
                }
            }
        });
    }

    const questionList = document.querySelectorAll(".question-item")

    if (questionList.length > 0) {
        questionList.forEach((ele, i) => {
            ele.querySelector(".title").addEventListener("click", () => {
                ele.querySelector(".icon").classList.toggle("active")
                $(ele.querySelector(".question-sub")).stop().slideToggle(300);
            })
        })
    }

    const sortLst = document.querySelector(".sort-content")

    if (sortLst) {
        sortLst.querySelector(".sort-selected").addEventListener("click", () => {
            $(sortLst.querySelector(".sort-list")).slideToggle(300)
        })
    }
}