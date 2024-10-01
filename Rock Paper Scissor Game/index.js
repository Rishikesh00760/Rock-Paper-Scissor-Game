const computerPointsOutput = document.getElementById("computer-points-output");
const playerPointsOutput = document.getElementById("player-points-output");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const cptr_out_img = document.getElementById("cptr-out-img");
const plyr_out_img = document.getElementById("plyr-out-img");
const container = document.getElementById("container");
const promptScreen = document.getElementById("promptScreen");
const resetBtn = document.getElementById("reset");
const playBtn = document.getElementById("play");
const maxPointPrompt = document.getElementById("maxPoint");
const maxPointError = document.getElementById("maxPointError");
const winnerScreen = document.getElementById("winnerScreen");
const winorloose = document.getElementById("winorloose");
const cpoint = document.getElementById("cpoint");
const ppoint = document.getElementById("ppoint");
const cptr_out_img_winscreen = document.getElementById("cptr-out-img-winscreen");
const plyr_out_img_winscreen = document.getElementById("plyr-out-img-winscreen");
const winner = document.getElementById("winner");
const playAgain = document.getElementById("playAgain");

let maxPoint = null;

resetBtn.addEventListener("click", () => {
	maxPointPrompt.value = null;
	maxPointError.style.display = 'none';
});

playBtn.addEventListener("click", () => {
	maxPoint = maxPointPrompt.value;
	if(maxPoint>=10000000000){
		maxPoint = 10000000000;
		maxPointPrompt.value = 10000000000;
		promptScreen.style.display = "none";
		container.style.display = "block";
	}
	else if(maxPoint<1){
		maxPointError.style.display = 'inline-block';
	}
	else{
		promptScreen.style.display = "none";
		container.style.display = "block";
	}
});

function GenerateRandom() {
	
	var x = Math.round(Math.random() * 4);
	
	if (x == 1){
		cptr_out_img.src = "./img/rock.png";
	}
	else if (x == 2) {
		cptr_out_img.src = "./img/paper.png";
	}
	else {
		cptr_out_img.src = "./img/scissor.png";
	}
	
	return x;
	
}

var c = computerPointsOutput.innerHTML = 0;
var p = playerPointsOutput.innerHTML = 0;

rock.addEventListener('click', function () {
	var x = GenerateRandom();
	plyr_out_img.src = "./img/rock.png"
	
	if (x == 1) {
		computerPointsOutput.innerHTML = c;
		c = c;
		playerPointsOutput.innerHTML = p;
		p = p;
	}
	else if (x == 2) {
		computerPointsOutput.innerHTML = c + 1;
		c = c + 1;
		playerPointsOutput.innerHTML = p;
		p = p;
	}
	else {
		computerPointsOutput.innerHTML = c;
		c = c
		playerPointsOutput.innerHTML = p + 1;
		p = p + 1;
	}

	CheckForWinner();
});

paper.addEventListener('click', function () {
	var x = GenerateRandom();
	plyr_out_img.src = "./img/paper.png"
	
	if (x == 1) {
		computerPointsOutput.innerHTML = c;
		c = c;
		playerPointsOutput.innerHTML = p + 1;
		p = p + 1;
	}
	else if (x == 2) {
		computerPointsOutput.innerHTML = c;
		c = c;
		playerPointsOutput.innerHTML = p;
		p = p;
	}
	else {
		computerPointsOutput.innerHTML = c + 1;
		c = c + 1;
		playerPointsOutput.innerHTML = p;
		p = p;
	}

	CheckForWinner();
});

scissor.addEventListener('click', function () {
	var x = GenerateRandom();
	plyr_out_img.src = "./img/scissor.png"
	
	if (x == 1) {
		computerPointsOutput.innerHTML = c + 1;
		c = c + 1;
		playerPointsOutput.innerHTML = p;
		p = p;
	}
	else if (x == 2) {
		computerPointsOutput.innerHTML = c;
		c = c;
		playerPointsOutput.innerHTML = p + 1;
		p = p + 1;
	}
	else {
		computerPointsOutput.innerHTML = c;
		c = c
		playerPointsOutput.innerHTML = p;
		p = p;
	}

	CheckForWinner();
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function CheckForWinner(){

	await delay(1000);

	if(c==maxPoint){
		winnerScreen.style.display = 'block';
		container.style.display = 'none';

		winorloose.innerHTML = "You Lost";

		cpoint.innerHTML = c;
		ppoint.innerHTML = p;

		cptr_out_img_winscreen.src = cptr_out_img.src;
		plyr_out_img_winscreen.src = plyr_out_img.src;

		winner.innerHTML = "The winner is Computer...";
	}
	else if(p==maxPoint){
		winnerScreen.style.display = 'block';
		container.style.display = 'none';

		winorloose.innerHTML = "Victory";

		cpoint.innerHTML = c;
		ppoint.innerHTML = p;

		cptr_out_img_winscreen.src = cptr_out_img.src;
		plyr_out_img_winscreen.src = plyr_out_img.src;

		winner.innerHTML = "The winner is Player...";
	}

}

playAgain.addEventListener("click", () => {
	window.location.reload();
});