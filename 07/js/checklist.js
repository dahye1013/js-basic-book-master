var itemList = [];
var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList() {
  var item = document.querySelector("#item").value;
  if (item != null && item != "") {
    itemList.push(item);
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
    console.log(itemList);
  }
  showList();
}

function showList() {
  var list = `<ul>`;
  for (let i = 0; i < itemList.length; i++) {
    list += `<li>${itemList[i]}<span class="close" id="${i}">X</span></li>`;
  }
  list += `<ul>`;
  document.querySelector("#itemList").innerHTML = list;

  var remove = document.querySelectorAll(".close"); //삭제 버튼을 변수로 저장, 배열형태
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  var id = this.getAttribute("id"); //this id 값을 가져온다
  itemList.splice(id, 1); //id index에 있는 item을 1개 삭제
  showList();
}
