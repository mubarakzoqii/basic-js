let headingElement = document.getElementById("heading1");
headingElement.innerHTML = "hello world" 
let textElement = document.getElementById("heading1");
headingElement.textContent = "hello world text context" 

// createElement() 
let createElementExample = document.getElementById('div');
let h3  = document.createElement('h3')
h3.textContent ="hello i am para from js file!"
// appendChild()

createElementExample.appendChild(h3)

// setAttribute()

let targetElement = document.getElementById("div1").addEventListener('click', ()=>{
     document.getElementById("target").setAttribute("href", "www.example.com")

})
let targetElement1 = document.getElementById("div2").addEventListener('click', ()=>{
     document.getElementById("target").setAttribute("href", "www.example1.com")

})







