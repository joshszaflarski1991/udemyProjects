var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
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
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
				reset();
		});
	}
}

function setupSquares() {
		for (var i = 0; i < squares.length; i++) {
		//add click listeners
			squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				changeColors(clickedColor);
				messageDisplay.textContent = "correct";
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
			}
		});
	}
}

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make arr
	var arr = [];
	//add num random colors to arr
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return arr
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b + ")";
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	h1.style.backgroundColor = "steelBlue";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

for (var i = 0; i < squares.length; i++) {
	//add click listeners
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			changeColors(clickedColor);
			messageDisplay.textContent = "correct";
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "try again";
		}
	});
}

resetButton.addEventListener("click", function(){
	reset();
});