const hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector(".btn");
const colorHex = document.querySelector(".color-hex");

function getRandomNumberInRange(){
    return Math.floor(Math.random()*hexadecimal.length);
}


button.addEventListener("click", ()=>{
    let randomColor = "#";
    for(let i = 0; i<6;i++){
       randomColor += hexadecimal[getRandomNumberInRange()];
    }

    document.body.style.backgroundColor = randomColor;
    colorHex.textContent = randomColor;
    
})