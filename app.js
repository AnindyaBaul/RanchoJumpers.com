var cartDiv=document.getElementById('myCart');
console.log(cartDiv);
function myCart(){
    cartDiv.style.width="50px";
    if(cartDiv.style.width==="50px"){
        setTimeout(function(){
            cartDiv.style.width="20px"
        },5000);
    }
}
function bounce1() {
    let addedStr = document.getElementById('counter').innerText;
    let added = parseInt(addedStr);
    let count =added;
    count= count + 1;
    document.getElementById('counter').innerText="+"+count;
}