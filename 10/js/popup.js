window.onload = openPop; //바로 실행해야 하므로 onload 이벤트 처리한다.

function openPop(){
    let newWin = window.open("popup.html","","width=400,height=400");
    if(newWin==null){
        alert("팝업이 차단되어 있습니다. 팝업 차단을 해제하고 새로고침해주세요")
    }
}
