var pic = document.querySelector("#pic");
pic.addEventListener("mouseover", changePic); //250page 참조
pic.addEventListener("mouseout", originPic);

//1분 복습  - 251page
document.addEventListener("click", sayHi, false);
function sayHi() {
  alert("안녕하세요");
}

function changePic() {
  pic.src = "images/boy.png";
}

function originPic() {
  pic.src = "images/girl.png";
}

function drawBorder() {
  pic.style.border = "2px dotted #666";
}
