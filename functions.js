// Function parameter type annotations:
var doSomething = function (person, age, isFunny) { };
// Return type annotation:
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
function square(num) {
    return num * num;
}
square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 78, true);
// Arrow function:
var add = function (x, y) {
    return x + y;
};
// Contextual Type Clues
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
    return color.toUpperCase();
});
// Void
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
// Never
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING!");
    }
}
