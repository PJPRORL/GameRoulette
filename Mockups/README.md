# Opdracht: Loot Crate Card Reveal (Game Roulette)

Beste Programmeur,

Welkom bij je verfijnde project! We hebben het concept van het draaiende rad overboord gegooid. Voor je allereerste grote JavaScript/DOM project gaan we iets bouwen dat véél relevanter is in moderne web-development (en in games!): **Een 3D flippende Loot Crate / Digital Card Reveal.**

Hier is de briefing van de klant. Succes met bouwen!

---

## 📅 Project Briefing

**Klant:** Game Verzamelaar
**Project:** Card Flip Game Onthuller
**Deadline:** Bepaal je zelf!

### 🎯 Doelstelling

Bouw een webapplicatie waarbij op het scherm een gesloten "Loot Card" zweeft. Zodra de speler op de "Reveal Game"-knop drukt, draait de kaart prachtig in 3D om, en onthult een willekeurig spel uit diens uitgebreide fysieke collectie. Dat is het spel dat gespeeld gaat worden!

Na de "Reveal" moet het mogelijk zijn om het spel definitief uit de collectie te schrappen (zodat het niet meer getrokken wordt) en de kaart weer om te draaien voor de volgende beurt.

### 📋 Functionele Eisen (Wat moet de app kunnen?)

1. **Games inladen:** De lijst met games staat al voor je klaar in `scripts/games.js`.
2. **Interactieve Kaart:** Een HTML element centraal in beeld dat dient als de kaart met een duidelijke voor- en achterkant.
3. **Onthullingsknop:** Een grote knop om de animatie en de logica te starten.
4. **De 3D Flip Animatie:** De kaart moet op de Y-as in 3D draaien (`rotateY`).
5. **Winnaar Invoegen:** Selecteer in JavaScript een willekeurig spel uit de actieve array en toon deze tekst op de *achterkant* van de kaart nét voor (of tijdens) de flip.
6. **Gekozen Spellen Verplaatsen:** Zodra een spel onthuld is en geaccepteerd (bijv. via een tweede knop), moet het spel verwijderd worden uit de actieve lijst en toegevoegd worden aan een *nieuwe* lijst met "Gekozen Games".
7. **Data Opslag:** Sla zowel de lijst met overgebleven games als de lijst met gekozen games op in de `localStorage`. Controleer bij het inladen of deze bestaan, gebruik anders de `initialGames`.
8. **Eindbericht:** Controleer bij elke klik of er nog spellen in de actieve lijst zitten. Zo nee, toon dan automatisch een `alert("Je bent door al de spellen heen")` (of bouw een mooie custom popup) en blokkeer de spin knop.
9. **De Games Pagina:** Er moet een tweede webpagina komen (`Games.html`). Op deze pagina haal je de lijst met "Gekozen Games" (uit de `localStorage`) op en genereer je met JavaScript het overzicht. Toon elk spel op het scherm inclusief een bijbehorende afbeelding en spel-details.

### 🎨 Non-Functionele Eisen (Design & Code)

1. **Bestandsstructuur:** Houd je aan de klaargezette bestandsstructuur (`index.html`, `style.css`, `main.js`).
2. **Dark & Premium Thema:** Gebruik een `linear-gradient` achtergrond (bijv. heel donkerpaars naar zwart).
3. **Animaties (Leermoment CSS):**
   * De kaart zélf moet heel zachtjes van boven naar beneden zweven (`@keyframes` animatie).
   * Er moet een gloeiïng (glow) vanuit of rondom de kaart komen ter versterking van het 'premium' gevoel.
4. **Clean Code Practices:** Werk met heldere functies zoals `flipCard()`, `pickRandomGame()`, en `removeGameAndSave()`.

---

## 🗺️ Stappenplan (Jouw Roadmap)

Dit design steunt hevig op interactie tussen een slimme CSS setup en JavaScript.

### Stap 1: De HTML Skelet

Maak een container voor de 3D-ruimte. Daarin plaats je een '.card' div, en daarbinnen twéé divs voor de gezichten:

```html
<div class="scene">
   <div class="card" id="lootCard">
      <div class="card-face card-front">?</div>
      <div class="card-face card-back" id="winner-text">Resultaat...</div>
   </div>
</div>
```

