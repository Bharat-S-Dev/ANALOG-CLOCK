
// Get the HTML elements for hour, minute, and second hands of the clock
let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// Function to update the clock time
function displayTime(){

    // Create a new Date object to get current system time
    let date = new Date();

    // Getting current hour, minutes, and seconds from the Date object
    let hh = date.getHours();     // Current hour (0–23)
    let mm = date.getMinutes();   // Current minute (0–59)
    let ss = date.getSeconds();   // Current second (0–59)

    // Convert time values into rotation degrees for clock hands

    // Hour hand:
    // Each hour = 30 degrees (360° / 12 hours)
    // mm/2 is added so the hour hand moves smoothly between numbers
    let hRotation = 30 * hh + mm / 2;

    // Minute hand:
    // Each minute = 6 degrees (360° / 60 minutes)
    let mRotation = 6 * mm;

    // Second hand:
    // Each second = 6 degrees (360° / 60 seconds)
    let sRotation = 6 * ss;

    // Apply rotation to each clock hand using CSS transform
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

// Run the displayTime function every 1000 milliseconds (1 second)
// This updates the clock continuously
setInterval(displayTime, 1000);
