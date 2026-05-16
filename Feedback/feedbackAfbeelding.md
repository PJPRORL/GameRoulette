# Feedback: Afbeeldingen tonen op de kaart (Deel 2)

Hey! Goed dat je de stappen hebt geprobeerd. Je hebt de CSS en de HTML perfect toegepast. Omdat het nog steeds niet werkt, ben ik in je mappenstructuur gedoken en ik heb de echte boosdoener gevonden!

## De Boosdoener: Verkeerde bestandsnamen en mappen

Als je in je console in de browser kijkt (F12 -> Console), zie je waarschijnlijk een hoop **404 Not Found** errors in het rood. Dit komt doordat de paden in je `games.json` **niet** overeenkomen met de echte bestanden op je computer.

**Wat staat er in `games.json`?**
`/Images/assassins-creed-brotherhood.jpg`

**Wat is de échte map en naam op jouw computer?**
`/Images/Game_Images/Assassin's Creed Brotherhood.jpg`

Zie je de verschillen? 
1. De afbeeldingen zitten nóg een mapje dieper (`Game_Images`).
2. De echte bestandsnamen gebruiken spaties en hoofdletters, terwijl je JSON-bestand streepjes (kebab-case) gebruikt.

## De Oplossing (De Code)

Omdat de echte afbeeldingen eigenlijk gewoon de titel van het spel zijn (maar dan zonder de dubbele punt `:`), kunnen we dit via JavaScript oplossen zonder dat je heel je JSON hoeft te herschrijven!

Vervang in `main.ts` deze regel:
```typescript
image.src = randomAfbeelding.afbeelding;
```

**Door deze code:**
```typescript
// 1. Neem de naam van het spel en verwijder eventuele dubbele punten (:)
let correcteBestandsnaam = randomAfbeelding.name.replace(":", "");

// 2. Construeer het échte pad naar de afbeelding
image.src = `/Images/Game_Images/${correcteBestandsnaam}.jpg`;
```

*Kleine tip over `replace`: Omdat sommige titels zoals "Batman: Arkham City" een dubbele punt hebben, maar Windows geen dubbele punten toelaat in bestandsnamen, zorgt `.replace(":", "")` ervoor dat we de exacte bestandsnaam krijgen die op je harde schijf staat!*

### ⚠️ Let op: Ontbrekende afbeeldingen!
Ik zag tijdens mijn analyse dat je `games.json` zo'n 100+ spellen bevat, maar je map `Game_Images` bevat maar **78 bestanden**. Het kan dus zijn dat voor sommige spellen de afbeelding simpelweg niet bestaat (bijv. Hitman 2016). Als je roulette op zo'n spel valt, zal de afbeelding alsnog breken. Je kan dit later oplossen door de ontbrekende afbeeldingen te downloaden, of door een "fallback" (standaard) afbeelding in te stellen in je code.

Probeer de code hierboven toe te voegen aan je `main.ts` en test het uit!
