function newRegister() {				
	var newP = document.createElement("p");  // 새 p 요소 만들기 
	var userName = document.querySelector("#userName");					
	var newText = document.createTextNode(userName.value);  // 새 텍스트 노드 만들기
	newP.appendChild(newText);  // 텍스트 노드를 p 요소의 자식 요소로 연결하기
        
	var nameList = document.querySelector("#nameList");  
	nameList.appendChild(newP); // p 요소를 #nameList의 자식 요소로 만들기
	userName.value = "";  // 텍스트 필드 지우기

	nameList.insertBefore(newP,nameList.childNodes[0]);

	//delBtn만들고 속성 붙이기
	let delBtn = document.createElement("span");
	let delText = document.createTextNode("X");
	delBtn.appendChild(delText);
	delBtn.setAttribute("class","del");

	//p에 btn 붙이기
	newP.appendChild(delBtn);

	//모든 del 버튼에 이벤트 부여하기
	let delBtns = document.querySelectorAll(".del");
	for(let i = 0; i<delBtns.length ; i++ ){
		delBtns[i].addEventListener("click",function(){
			//nameList
			console.log(this.parentNode.parentNode);
			//nameList의 자식노드중 this를 가지고 있는 p를 삭제한다
			this.parentNode.parentNode.removeChild(this.parentNode);			
		})
	}


}			