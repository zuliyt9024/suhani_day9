
 let heading= document.getElementById("main-heading").textContent="WELCOME TO DOM WEBPAGE";

    let paragraph =document.getElementsByTagName("p");
    for(let i=0;i<paragraph.length;i++){
        paragraph[i].style.color="blue";
    }
    let containerDiv = document.getElementsByClassName("container")[0];
    containerDiv.style.backgroundColor = "yellow";

