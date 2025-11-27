
let colorInput =document.getElementById("colorInput");
let displaybox =document.getElementById("Box");
let txtInput =document.getElementById("textInput");

let changeBgBtn =document.getElementById("changeBgBtn");
let updateTextBtn =document.getElementById("update-btn");


changeBgBtn.addEventListener("click",function(){
    let colorValue =colorInput.ariaValueMax.trim();
    if(colorValue){
        displayboxBox.style.background="colorValue";

    }else{
        alert("Invalid color name");
    }
});
updateTextBtn.addEventListener("click",function(){
    let textValue =textInput.value.trim();
    if(textValue===""){
        alert("Please enter some text!");
    }
    else{
        displaybox.textContent=textValue;
    }
});