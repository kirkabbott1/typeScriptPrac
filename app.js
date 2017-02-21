console.log("it works");
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
var multiplyNumbers = function (number1, number2) { return console.log(number1); };
multiplyNumbers(5, 10);
console.log("reast and spread");
var numbers = [1, 5, 99, -5];
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return { name: name, args: args };
}
console.log(makeArray("kirk", 2, 3, 4, 5));
