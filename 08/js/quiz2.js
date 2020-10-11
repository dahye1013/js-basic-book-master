let check = document.querySelectorAll(".check");
for(let i = 0 ; i <check.length; i++){
    check[i].addEventListener("click",function(){
        console.log(this.parentNode);
        this.parentNode.style.color="#ccc"
    })
}
