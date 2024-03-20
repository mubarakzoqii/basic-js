// const btnClick = document.getElementById('btn');
// btnClick.addEventListener('click', ()=>{
//     console.log("you clicked me!");
// })


function clickMe() {
    console.log("you clicked me!");
}

function mouseOverExample(){
    console.log("Mouseover");
}
function mouseOutExample(){
    console.log("mouseOutExample");
}
function keyPressExample(){
    console.log("keyPressExample ");
}
function keyUpExample(){
    console.log("keyUpExample ");
}
function onChangeExample(){
    console.log("onChangeExample ");
}
function submit(){
    alert("you're already logged in! ");
}

// Event Propagation (bubbling and capturing) 


let div3 = document.getElementById('div3').addEventListener('click', (event)=>{
    // console.log(event);
    event.stopPropagation();
    console.log("div 3");
})
let div2 = document.getElementById('div2').addEventListener('click', ()=>{
    console.log("div 2");
})
let div1 = document.getElementById('div1').addEventListener('click', ()=>{
    console.log("div 1");
})
// Type Target Current target timeStamp


let btnELement = document.getElementById("btnEvent");
// console.log(btnELement);
btnELement.addEventListener("click", (event)=>{
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.timeStamp);
})
// setInterval
let time = setInterval(()=>{
console.log("time interval start now!");
}, 5000)


// clearInterval
setTimeout(()=>{
    clearInterval(time)
    console.log("time interval end now!");
}, )


// Coordinates


addEventListener("mousemove" , (event)=>{
console.log("X: = ", event.clientX , "Y: = ", event.clientY);
})


function formSubmit(event) {
event.preventDefault()
    alert("form submitted!");
}