let now = new Date();
let getNow = now.getTime();

function calcDay() {
  let firstDay = new Date(document.querySelector("#firstDay").value);
  let getFirstDay = firstDay.getTime();
  let passedDay = Math.round((getNow - getFirstDay) / (1000 * 60 * 60 * 24));

  function calcAnni(days) {
    let anniversaryDay = new Date(getFirstDay + days * (1000 * 60 * 60 * 24));
    let year = new Date(anniversaryDay).getFullYear();
    let month = new Date(anniversaryDay).getMonth() + 1;
    let date = new Date(anniversaryDay).getDay();
    document.querySelector(
      "#date" + days
    ).innerText = `${year}년 ${month}월 ${date}일`;
  }
  calcAnni(100);
  calcAnni(200);
  calcAnni(365);
  calcAnni(500);
}
