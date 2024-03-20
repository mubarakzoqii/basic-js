let headingElement = document.getElementById("heading1");
headingElement.innerHTML = "hello world" 
let textElement = document.getElementById("heading1");
headingElement.textContent = "hello world text context" 

// createElement() 
let createElementExample = document.getElementById('div');
let h3  = document.createElement('h3')
h3.textContent ="hello i am para from js file!"
// appendChild()
console.log(h3);

createElementExample.appendChild(h3)

let newH3 = h3.setAttribute("class", "heading3")
// console.log(newH3);
let getAttributeExample = h3.getAttribute("class")
console.log(getAttributeExample);

// removeAttribute(), and hasAttribute()
let removeAttributeExample = h3.removeAttribute("class")
console.log(removeAttributeExample);
h3.hasAttribute("class")
console.log(h3);




// setAttribute()

let targetElement = document.getElementById("div1").addEventListener('click', ()=>{
     document.getElementById("target").setAttribute("href", "www.example.com")

})
let targetElement1 = document.getElementById("div2").addEventListener('click', ()=>{
     document.getElementById("target").setAttribute("href", "www.example1.com")

})

// removeChild()


function removeChildELe(){
     let removeChildElement = document.getElementById("removePara");
     let child = document.getElementById('p')
    removeChildElement.remove(child)
 
}



// Changing CSS Styles



let ChangingStyles = document.getElementById('div');
let paraEle = document.createElement('p')
console.log(paraEle);
paraEle.textContent = "hello i am para"

ChangingStyles.appendChild(paraEle)

// style property 

paraEle.style.fontSize = "20px";
paraEle.style.color = "red"

// classList 

paraEle.classList.add("paraELement")