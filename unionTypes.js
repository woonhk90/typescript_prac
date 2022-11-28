var age = 21;
age = 25;
age = "25";
var coordinates = { x: 1, y: 21 };
coordinates = { lat: 22.333, long: 123.457 };
/* ------------------------------ 함수에 유니온타입 적용 ------------------------------ */
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
/* --------------------------------- 타입 좁히기 --------------------------------- */
function calculateTax(price, tax) {
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
var stuff = [1, 2, 3, "abc"];
var coords = [];
coords.push({ lat: 22.333, long: 123.457 });
coords.push({ x: 22, y: 123 });
/* --------------------------------- 리터럴 타입 --------------------------------- */
// 타입 -> 0, 리터럴값 -> 0
var zero = 0;
var hi = "hi";
var mood = "happy";
mood = "sad"; // 가능
var today = "Mon";
today = "Tue"; // 가능
// today = "weds"; // 불가능
