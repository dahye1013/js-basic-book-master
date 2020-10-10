function newRegister() {
  let newP = document.createElement("p");
  let userName = document.querySelectorAll("#userName");
  let newText = document.createTextNode(userName.value);
  newP.appendChild(newText);

  let nameList = document.querySelector("#nameList");
  nameList.insertBefore(newP, nameList.childNodes[0]);
}
