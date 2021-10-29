const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let colorEl = document.querySelector(".color")
let btnEl = document.querySelector("#btn")

btnEl.addEventListener("click", function () {
    let code = "#"
    for(let i=0; i<6; i++){
        code += hex[randomVal()]
    }
    document.body.style.backgroundColor = code
    colorEl.textContent = code
})

function randomVal(){
    return Math.floor(Math.random() * hex.length)
}