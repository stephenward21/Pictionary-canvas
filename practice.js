// console.log("Hello World!");

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
// context.moveTo(100,100);
// context.lineTo(200,200);
// context.lineTo(300,100);
// context.lineTo(100,200);
// context.lineTo(300,150);
// context.lineTo(100,100);
// context.strokeStyle = "#ff0000"
// // context.stroke();



context.beginPath()
context.fillStyle = "#ffff00";
context.arc(200, 200, 50, 0, 2*Math.PI);
// context.fill();
// context.stroke();

var x = 200;
var y = 200;
var radius = 50;
var xDirection = 1;
var yDirection = 1;
var red = 0;
var blue = 0;
var green = 0;

function drawBall(){
	context.fillStyle = "#"+red+blue+green;
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI);
	context.clearRect(0, 0, 500, 500);
	context.fill();
	if ((x > 500-radius) || (x < radius)){
		//we have reached the right side.
		xDirection = -xDirection;
	}
	if ((y >500-radius) || (y < radius)) {
		yDirection = -yDirection
	}
	var randomX = Math.random() * 4
	var randomY = Math.random() * 4
	x += randomX * xDirection;
	y += randomY * yDirection;
	red += 5;
	blue += 1;
	green += 1;

}

var ball = setInterval(drawBall, 25);

canvas.addEventListener("click", function(event){
	console.log(event.x, event.y);
	// if ((event.x, event.y) == (x, y)){
	// 	console.log("you hit the ball")
	// 	randomX = Math.random() * 6
	// 	randomY = Math.random() * 6
	// 	x += randomX * xDirection
	// 	y += randomY * yDirection
	}
});
	




