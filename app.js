const button = document.querySelector("#btn");
const header = document.querySelector("#color");
const body = document.querySelector("body");


const hex = "0123456789ABCDEF";

function generateColor(){
    let color = "#";
    for(let i = 0; i < 6; i++){
        const randomNumber = Math.floor(Math.random() * 16);
        color += hex[randomNumber];
    }
    return color;
};

button.addEventListener('click', () => {

    const randomColor = generateColor();

    body.style.backgroundColor = randomColor;

    header.innerText = randomColor;
});