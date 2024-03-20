let incrementBtn = document.getElementById('incrementBtn');
let decrementBtn = document.getElementById('decrementBtn');
let displayCount = document.getElementById('displayCount');


let count = 0;

incrementBtn.addEventListener("click", ()=>{
    count++
    displayCount.textContent = count

})
decrementBtn.addEventListener("click", ()=>{
    count--
    displayCount.textContent = count

})
resetBtn.addEventListener("click.", ()=>{
    count
    displayCount.textcontent = count
})