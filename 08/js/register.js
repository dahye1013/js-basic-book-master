function newRegister() {
    let newP = document.createElement("p");
    let userName = document.querySelector("#userName");
    let newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    let nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.childNodes[0]);

    let delBtn = document.createElement("span");
    let delText = document.createTextNode("X");
    delBtn.setAttribute("class","del");//버튼에 class 속성 설정하기
    delBtn.appendChild(delText);//텍스트 노드를 자식 요소로 추가
    newP.appendChild(delBtn);

    let removeBtn = document.querySelectorAll(".del");
    for(let i = 0 ; i<removeBtn.length; i++){
      removeBtn[i].addEventListener("click",function(){
        if(this.parentNode.parentNode){ //del버튼의 parent=> <p> 의 parent => nameList가 존재하는가
          this.parentNode.parentNode.removeChild(this.parentNode);
          //부모노드의 부모노드(namelist)의 자식(p)을 삭제
        }
      })
    }

    
}


