let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives: number = 0;
numCatLives += 1;
// numCatLives = "zero"

let gameOver: boolean = false;
gameOver = true;
// gameOver = "true";

let nothing: null = null;
let foo: undefined = undefined;

let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false;

let isFunny = false;
isFunny = true;
// isFunny = 'asd';

let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing().toUpperCase();

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}
