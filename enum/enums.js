"use strict";
var direction;
(function (direction) {
    direction["up"] = "up";
    direction["down"] = "down";
    direction["left"] = "left";
    direction["right"] = "right";
})(direction || (direction = {}));
var Sprendimas;
(function (Sprendimas) {
    Sprendimas[Sprendimas["yes"] = 1] = "yes";
    Sprendimas[Sprendimas["no"] = calcEnum()] = "no";
})(Sprendimas || (Sprendimas = {}));
function calcEnum() {
    return 4;
    2343;
}
function runEnum(obj) { }
runEnum(direction);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let test = Test.A;
let nameA = Test[test];
// let c = something.A;
