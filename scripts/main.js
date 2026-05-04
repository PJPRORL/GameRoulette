import { games } from './games.js';
// Game Roulette Hoofdscript
// 1. Initialisatie: Bekijk de localStorage en laad de spellen
// TIP: Gebruik de variabele 'initialGames' uit games.ts als fallback!
let initialGames = games;
console.log(initialGames);
// 2. Selecteer je HTML elementen (canvas, button, result div)
const card = document.querySelector('.card-inner');
const backCard = document.querySelector('.card-back');
const button = document.querySelector('#revealButton');
button.addEventListener("click", (e) => {
    card.classList.toggle("draaien");
    backCard.classList.toggle("draaien");
});
// 5. Functie om een spel permanent te verwijderen
/*function removeGameAndSave(gameName) {
    // Jouw array en localStorage update code hier...

}*/
// Event listeners toevoegen
// (bijv. click event op je spin button)
/*import {Game} from './games'
import {games} from './games'

// Game Roulette Hoofdscript

// 1. Initialisatie: Bekijk de localStorage en laad de spellen
// TIP: Gebruik de variabele 'initialGames' uit games.ts als fallback!
let initialGames: Game[] = games;
console.log(initialGames);

// 2. Selecteer je HTML elementen (canvas, button, result div)
const card = document.querySelector('.card');
const frontCard = document.querySelector('.card-front');
const backCard = document.querySelector('.card-back');
const button = document.querySelector('.revealButton');

button.addEventListener("click", (e) =>{
    card.classList.toggle("card-flip card-inner")
    card.classList.toggle("card-back");

    frontCard.classList.toggle("hide")
    backCard.classList.toggle("show")
})

// 5. Functie om een spel permanent te verwijderen
/*function removeGameAndSave(gameName) {
    // Jouw array en localStorage update code hier...

}*/
// Event listeners toevoegen
// (bijv. click event op je spin button)*/
