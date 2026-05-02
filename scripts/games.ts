export interface Game {
  readonly name: string;
  readonly afbeelding?: string;
}

export let games: Game[] = [
    {
      name: "Ultra Street Fighter IV",
      afbeelding: "images/ultra-street-fighter-iv.jpg"
    },
  {
    name: "F1 2018",
    afbeelding: "images/f1-2018.jpg"
  },
];