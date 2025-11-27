
const para= document.querySelector("#message");
const textBtn=document.getElementById('btn');

textBtn.addEventListener('click',()=>{
    para.textContent='New Message';
});
const box =document.getElementById('Box');
const colorButton=document.getElementById("colorButton");

colorButton.addEventListener('click',()=>{
    Box.style.backgroundColor="yellow";

});