### Stap 2: CSS 3D Magie (De Tovertruc)

Zoek online naar de term "CSS Card Flip 3D effect".
Je gaat leren werken met:

* `perspective: 1000px;` op de `.scene` map.
* `transform-style: preserve-3d;` en `transition: transform 1s;` op de `.card`.
* `backface-visibility: hidden;` op de `.card-face` elementen (zodat je de achterkant van een element niet ziet).
* Geef `.card-back` een standaard `transform: rotateY(180deg);`
* Maak een aparte class `.is-flipped` in je CSS die je enkel definieert met: `.is-flipped { transform: rotateY(180deg); }`

### Stap 3: Data & Logica (JavaScript)

* Pak de elementen: het kaart element (`#lootCard`), de tekst van de achterkant, en je knop.
* Zorg voor de `localStorage` fallback (check of data bestaat, anders `initialGames` inladen).

### Stap 4: De "Klik" koppelen

* Luister naar de klik op je knop met `addEventListener`.
* Bereken in die functie een random getal (Math.random) tussen de 0 en de lengte van je actieve array.
* Plaats dit winnende spel als tekst in de `.card-back`.
* Voeg de class `.is-flipped` toe aan de `.card` middels `classList.toggle('is-flipped')`.
  Boom! Je kaart draait om en onthult exact op tijd the Game!

### Stap 5: Dataverwerking na een Winst

* Maak een functie voor afhandeling van de tweede (accepteer) knop.
* Verwijder het gekozen element uit je actieve array (bijv. met `.splice()`).
* Voeg (`.push()`) dit element toe aan je tweede array met gekozen games.
* Sla *beide* lijsten direct op in `localStorage`.
* Check direct of je actieve array nu leeg is (`activeGames.length === 0`). Zo ja, toon je alert bericht.
* Draai de kaart weer onbedrukt terug (verwijder `.is-flipped`).

### Stap 6: De Games Overzichtspagina

* Maak het bestand `Games.html` en kopieer je basis CSS layout hiernaartoe.
* Maak in dit bestand via HTML een mooi grid (`display: grid`) op de pagina klaar.
* Haal in je JavaScript je `.getItem('playedGames')` array op uit de local storage.
* Loop (met bijvoorbeeld `.forEach()`) door deze spellen heen en genereer met HTML en JavaScript zogenaamde "cards" voor elk gespeeld spel en steek die in het grid (`element.innerHTML` of `document.createElement`).
* **Tip voor afbeeldingen & details:** Op dit moment is `games.js` een array van teksten (strings). Om een afbeelding en details te tonen, zul je de items in `games.js` in de toekomst in zogenaamde *Objecten* moeten veranderen. Bijvoorbeeld: `{ titel: "Doom", img: "doom.jpg", details: "Een vette shooter uit 2016" }`. Op die manier heeft je Javascript makkelijk toegang tot alle details!

Veel succes, en geniet van deze ontzettend toffe CSS & JS oefening!

---

## 🎨 Design Mockup & Inspiratie

De applicatie toont een grote, glimmende gesloten kist of een kaart (op zijn kop). Met een spannende animatie, zodra je op "Reveal" klikt, flipt de kaart in 3D om, en daarop staat the Game die je gaat spelen geschreven.

**Wat je leert met deze layout:**

* **CSS Wizardry:** Je leert geavanceerde CSS classes bouwen, voornamelijk `transform: rotateY(180deg)` en `perspective` voor een écht lijkende flip-animatie in 3D.
* **JavaScript Basics:** JavaScript doet hier de logica: array mixen, één uithalen, in de verborgen HTML-kant van de kaart plakken, en daarna de CSS-class 'flipped' toevoegen aan de structuur zodat hij daadwerkelijk draait.
* **Look & Feel eisen:**
  * Een "Premium" look. Denk aan goud (`#fbbf24`), diep paars (`#4c1d95`) of donkerblauw.
  * De kist of kaart moet heel subtiel op en neer zweven in de ruimte (CSS `keyframes`).
  * Wanneer geopend (de flip), moet er een stralenkrans of fel licht (drop-shadow) achter de kaart of kist vandaan komen.

![Voorbeeld Eindresultaat](./Mockups/mockup_loot_crate_1772401223993.png)
