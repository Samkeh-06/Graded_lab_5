// Student Number: 225087897


//created an array to store car make names
const makes = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"];

//created cars object with name, type, make and img properties
const cars = [
    { name: "Beetle", type: "Classic", make: "VW", img: "images/beetle.jpg" },
    { name: "Mustang", type: "Muscle", make: "Ford", img: "images/mustang.jpg" },
    { name: "A4", type: "Sedan", make: "Audi", img: "images/a4.jpg" },
    { name: "C-Class", type: "Luxury", make: "Benz", img: "images/cclass.jpg" },
    { name: "Corolla", type: "Compact", make: "Toyota", img: "images/corolla.jpg" },
    { name: "M3", type: "Sport", make: "BMW", img: "images/m3.jpg" },

    // Added two cars of my choice
    { name: "Golf GTI", type: "Hatchback", make: "VW", img: "images/golf.jpg" },
    { name: "Ranger", type: "Pickup", make: "Ford", img: "images/ranger.jpg" }
];

//initialize the correct guess to zero inorder to count the correct guesses
let correct = 0;

//initialized the total guesses made to zero inorder to count the total number
//of guesses made by the user each time it guesses the car make 
let total = 0;

//initialized the currentCar to use it to random the images, and get current carname, cartype 
let currentCar;

//Acess html element by using id to be stored on the declared variables
const makeList = document.getElementById("make-list");
const guessBtn = document.getElementById("guess-btn");

// Load dropdown and first car
window.onload = function() {
// Fill dropdown by looping through my make array to append to makeList
    makes.forEach(make => {
        makeList.innerHTML += `<option value="${make}">${make}</option>`;
    });
   
    // newCar() is invoked so that the random car, car name and car type
    // and car image get displayed when the window loads and disable class is removed
    newCar();
    guessBtn.classList.remove("disabled");
};

// Get random car and display currentcar name, type and img
function newCar() {
    currentCar = cars[Math.floor(Math.random() * cars.length)];

    document.getElementById("car-name").textContent = currentCar.name;
    document.getElementById("car-type").textContent = currentCar.type;

    const img = document.getElementById("car-img");
    img.src = currentCar.img;
    img.classList.remove("hidden");//Remove hidden class
}

// Guess button
guessBtn.onclick =function() {
    guessBtn.classList.add("disabled");//Add disable class each and every time when guessBtn is clicked

    if (makeList.value === currentCar.make) {
        correct++;
        document.getElementById("correct").textContent = correct;
    }

    total++;
    document.getElementById("total").textContent = total;

    newCar(); // load next car

    guessBtn.classList.remove("disabled");
};