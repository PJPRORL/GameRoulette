export interface Game {
  readonly name: string;
  readonly afbeelding?: string;
}

// fetch commando voor het ophalen van de games.
async function gamesOphalen(): Promise<Game[]> {
  try {
    const response = await fetch(`./Data/games.json`);

    if (!response.ok) {
      throw new Error(`Kon lokaal bestand niet laden! Status: ${response.status}`);
    }

    const data: Game[] = await response.json();

    console.log("Lokale games succesvol ingeladen:", data);
    return data;
  }
  catch (error) {
    console.error("Er is iets misgegaan bij het ophalen van het lokaal bestand:", error);
    return [];
  }
}

export let games: Game[] = [];

export async function startApplicatie() {
  const geladenGames = await gamesOphalen();

  if (geladenGames.length > 0) {
    console.log("We kunnen de roulette starten! Aantal games:", geladenGames.length);

    games = geladenGames;

  } else {
    console.log("Geen games gevonden om in te laden.");
  }
}