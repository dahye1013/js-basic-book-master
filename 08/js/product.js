var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

let view = document.querySelector("#view");
let detail = document.querySelector("#detail");

let isOpen = false;

view.addEventListener("click", function () {
  if (isOpen == false) {
    detail.style.display = "block";
    view.innerText = "상세 설명 닫기";
    isOpen = true;
  } else {
    detail.style.display = "none";
    view.innerText = "상세 설명 보기";
    isOpen = false;
  }
});

for (i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", function () {
    newPic = this.src;
    bigPic.setAttribute("src", newPic);
  });
}
