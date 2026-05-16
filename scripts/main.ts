import type { Game } from './games.ts'
import { games, startApplicatie } from './games.js'

// Game Roulette Hoofdscript

// 1. Selecteer de HTML elementen (canvas, button, result div)
const card = document.querySelector('.card-inner')! as HTMLElement;
const backCard = document.querySelector('.card-back')! as HTMLElement;
const button = document.querySelector('#revealButton')! as HTMLButtonElement;
const image = document.querySelector('img')! as HTMLImageElement;

// 2. Initialisatie: Bekijk de localStorage en laad de spellen
await startApplicatie();

let inladenGames: Game[] = games;
let gamesGeschiedenis: Array<Game> = [];

console.log("Initial games vanuit main.ts:", inladenGames);

button.addEventListener("click", function () {

    const randomAfbeelding = inladenGames[Math.floor(Math.random() * inladenGames.length)];

    if (randomAfbeelding && randomAfbeelding.afbeelding) {
        image.src = randomAfbeelding.afbeelding;
        card.classList.toggle("draaien");
    }
})