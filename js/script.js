"use strict";

const scoreButton = document.querySelector("#score-button");
const score = document.querySelector("#score");
const doubleCard = document.querySelector("#double-card");
const hoverZone = document.querySelector("#hover-zone");
const status = document.querySelector("#status");
let points = 0;


document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            console.log(`Нажата кнопка: ${event.target.textContent}`);
            handleButtonClick(event.target);
        }
    });

}); 
function handleButtonClick(button) {
    if (button.id === 'score-button') {
        points++;
        if (score) {
            score.textContent = points; 
        }
        if (status) {
            status.textContent = "Очко засчитано!";
        }
    } 
    else if (button.id === 'submit-btn') {
        alert('Форма отправлена!');
    } 
    else if (button.classList.contains('close-btn')) {
        alert('Окно закрыто!');
    }
}
