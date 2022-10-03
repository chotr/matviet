export default function InputFile() {
    const inputFile = document.querySelector(".form-control-file input");
    const button = document.querySelector(".input-file .btn-file");
    const the_return = document.querySelector(".name-file");

    if (button) {
        button.addEventListener("keydown", function(event) {
            if (event.keyCode == 13 || event.keyCode == 32) {
                fileInput.focus();
            }
        });
        button.addEventListener("click", function(event) {
            inputFile.click();
            return false;
        });
        inputFile.addEventListener("change", function(event) {
            the_return.innerHTML =
                `<span class="text">Selected: </span>` +
                `<span class="name-file">` +
                splitName(this.value) +
                `</span>`;
        });
    }

    const splitName = (name) => {
        let string = "";
        string += name.split("\\")[name.split("\\").length - 1];
        return string;
    };

    ////////////////////////////////////////////////////////////////
    //custom select

    const listSelectform = document.querySelectorAll(".form-select");
    var event = new Event("change");

    if (listSelectform.length > 0) {
        listSelectform.forEach((ele, i) => {
            const dropicon = document.createElement("span");
            dropicon.className = "icon";
            dropicon.innerHTML = `<i class="ti-angle-down"></i>`;
            const selected = ele.querySelector(".selected .text");
            const input = ele.querySelector("input");
            const listItem = ele.querySelectorAll(".item-select");
            selected.parentElement.appendChild(dropicon);

            listItem.forEach((elem, j) => {
                elem.addEventListener("click", () => {
                    let dataSelected = selected.getAttribute("data-select");
                    const dataSelect = elem.getAttribute("data-select");
                    input.value = dataSelect;
                    input.dispatchEvent(event);
                    selected.innerHTML = dataSelect;
                    selected.setAttribute("data-select", dataSelect);
                    selected.style.color = "black";
                    selected.style.fontWeight = "400";
                });
            });

            ele.addEventListener("click", () => {
                listItem.forEach((elem) => {
                    let dataSelected = selected.getAttribute("data-select");
                    elem.classList.remove("seleted-item");

                    if (dataSelected == elem.getAttribute("data-select")) {
                        elem.classList.add("seleted-item");
                    }
                });

                $(ele.querySelector(".list-select")).slideToggle(300);
            });
        });
    }
}