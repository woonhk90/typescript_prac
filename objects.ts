// Objects as parameters:
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins" });

const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);

// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: { x: number; y: number }): {
//   x: number;
//   y: number;
// } {
//   return { x: point.x * 2, y: point.y * 2 };
// }

// type Point = {
//   x: number;
//   y: number;
// };

let coordinate: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

/* ------------------------------ ? => 선택적 프로퍼티 ----------------------------- */
/*
    x나 y를 빼먹으면 오류가 발생 ( 필수이기 때문 )
    ?를 붙이면 필수가 아니기 때문에 프로퍼티에 추가하지 않아도 오류발생하지 않음
*/
type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 3 };

/* ------------------------- readonly => readonly제어자 ------------------------ */
/*
    불러오거나 출력은 가능
    재할당 불가

    ** 참고하는 객체가 있는 경우 ( id라는 숫자 자리에 객체나 배열을 놓을경우 )
    그 객체와 배열은 추가, 갱신 가능
    -> 참조하기 때문
*/
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12837,
  username: "catgurl",
};

console.log(user.id);
user.id;

/* ---------------------------------- 교차타입 ---------------------------------- */
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
