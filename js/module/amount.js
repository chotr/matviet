export default function Amount() {
    const amountwwrap = document.querySelector(".product-info");

    if (amountwwrap) {
        const decre = amountwwrap.querySelector(".minus")
        const incre = amountwwrap.querySelector(".plus")
        const num = amountwwrap.querySelector("input.amount")
        var event = new Event('change');
        decre.addEventListener("click", () => {
            if (num.value > 1) {
                num.value = num.value * 1 - 1;
                num.dispatchEvent(event);
            }
        })
        incre.addEventListener("click", () => {
            num.value = num.value * 1 + 1;
            num.dispatchEvent(event);

        })
        num.addEventListener("change", (e) => {
            let lastValue = 0;
            // // if(/^[0-9]+$/.test(e.target.value)) {
            // //     lastValue = e.target.value;
            // // }
            // if(!/^[0-9]+$/.test(e.target.value)){
            //     num.value = lastValue;
            //     alert("Please only enter numeric characters only for your Age! (Allowed input:0-9)");
            //   }
        })
    }
}