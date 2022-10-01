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
}