var canvas = document.getElementById("canvas")
console.log(canvas);
// console.dir(canvas);
var context = canvas.getContext('2d');

// set up base ooptions for pictionary board

var color = "#000";
var thickness = 10;
var colorPicker = document.getElementById("color-picker");
var thicknessPicker = document.getElementById("thickness");
var mouseDown = false;
var mousePosition = {};
var lastMousePosition = null;
var clearCanvas = document.getElementById('clear');

clearCanvas.addEventListener('click', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);
});

// console.dir(colorPicker);
colorPicker.addEventListener('change', function(event){
	// console.log(event);
	color = colorPicker.value
	// color = event.target.value - does the same as above
	console.log(color);
});
thicknessPicker.addEventListener('change', function(event){
	// console.log(event);
	thickness = thicknessPicker.value
	// thickness = event.target.value - does the same as above
	console.log(thickness);
});

canvas.addEventListener('mousedown', function(event){
	mouseDown = true;
	lastMousePosition = null;
});

canvas.addEventListener('mouseup', function(event){
	mouseDown = false;
});

canvas.addEventListener('mousemove', function(event){

	if (mouseDown){
		// console.log("user has pressed the mouse down and is moving")

		if(lastMousePosition == null){
			lastMousePosition = {
				x: event.offsetX,
				y: event.offsetY,
			}
		}


		mousePosition.x = event.offsetX;
		mousePosition.y = event.offsetY;
		console.log(mousePosition.x)

		context.strokeStyle = color;
		context.lineJoin = 'round';
		context.lineWidth = thickness;
		context.beginPath();
		context.moveTo(lastMousePosition.x, lastMousePosition.y)
		context.lineTo(mousePosition.x, mousePosition.y);
		context.stroke();
		context.closePath();

		lastMousePosition = {
			x: mousePosition.x,
			y: mousePosition.y,
		}
		
	}

		// document.getElementById('clear').addEventListener('click', function() {
  //       context.clearRect(0, 0, canvas.width, canvas.height);
  //     }, false);



});