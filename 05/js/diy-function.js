let a = prompt("a값 입력");
let b = prompt("b값 입력");
let add = (a, b) => {
  return parseInt(a) + parseInt(b);
};
let sum = add(a, b);
document.write(`result = ${sum}`);
