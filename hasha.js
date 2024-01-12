// URL of the YouTube video
var videoUrl = "https://youtu.be/hv-pW33o0lA?si=cjnB0imHoZEminSq";

// Number of times to loop
var loopCount = 5000;

// Loop to open the window 5000 times
for (var i = 0; i < loopCount; i++) {
    // Open a new window with the YouTube video URL
    window.open(videoUrl);

    // Pause for a moment before opening the next window (adjust as needed)
    // This helps to avoid issues with pop-up blockers and excessive requests
    setTimeout(function() {}, 100);
}
