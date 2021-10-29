const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let color = document.querySelector(".color")
let btn = document.querySelector("#btn")

document.addEventListener("click", function(){
    let num = randomValue()
    document.body.style.backgroundColor = colors[num]
    color.textContent = colors[num]
})

function randomValue(){
    return Math.floor(Math.random() * colors.length)
}