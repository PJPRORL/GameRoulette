import { games } from './games.js';
// Game Roulette Hoofdscript
// 1. Initialisatie: Bekijk de localStorage en laad de spellen
let initialGames = games;
console.log(initialGames);
// fetch commando moet nog geschreven worden.
// 2. Selecteer de HTML elementen (canvas, button, result div)
const card = document.querySelector('.card-inner');
const backCard = document.querySelector('.card-back');
const button = document.querySelector('#revealButton');
button.addEventListener("click", (e) => {
    card.classList.toggle("draaien");
    backCard.classList.toggle("draaien");
});
