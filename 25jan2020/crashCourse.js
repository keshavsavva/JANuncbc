// 1. basic variables

// create basic variables

var num1 = 5;
var name = "George";
var arr = [];

// 2. Arrays
// array of strings
var fruits = [ "apple", "blueberry", "plum", "pear", "banana" ];

// array of numbers
var numbers = [ 2, 9, 7, 3, 1 ];
// or
var numbers = [ 
    2,
    9,
    7,
    3,
    1 ];


    // 3. For Loops
    // create a for loop to print "my name is Bob" 5 times
    for(var i = 0; i < 5; i++) {
        console.log("My name is Bob!");
    }

    // create for loop that loops through 5 string array

    for( var k = 0; k < fruits.length; k++) {
        console.log(fruits[k]);
    }

    fruits.forEach(function(item) {
        console.log(item);
    })

    // 4. functions
    // crate a function that takes 2 numbers and divides the first niumber by the second number
    //  function declaration - these functions can be called from anywhere in the file
    function divide(n1, n2) {
        return n1/n2;
    }

    console.log(divide(10,5));
    // or
    var result1 = divide(10,5);
    console.log(result)1;

    // function expression - function must be defined before it is called in this configuration
    var divide2 = function(n1,n2) {
        return n1 / n2;
    }
    var result2 = divide2(10,5);
    console.log(result2);

    // create a function that takes in an array od numbers and then loops through the array and prints out numbers

    function logNumbers(arr) {
        for(var t = 0; t < arr.length; t++) {
            console.log(arr[t]);
        }
    }
    logNumbers(numbers);

    // 5. Objects

    // create a javascript object
    var car = {
        make: "Honda",
        model: "CRV",
        year: 2005
    };

    console.log(car.make);
    console.log(car.model);
    console.log(car.year);

    // OR put a function in the object, but the function must be called after the object
    var car = {
        make: "Honda",
        model: "CRV",
        year: 2005,
        printStats: function() {
            console.log(this.make);
            console.log(this.model);
            console.log(this.year);
        }
    };

    car.printStats();

    // you can have a function inside of another function, but it can only be called within the outer function

    // create an array of 3 objects
    var car1 = {
        make: "Honda",
        model: "CRV",
        year: 2005
    };
    var car2 = {
        make: "Toyota",
        model: "Camry",
        year: 1990
    };
    var car3 = {
        make: "Tesla",
        model: "Cybertruck",
        year: 2020
    };

    var cars = [car1, car2, car3];

    console.log(cars[2].year);
    // prints the year of car 3

    // console log 3 properties for every object
    for(var m = 0; m < cars. length; m++) {
        console.log("Make: " + cars[m].make, "Model: " + cars[m].model, "Year: " + cars[m].year);
    }

    // 6. Jquery events

    // create basic html buttn
    var btn = $("<button>");
    btn.text("click me!");
    btn.attr("id", "btnSubmit");
    btn.attr("class", "btn btn-success btn-lg");
    $("#container").append(btn);
    $("#btnSubmit").on("click", function() {
        console.log("Hi!");
    })

    // 7. Overall Structure
    