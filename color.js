var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");









init();

function init() {

   setupModeButtons();
   setupSquares();
   reset();

}



function setupModeButtons(){
     for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();

        });
    }
}


function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        // clickeles a kockakhoz
        squares[i].addEventListener("click", function () {

            // a kivalasztott szinnek azonos szine
            var clickedColor = this.style.backgroundColor;

            // if statement ha jot ha egyezzik a szined

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                reset.textContent = "Play again?"
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;

            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }



        });

    }
    
}








function reset(){
    
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    
}




resetButton.addEventListener("click", function(){
    
   reset();
   
    
})




function changeColor(color){
    // loop ahoz hogy minden kocka ugyan olyan szinu legyen
    for( var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

 
function pickColor(){
        // veletlen szeru szinek a great reszben
   var random =  Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // csinalni egy array
     var arr = []; 
    // hozzaadni egy veletlen szeru szint az arrayhez
    for(var i = 0; i < num; i++){
    // mivel a generaterandomcolor 6 hely van ezert mindig csak 6 fog pusholni veletlen szeruen
        arr.push(randomColor())
        
    }
    // vissza terni a array ertekehez
    return arr;
}


function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256)
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
    
}
