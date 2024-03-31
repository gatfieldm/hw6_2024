var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// initialize video element, turn off autoplay, turn off looping
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
});


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
// Mute/unmute the video and update the text in the button.
var mute = document.getElementById("mute");
mute.addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		console.log("Unmuted");
		mute.innerHTML = "Mute";
	} else {
		video.muted = true;
		console.log("Muted");
		mute.innerHTML = "Unmute";
	}
});

//Change the volume based on the slider and update the volume information.
var slider = document.getElementById("slider");
slider.addEventListener("change", function() {
	console.log(this.value);
	video.volume = this.value / 100;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// Utilize the existing oldSchool class on the video element
var vintage = document.getElementById("vintage");
vintage.addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

// Remove the oldSchool class from the video.
var orig = document.getElementById("orig");
orig.addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});