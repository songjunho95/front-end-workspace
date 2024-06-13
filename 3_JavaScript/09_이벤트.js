// DOMContentLoaded : DOM 구조가 로드되고 실행!
// window.addEventListener("DOMContentLoaded", function(){})
    const h1 = document.querySelector("h1");
    h1.onmouseenter = function() {
        h1.style.backgroundColor = "purple";
    };
    h1.onmouseleave = function () {
        h1.style.backgroundColor = "pink";
    };
    // addEventListener만 기억해도 됩니다!
    h1.addEventListener("click", function(){
        h1.style.backgroundColor = "skyblue";
    })
    const img = document.querySelectorAll(".container img");
    console.log(img);

    /* 이미지마다 이벤트 걸려면 반복문 필요! */
   /* for (const item of img) {
    item.addEventListener("click", function(e){
        e.currentTarget.style.display = "none";
    });
}*/

const container = document.querySelector(".container");

function removeHandler(e) {
    if(e.target !== e.currentTarget) {
        e.target.style.display = "none";
     }
}

container.addEventListener("click", removeHandler);
