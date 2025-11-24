
function displayMessage(name){
    console.log(`Hello,${name}!`);
}
function getUserInput(callabck){
    setTimeout(()=>{
        const username="Alice";
        callabck(username);
    } ,1000)
}
getUserInput(displayMessage);