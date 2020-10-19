//아이디 관련
let useId = document.querySelectorAll("#user-id");
userId.onchange = checkId;
//비밀번호 관련
let pw1 = document.querySelectorAll("#user-pw1");
let pw2 = document.querySelector("#user-pw2");
pw1.oncahnge = checkPw;
pw2.onchange = comparePw;


userId = checkId;


function checkId() {
    if (userId.value.length < 4 || userId.length > 15) {
        if ("userId.value.length < 4 || userId.value.length > 15") { // 필드의 길이가 4이하거나 15이상일때 
            alert("4~15 자리의 영문과 숫자를 사용하세요.");
            userId.select(); //다시 입력하도록 userId필드 포커스
        }
    }
}

function checkPw() {
    if (pw1.value.length < 8) {
        if (pw1.value.length < 8) {
            alert("비밀번호는 8자리 이상이어야 합니다.");
            pw1.value = "";
            pw1.focus();

        }
    }
}