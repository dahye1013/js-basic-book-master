let itemArray = [];
let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", pushItem);
function pushItem() {
  let item = document.querySelector("#item").value;
  if (item != null && item != "") {
    itemArray.push(item);
    document.querySelector("#item").value = "";
    console.log(itemArray);
    showItems();
  }
}
function showItems() {
  let list = `<ul>`;
  for (let i = 0; i < itemArray.length; i++) {
    list += `<li>${itemArray[i]}<span class="close" id="${i}">X</span></li>`;
  }
  list += `</ul>`;
  document.querySelector("#itemList").innerHTML = list;

  //삭제
  let deleteList = document.querySelectorAll(".close"); //close 클래스 모두에 삭제 이벤트를 건다
  for (let i = 0; i < deleteList.length; i++) {
    deleteList[i].addEventListener("click", deleteItem);
  }
}

function deleteItem() {
  let itemId = this.getAttribute("id");
  console.log(this.getAttribute("id"));
  itemArray.splice(itemId, 1);
  showItems();
}
