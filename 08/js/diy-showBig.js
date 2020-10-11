let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small");

console.log(bigPic);

for(let i = 0 ; i<smallPics.length;i++){
    smallPics[i].addEventListener("click",function(){
//        alert(this.src);
//        alert(smallPics[i].src);  같은 값이 나옴
        let newPic = this.src;
        bigPic.setAttribute("src",newPic)
    })
}
