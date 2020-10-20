 
 let userId = document.querySelector("#user-id");
 let pw1 = document.querySelector("#user-pw1");
 let pw2 = document.querySelector("#user-pw2");

 userId.onchange=checkId; // userId가 바뀌면 checkId 함수가 실행
 pw1.onchange=checkPw;
 pw2.onchange=comparePw;

 function checkId(){
     if(userId.value.length < 4|| userId.value.length >15){ //userId 필드 내용의 길이가 4 이하거나 15이상
        alert("4~15자리의 영문과 숫자를 사용하세요");
        userId.select();
     }
 }

 function checkPw(){
    if(pw1.value.length<8){
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value="";
        pw2.focus();
    }
 }
 //select , focus의 차이점?
 //select는 사용자가 입력한 값을 선택하고, focus는 기존값을 지우고 자리에 커서를 가져다 둔다.

 function comparePw(){
    if(pw1.value!=pw2.value){
        alert("암호가 다릅니다. 다시 입력하세요");
        pw2.value = "";
        pw2.focus();
    }
 }