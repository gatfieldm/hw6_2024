var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// initialize video element, turn off autoplay, turn off looping
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// 	video.play();
	
// 	// todo: update volume
	
// });

// // pause button
// document.querySelector("#pause").addEventListener("click", function() {
// 	console.log("Pause Video");
// 	video = document.getElementById("player1");
// 	video.pause();
// });

// // Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
// document.querySelector("#slower").addEventListener("click", function() {
// 	console.log("Slow Down Video");
// 	video = document.getElementById("player1");
// 	video.playbackRate *= 0.9;
// 	console.log("Speed is now: " + video.playbackRate);
// }
// );

var play = document.getElementById("play");
play.addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// udpdate volume
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

var pause = document.getElementById("pause");
pause.addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

var slower = document.getElementById("slower");
slower.addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.90;
	console.log("The new video speed is " + video.playbackRate);
});

var faster = document.getElementById("faster");
faster.addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.90;
	console.log("The new video speed is " + video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
var skip = document.getElementById("skip");
skip.addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 15 < video.duration) {
		video.currentTime += 15;
	} else {
		video.currentTime = 0;
		video.play();
	}
	console.log("Current location of video is " + video.currentTime);
});
