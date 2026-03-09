# 🛠️ Code Feedback: CSS Grid Layout

Hoi! Je bent al heel goed op weg met CSS Grid. Je begrijpt het concept van `grid-template-areas` en `grid-template-rows` duidelijk al goed! Toch zitten er een aantal eigenschappen in de weg die ervoor zorgen dat de layout niet doet wat je verwacht. 

Hieronder vind je de feedback per sectie, zonder de directe code-oplossing te geven. Zo kan je er zelf even op puzzelen!

---

## 🏗️ 1. De Algemene Container (`.grid-container`)

Je hebt de `body` en je hoofdcontainer opgebouwd, maar er botsen daar twee dingen qua formaat:
*   **De verhouding van de rijen:** Je hebt gekozen voor `33vh 33vh 33vh`. Dit betekent dat je scherm altijd in 3 perfect gelijke blokken gehakt wordt. De header, main en footer zijn dus allemaal even groot. Meestal wil je dat een header en footer gewoon de grootte aannemen van hun inhoud (een 'automatische' hoogte), en dat je `main` álle overgebleven ruimte opslokt (bijvoorbeeld met een 'fractie'). 
*   **Scrollbars?** Je geeft je `.grid-container` een hoogte van `100vh` (100% van je schermhoogte). Maar op je `body` element staat ook `padding: 2rem`. Die twee tellen bij elkaar op! Daardoor wordt je pagina 100vh + 4rem padding groot, en ontstaat er onnodig een verticale scrollbar.

## 🧭 2. De Footer (`footer`)

Je hebt de footer netjes toegewezen aan `grid-area: footer`. Super! Maar in de styling van de footer heb je ook dit gezet:
*   `position: fixed;`
*   `bottom: 0;`

**Waarom gaat dit mis?** 
Als je CSS Grid gebruikt om elementen een plek te geven, moet je ze niet meer "losmaken" met `position: fixed` of `position: absolute`. Door `fixed` te gebruiken luistert het element niet meer naar je Grid, maar plakt hij hem gewoon blind over al je andere content heen aan de onderkant van het scherm. 
*Verwijder de positionering en laat `grid-area` zijn werk doen.*

## 🧩 3. De Main Sectie & Inner Grid (`main` / `.main-container`)

Dit is waar je binnenste 3-rijen grid vastloopt. Er zitten een aantal logica-foutjes in:

*   **Vreemde Hoogtes:** Op de `main` tag heb je `height: 100vh;` staan. Let op! Je hele website (`.grid-container`) is al 100vh hoog, de main sectie is daar maar één onderdeel van. Haal de 100vh van de mainsectie af, het grid rekt hem vanzelf wel uit.
*   **Het area-puzzelstukje mist:** In `.main-container` heb je gedefinieerd dat er 3 rijen moeten komen (`1fr 1fr 1fr`), héél goed! Maar bij `grid-template-areas` verdeel je maar twéé namen: `"Design"` en `"scene"`. Je grid raakt daardoor in de war omdat rij 3 geen naam/doel heeft.
*   **HTML Structuur van de Knop:** Je wil een grid met 3 blokken (titel, card, button). Echter staat je `<button>` in je HTML-bestand **binnenin** `<div class="scene">`. Een grid in de `.main-container` beïnvloedt alleen de *directe kinderen* van `.main-container`. Als je de knop een eigen rij wil geven, haal hem dan uit de `.scene` div in je HTML zodat het een broertje wordt van `.scene` en `.Design`. Geef hem daarna een class, en voeg hem toe aan je `grid-template-areas`!

---

*Succes met refactoren! Mocht je na het oplossen van deze puntjes nog steeds vastzitten, roep dan even, dan kijk ik opnieuw mee!*

---

## 🚀 UPDATE: Feedback op je 2e poging!

Geweldig gewerkt! Je hebt de padding verwijderd van `body`, de `auto 1fr auto` toegepast op je hoofd-grid, en `position: fixed` uit je footer gehaald. Daardoor werkt je grote opmaak nu véél beter.

Ook in `.main-container` heb je de namen geüpdatet naar `"title"`, `"card"`, en `"winner-button"`. In je HTML heb je prachtig 3 losse divs gemaakt voor deze elementen. **Dit is een enorm grote stap in de juiste richting!**

Er zijn echter nog 2 specifieke CSS details waar we even naar moeten kijken, omdat je grid nog onzichtbaar in de knoop zit:

### 🔍 1. De "Card" Sectie (`.card`)
Je hebt in je HTML een `<div class="card">` gemaakt, zodat deze perfect als Grid-item fungeert. Binnen in deze div zit nú pas je `<div id="lootCard">` (de eigenlijke flippende 3D-kaart). 
Dit is op zich prima, maar kijk eens naar de CSS van je `.card` class in `style.css`:
*   Je hebt er `display: grid;` op gezet.
*   Maar je hebt aan `.card` **geen** hoogte (`height`) of breedte (`width`) meegegeven, en **geen** 3D eigenschappen (`perspective`) toegevoegd. 
*   **De Tip:** In de originele opdracht stond dat `"scene"` de container moest zijn met `perspective`. Je hebt `.scene` nu vervangen door `.card`. Zorg ervoor dat deze nieuwe `.card` container in css een vaste hoogte en breedte krijgt (bijvoorbeeld `width: 300px; height: 400px;`), én dat je hier het `perspective: 1000px;` op toepast! 

### 🔍 2. De "Button" Sectie (`.winner-button`)
Je hebt in de HTML keurig een `<div class="winner-button">` gemaakt met daarin `<button>REVEAL GAME</button>`.
Je grid-area in `.main-container` heet inderdaad `"winner-button"`.
Echter: **Je hebt de class `.winner-button` nog niet aangemaakt in je CSS!**
*   **De Tip:** Maak in je `style.css` de class `.winner-button` aan. Geef deze de eigenschap `grid-area: winner-button;` om hem officieel aan de juiste rij in het main-grid te koppelen. Pas daarna mag je de knop zélf mooi maken met styling.

Je bent er bijna, nog eventjes de puntjes op de i zetten in je CSS bestand!

---

## 🏁 UPDATE 3: Final Review!

Wauw, perfect! Je layout basis staat nu écht als een huis. En het helpt enorm dat je tijdelijk even een `border: solid 2px red;` hebt toegevoegd aan je `.card`. Slimme debugging truc! Dat maakt het uitlijnen van grids en containers 100 keer makkelijker.

**Wat je perfect hebt opgelost:**
1.  **`.card` Formaat & 3D:** Je container is breed en hoog genoeg en het belangrijkste: je hebt `perspective: 1000px;` ingeschakeld! Hiermee heb je officieel 'de camera' (het vluchtpunt) voor de 3D-ruimte geactiveerd. Zonder deze regel zou de kaart straks "plat" omdraaien, en met deze regel lijkt het daadwerkelijk fysiek naar je toe en van je af te draaien in 3D-ruimte.
2.  **`.winner-button` Link:** Je hebt de `.winner-button` class toegevoegd aan je CSS en met `grid-area: winner-button;` gekoppeld. Nu is deze blok netjes in zijn eigen aangewezen onderste rij van het grid getrokken.

Je Grid en basis HTML-structuur is hiermee helemaal goedgekeurd. Je .card en je knopje staan op de perfecte afgetekende velden binnen je grid. Je bent 100% klaar om verder te gaan met het CSS-ontwerp (de knoppen stylen via sectie 2 van de README) of de daadwerkelijke 3D-logica! Ga zo door!
