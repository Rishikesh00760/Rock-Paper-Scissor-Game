const computerPointsOutput = document.getElementById("computer-points-output");
const playerPointsOutput = document.getElementById("player-points-output");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const cptr_out_img = document.getElementById("cptr-out-img");
const plyr_out_img = document.getElementById("plyr-out-img");

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
});