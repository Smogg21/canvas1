const canvas = document.querySelector(".canvas")
const redo = document.querySelector(".redo")
const deshacer = document.querySelector(".deshacer")
let nClick = 0

let limbo = [];
let valores = [];

canvas.addEventListener("click", function(e){
    
    valores.push({number: nClick, X:e.clientX, Y:e.clientY})
    dibujar(nClick);
    nClick++;
    console.log(e.clientX, e.clientY)
    e.pageX
    
})


function dibujar(nClick){
    let dotSize = 10
    let div = document.createElement("div");
    div.classList.add(nClick)
    div.style.backgroundColor = "#000"
    div.style.width = dotSize + "px";
    div.style.height = dotSize + "px";
    div.style.position = "absolute";
    div.style.left = (valores[nClick].X)+ "px"
    div.style.top = (valores[nClick].Y) + "px"
    div.style.borderRadius = "50%"
    canvas.appendChild(div);

}

function dibujarRevive(e){
    let dotSize = 10
    let div = document.createElement("div");
    div.classList.add(e.number)
    div.style.backgroundColor = "#000"
    div.style.width = dotSize + "px";
    div.style.height = dotSize + "px";
    div.style.position = "absolute";
    div.style.left = (e.X)+ "px"
    div.style.top = (e.Y) + "px"
    div.style.borderRadius = "50%"
    canvas.appendChild(div);
}

deshacer.addEventListener("click", function(){
   let popped = valores.pop()
   limbo.push(popped)
   const elements = document.getElementsByClassName(popped.number)
   elements[0].parentNode.removeChild(elements[0]);

})
redo.addEventListener("click", function(){
    let revive = limbo.pop();
    valores.push(revive);
    console.log(revive)
    dibujarRevive(revive)

})

