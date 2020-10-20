    let total = 24000;
    let checkboxs = document.querySelectorAll(".checkbx");
    let checkboxSize= checkboxs.length;
    document.querySelector("#total").value=total;    
      for(let i = 0 ; i < checkboxSize ; i++) {
        checkboxs[i].onclick=function(){
          if(this.checked){
            total+=parseInt(this.value);
          }else{
            total-=parseInt(this.value);
          }
          document.querySelector("#total").value=total;            

        }
        
      }
      ;