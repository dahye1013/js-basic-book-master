document.querySelector("#shippingInfo").addEventListener("click", function(){

    if(document.querySelector("#shippingInfo").checked){
        let billingName = document.querySelector("#billingName").value
        let billingTel = document.querySelector("#billingTel").value
        let billingAddr = document.querySelector("#billingAddr").value
        document.querySelector("#shippingName").value = billingName;
        document.querySelector("#shippingTel").value = billingTel;
        document.querySelector("#shippingAddr").value = billingAddr;
    }else{
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
});
