let myButton = document.getElementById("myBtn");
let message = document.getElementById("message");
let myButton2 = document.getElementById("myBtn2");
let message2 = document.getElementById("message2");
let myButton3 = document.getElementById("myBtn3");
let message3 = document.getElementById("message3")
let myButton4 = document.getElementById("myBtn4");
let message4 = document.getElementById("message4")
let myButton5 = document.getElementById("myBtn5");
let message5 = document.getElementById("message5")
let myButton6 = document.getElementById("myBtn6");
let message6 = document.getElementById("message6")


myButton.addEventListener('click', () =>{
    message.innerHTML = "ไม่มีเรียนในวันนี้";
    setTimeout(()=> {
        message.innerHTML = "";
    }, 5000); 
});
myButton2.addEventListener('click', () =>{
    message2.innerHTML = "Web Tech";
    setTimeout(()=> {
        message2.innerHTML = "";
    }, 5000); 
});
myButton3.addEventListener('click', () =>{
    message3.innerHTML = "IP, PPL, Cloud";
    setTimeout(()=> {
        message3.innerHTML = "";
    }, 5000);   
});
myButton4.addEventListener('click', () =>{
    message4.innerHTML = "ไม่มีเรียนในวันนี้";
    setTimeout(()=> {
        message4.innerHTML = "";
    }, 5000); 
});
myButton5.addEventListener('click', () =>{
    message5.innerHTML = "PPL, AIDS";
    setTimeout(()=> {
        message5.innerHTML = "";
    }, 5000); 
});
myButton6.addEventListener('click', () =>{
    message6.innerHTML = "Northern Thai Folk Music";
    setTimeout(()=> {
        message6.innerHTML = "";
    }, 5000); 
});
