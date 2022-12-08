 let text = document.getElementById("input");
let message = document.getElementById("message");
var myForm = document.forms.myForm

myForm.addEventListener("submit", ()=>{
if(myForm.email.value == ""){
    myForm.email.value = "example@email/com"
    message.innerHTML = "Please provide a valid email address"
    text.style.borderColor = "hsl(354, 100%, 66%)"
}
else{
    message.innerHTML = "";
}
})