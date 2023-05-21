// Variables to store minutes and seconds
var minutes = 0;
var seconds = 0;

// References to HTML elements for displaying minutes and seconds
var appendMinutes = document.getElementById("minutes");
var appendSeconds = document.getElementById("seconds");

// References to HTML buttons for start, stop, and reset
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");

// Variable to store the interval ID for the timer
var interval;

// Function that runs when the Start button is clicked
function startTimer() {
  // Increment seconds
  seconds++;

  // Update the display of seconds
  if (seconds < 10) {
    appendSeconds.innerHTML = "0" + seconds;
  } else {
    appendSeconds.innerHTML = seconds;
  }

  // Check if seconds reach 60, increment minutes, and reset seconds
  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + seconds;
  }

  // Update the display of minutes
  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }
}

// Event listener for the Start button
buttonStart.onclick = function () {
  // Clear any existing interval to ensure only one is running
  if (interval) {
    clearInterval(interval);
  }

  // Start a new interval to call the startTimer function every 1 second (1000 milliseconds)
  interval = setInterval(startTimer, 1000);
};

// Event listener for the Stop button
buttonStop.onclick = function () {
  // Clear the interval to stop the timer
  clearInterval(interval);
};

// Event listener for the Reset button
buttonReset.onclick = function () {
  // Clear the interval
  clearInterval(interval);

  // Reset minutes and seconds to 0
  minutes = 0;
  seconds = 0;

  // Update the display of minutes and seconds
  appendMinutes.innerHTML = "0" + minutes;
  appendSeconds.innerHTML = "0" + seconds;
};
