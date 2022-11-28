let age: number | string = 21;
age = 25;
age = "25";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 21 };
coordinates = { lat: 22.333, long: 123.457 };

/* ------------------------------ 함수에 유니온타입 적용 ------------------------------ */
function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

/* --------------------------------- 타입 좁히기 --------------------------------- */
function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

/* ------------------------------- 유니온 타입과 배열 ------------------------------- */
// const nums: number[] = [1, 2, 3, 4]; // -> 오직 숫자
// const stuff: any[] = [1, 2, 3, 4, true, "abcde", {}]; // -> 아무거나 가능 ( 하지만 범위가 너무 넓음 )

// const stuff: number | string[]; // -> 숫자, 문자열인 배열만 사용가능
// const stuff: number[] | string[]; // -> 숫자배열, 문자배열 각각 사용만 가능, 같이 사용 불가
const stuff: (number | string)[] = [1, 2, 3, "abc"];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 22.333, long: 123.457 });
coords.push({ x: 22, y: 123 });

/* --------------------------------- 리터럴 타입 --------------------------------- */
// 타입 -> 0, 리터럴값 -> 0
let zero: 0 = 0;
let hi: "hi" = "hi";

let mood: "happy" | "sad" = "happy";
mood = "sad"; // 가능
// mood = "angry"; // 불가능 ( 타입이 없음 )

type DayOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
let today: DayOfWeek = "Mon";
today = "Tue"; // 가능
// today = "weds"; // 불가능
