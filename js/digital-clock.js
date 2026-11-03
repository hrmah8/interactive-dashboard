
// Function to update the digital clock and date
function updateClock() {

    // Create a new Date object
    const currentDate = new Date();

    // Get hours, minutes, and seconds
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Determine AM or PM
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Convert to 12-hour format
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }

    // Add leading zeros
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Create formatted time
    const timeString =
        hours + ":" + minutes + ":" + seconds + " " + session;

    // Get the current date
    const dateString = currentDate.toLocaleDateString();

    // Update the HTML elements
    document.getElementById("clock-face").innerHTML = timeString;

    document.getElementById("calendar-date").innerHTML = dateString;
}

// Display the clock immediately
updateClock();

// Refresh every second
setInterval(updateClock, 1000);
