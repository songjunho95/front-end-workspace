


$("#userId").keyup((e) => {
    let id = $(e.target).val(); // 제이쿼리 방식
        id = e.target.value; // 자바스크립트 방식 
    console.log(id);


    const regExp = /^[a-z][a-z0-9]{3, 11}$/;
    if(regExp.test(id)) {
        $("#idChECK").text("사용 가능한 아이디입니다.").css("color", "green");
    } else if(id === "") {
        $("#idCheck").text("");
    } else {
        $("#idCheck").text("사용 불가능한 아이디입니다.").css("color", "red");
    }
});

// 3. trigger() 메서드
$("#area3").click(() => {
    let counter = $("#counter2");
    let current = parseInt(counter.text());
    counter.text(++current);
});
$("#btn").click(() => {
    $("#area3").trigger("click");
});