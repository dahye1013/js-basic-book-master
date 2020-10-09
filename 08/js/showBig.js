let bigPic = document.querySelector("#cup"); //큰 이미지 가져오기
let smallPic = document.querySelectorAll(".small"); //작은 이미지 가져오기(노드리스트)

for (let i = 0; smallPic.length; i++) {
  smallPic[i].onclick = function (event) {
    bigPic.src = this.src;
  };
}
/*
function showBig() {
  let newPic = this.src;
  bigPic.setAttribute("src", newPic);
}
*/
