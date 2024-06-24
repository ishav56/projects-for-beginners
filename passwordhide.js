const eye1 = document.querySelector(".eye1");
const eye2 = document.querySelector(".eye2");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector('#input2');
const button = document.querySelector("button");
const refresh=document.querySelector(".refresh");



eye1.addEventListener('click', () => {
    if (input1.type === "password") {
        input1.style.color = "white"
        input1.type = "text";
    }
    else {
        input1.type = "password";
    }
    if (input1.value === '') {
        alert('please enter a value');
    }
})
eye2.addEventListener('click', () => {
    if (input2.type === "password") {
        input2.style.color = "white"
        input2.type = "text";
    }
    else {
        input2.type = "password";
    }
    if (input1.value === '') {
        alert('please enter a value');
    }
})
button.addEventListener('click', () => {

    if (input1.value == input2.value) {
        alert('your password is match')
    }
    else {
        
        alert('your password is not match');
    }
})
refresh.addEventListener('click',()=>{

    input1.value='';
    input2.value='';
})