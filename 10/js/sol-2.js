
document.querySelector("#refresh").onclick = function(){
  history.go(0);
  /*
  - 이 세가지 방법 모두 사용 가능함 (구글링)
  location.reload(true);
  location.href = location.href;
  history.go(0);
  */
}


function changeBg() {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        document.body.style.background = bgColor;
    }

    changeBg();