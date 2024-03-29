var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// initialize video element, turn off autoplay, turn off looping
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.getElementById("player1");
	video.play();
	
	// todo: update volume
	
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video = document.getElementById("player1");
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video = document.getElementById("player1");
	video.playbackRate *= 0.9;
	console.log("Speed is now: " + video.playbackRate);
}
);