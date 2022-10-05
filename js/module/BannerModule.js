export default function BannerModule() {
    const collectIitem = document.querySelectorAll(".banner .collect-item");

    if (collectIitem.length > 0) {
        collectIitem.forEach((ele, i) => {
            $(ele).hover(function(){
                $(ele.querySelector(".content-hover")).stop().slideDown(500);

                }, function(){
                    $(ele.querySelector(".content-hover")).stop().slideUp(500)
              });
        })
    }

    // const collectIitem2 = document.querySelectorAll(".services-item ");
    // if (collectIitem2.length > 0) {
    //     collectIitem2.forEach((ele, i) => {
    //         $(ele).hover(function(){
    //             $(ele.querySelector(".wrap-content")).stop().slideDown(500);

    //             }, function(){
    //                 $(ele.querySelector(".wrap-content")).stop().slideUp(500)
    //           });
    //     })
    // }
}