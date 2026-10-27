"use strict";

const scoreButton = document.querySelector("#score-button");
const score = document.querySelector("#score");
const doubleCard = document.querySelector("#double-card");
const hoverZone = document.querySelector("#hover-zone");
const status = document.querySelector("#status");
let points = 0;


document.addEventListener('DOMContentLoaded', () => {
    
   
    document.addEventListener('click', (event) => {
        const targetButton = event.target.closest('button, #score-button, #double-card');
        
        if (targetButton) {
            console.log(`Нажат элемент:`, targetButton);
            handleButtonClick(targetButton);
        }
    });

}); 

function handleButtonClick(button) {
    if (button.id === 'score-button') {
        points++;
        if (score) score.textContent = points;
        if (status) status.textContent = "Очки начислены!";
    } 
    else if (button.id === 'double-card') {
        points = points * 2;
        if (score) score.textContent = points;
        if (status) status.textContent = "Очки удвоены! 💥";
    }
}
