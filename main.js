//Task 1

var a = 3;
var b = 5;
var c;

var output = "var a = 3;\nvar b = 5;\nvar c;\n---------------\n" +
            "a + b = " + (a + b) + "\n" +
            "a - b = " + (a - b) + "\n" +
            "a * b = " + (a * b) + "\n" +
            "a += b = " + (a += b) + "\n" +
            "a -= b = " + (a -= b) + "\n" +
            "a *= b = " + (a *= b) + "\n" +
            "a /= b = " + (a /= b) + "\n" +
            "a %= b = " + (a %= b) + "\n" +
            "a == b = " + (a == b) + "\n" +
            "a != b = " + (a != b) + "\n" +
            "a > b = " + (a > b) + "\n" +
            "a < b = " + (a < b) + "\n" +
            "!a && !c = " + (!a && !c) + "\n" +
            "!a || !c = " + (!a || !c);

alert(output);


var first_name, last_name, email;

first_name = "Carleen";
last_name = "Espenant";
email = "espe0004@algonquinlive.com";

var output = "My name is " + first_name + " " + last_name + ". " + "You can contact me at " + email + ".";

alert(output);


var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

var sum = numbers[0] + numbers[4];

var total = numbers[0] + ' + ' + numbers[4] + ' = ' + sum;

if(sum % 2 == 0) {
   var output = total + '\n' + 'This is an even number';
} else {
   var output = total + '\n' + 'This is an odd number';
}

alert(output);