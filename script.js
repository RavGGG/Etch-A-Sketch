
const divContainer = document.querySelector('.container');
const sliderValue = document.getElementById('slider-value');

const heightDiv = 600;
const widthDiv = 600;



let isDrawing = false;

document.addEventListener("mousedown", () => {
        isDrawing = true;
});

document.addEventListener("mouseup", () => {
        isDrawing = false;
});

let color = "";

let array = []
function drawing() {
        const value = slider.value;
        sliderValue.innerHTML = value;

        let gridWidth = (widthDiv / value) + "px";
        let gridHeight = (heightDiv / value) + "px";

        divContainer.innerHTML = '';
        for (let i = 0; i < (value * value); i++) {
                const div = document.createElement('div');
                div.style.width = gridWidth;
                div.style.height = gridHeight;
                div.classList.add("div-grid")
                divContainer.appendChild(div);
                div.addEventListener("mouseover", function () {
                        if (isDrawing) {

                                div.style.backgroundColor = color;
                        }
                })
        
        }
}

slider.addEventListener('input', drawing)



const buttonBlack = document.querySelector(".color-black")
const rubber = document.querySelector(".rubber")
const rainbowButton = document.querySelector(".rainbow");

function setBlackColor() {
        color = "black"
}

function setWhite() {
        color = "white"
}

buttonBlack.addEventListener("click", setBlackColor);
rubber.addEventListener("click", setWhite);










