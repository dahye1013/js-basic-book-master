let a = parseInt(prompt("비교할 첫 번째 숫자"));
let b = parseInt(prompt("비교할 두 번째 숫자"));
/*
let bigger = function (a, b) {
  if (a > b) {
    return alert(`${a}가 ${b}보다 더 큽니다.`);
  } else {
    return alert(`${b}가 ${a}보다 더 큽니다.`);
  }
};
*/
let bigger = (a, b) => {
  if (a > b) {
    return alert(`${a}가 ${b}보다 더 큽니다.`);
  } else {
    return alert(`${b}가 ${a}보다 더 큽니다.`);
  }
};
bigger(a, b);
