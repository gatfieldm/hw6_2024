
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// initialize video element, turn off autoplay, turn off looping
	video = document.getElementById("player1");
	var volume = document.getElementById("volume");
	var slider = document.getElementById("slider");
	var mute = document.getElementById("mute");
	var play = document.getElementById("play");
	var pause = document.getElementById("pause");
	var slower = document.getElementById("slower");
	var faster = document.getElementById("faster");
	var skip = document.getElementById("skip");
	var vintage = document.getElementById("vintage");
	var orig = document.getElementById("orig");

	video.autoplay = false;
	video.loop = false;
});


var play = document.getElementById("play");
play.addEventListener("click", function() {
	video = document.getElementById("player1");
	video.play();
	// udpdate volume
	document.getElementById("volume").innerHTML = video.volume + "%";
});

var pause = document.getElementById("pause");
pause.addEventListener("click", function() {
	video = document.getElementById("player1");
	video.pause();
});

var slower = document.getElementById("slower");
slower.addEventListener("click", function() {
	video = document.getElementById("player1");
	video.playbackRate *= 0.90;
	console.log("The new video speed is " + video.playbackRate);
});

var faster = document.getElementById("faster");
faster.addEventListener("click", function() {
	video = document.getElementById("player1");
	video.playbackRate /= 0.90;
	console.log("The new video speed is " + video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
var skip = document.getElementById("skip");
skip.addEventListener("click", function() {
	video = document.getElementById("player1");
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
		video.play();
	}
	console.log("Current location of video is " + video.currentTime);
});
// Mute/unmute the video and update the text in the button.
var mute = document.getElementById("mute");
mute.addEventListener("click", function() {
	video = document.getElementById("player1");
	if (video.muted == true) {
		video.muted = false;
		mute.innerHTML = "Mute";
	} else {
		video.muted = true;
		mute.innerHTML = "Unmute";
	}
});

//Change the volume based on the slider and update the volume information.
var slider = document.getElementById("slider");
slider.addEventListener("change", function() {
	video = document.getElementById("player1");
	console.log(this.value);
	video.volume = this.value;
	document.getElementById("volume").innerHTML = video.volume + "%";
});

// Utilize the existing oldSchool class on the video element
var vintage = document.getElementById("vintage");
vintage.addEventListener("click", function() {
	video = document.getElementById("player1");
	video.classList.add("oldSchool");
});

// Remove the oldSchool class from the video.
var orig = document.getElementById("orig");
orig.addEventListener("click", function() {
	video = document.getElementById("player1");
	video.classList.remove("oldSchool");
});