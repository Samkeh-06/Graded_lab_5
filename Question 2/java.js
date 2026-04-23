//Access the HTML elements by using id
let blendNowBtn = document.getElementById("blend-now");
let message = document.getElementById("message-box");

//Added the eventlistener that each time a user clicks the button so that
//Button can handle multiples tasks
blendNowBtn.onclick = function () {
    let text = document.getElementById("surname").value.trim();
    let color = document.getElementById("color").value;
    let font = document.getElementById("font").value;
    let size = document.getElementById("font-size").value;

//Declared an isReverse and isRandom variables to access the reverse 
//& random radio button and checked it
    let isReverse = document.getElementById("reverse").checked;
    let isRandom = document.getElementById("random").checked;

    message.innerHTML = ""; //Cleared message box


    let letters = text.split(""); //Declared letters variable to split user input into an array

//Checked if the reverse radio button is checked to reverse the letters in an array
    if (isReverse) {
        letters.reverse();
    }

//Loop through an array letters
    letters.forEach((letter, i) => {

//Created span element to position and style each letter individually
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.position = "absolute";
        span.style.color = color;
        span.style.fontFamily = font;
        span.style.fontSize = size + "px";

//Display characters of surname to be positioned randomly if Random radio button is checked
//Style the surname characters to be placed x-coodinate between 0 - 300 pixels from left edge
//and y-coordinate between 0 - 100 pixels from top edge
        if (isRandom) {
            span.style.left = Math.random() * 300 + "px";
            span.style.top = Math.random() * 100 + "px";
        } 

//Calculate each letter's position by spacing them diagonally at 15-pixel intervals starting
//from (15,15)
        else {
            span.style.left = (i + 1) * 15 + "px";
            span.style.top = (i + 1) * 15 + "px";
        }

        message.appendChild(span); //Append to message box


        
    });
};
//let message_ = document.getElementById("message-box");

// get the slider
let boxSlider = document.getElementById("box-size");

// run the input whenever the slider moves
boxSlider.addEventListener("input", function () {
    let value = boxSlider.value;

//Try to re-adjust the message box if letters extend outside the display box
    message.style.width = value + "px";
    message.style.height = value / 2 + "px";
});

//Running the input 
document.getElementById("color-picker").addEventListener("input", function () {
    let letters = document.querySelectorAll("#message-box span");

    letters.forEach(letter => {
        letter.style.color = this.value;
    });
});

document.getElementById("letter-size").addEventListener("input", function () {
    let letters = document.querySelectorAll("#message-box span");

    letters.forEach(letter => {
        letter.style.fontSize = this.value + "px";
    });
});

document.getElementById("letter-spacing").addEventListener("input", function () {
    let letters = document.querySelectorAll("#message-box span");

    let spacing = Number(this.value);

    letters.forEach((letter, index) => {
        letter.style.position = "absolute";
        letter.style.left = (index * spacing) + "px";
    });
});