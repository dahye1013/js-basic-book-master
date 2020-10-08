var coverImage = document.querySelector("#cover");

coverImage.onclick = function () {
  alert("눌렀습니다.");
};

coverImage.onmouseover = function () {
  coverImage.style.border = "5px black solid";
};

//es6문법
/*
coverImage.onclick = () => {
  alert("눌렀습니다.");
};
coverImage.onmouseover = () => {
  coverImage.style.border = "5px black solid";
};
*/
