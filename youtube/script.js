const bar = document.querySelector(".progress-bar");
window.addEventListener("scroll", function() {
    // 전체 스크롤 할 수 있는 범위 = 바디 전체 높이 - 윈도우 높이(현재 창)
    let maxscrollvalue = document.offsetHeight - window.innerHeight;
    console.log(window.scrollY);
    b
    bar.style.width (parseInt((window.scrollY / max ScrollValue) * 100));    
});

