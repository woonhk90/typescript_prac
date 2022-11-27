/* -------------------------- 항상 빈배열 ( 아무것도 없어야 함 ) ------------------------- */
/*
    const activeUser: [] = []
    activeUser.push('aa') // -> error
*/
/* ---------------------------------- 문자 배열 --------------------------------- */
var activeUsers = [];
activeUsers.push("Tony");
/* ---------------------------------- 숫자 배열 --------------------------------- */
var ageList = [45, 56, 13];
ageList[0] = 99;
// Alternate Syntax:
/* --------------------------------- 의미는 같음 --------------------------------- */
// const bools: Array<boolean> = []
var bools = [];
var coords = [];
coords.push({ x: 23, y: 8 });
/* ---------------- 다차원 배열 ( Multi-dimensional string array ) --------------- */
var board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];
