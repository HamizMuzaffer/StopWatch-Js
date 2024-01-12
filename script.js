let timeDisplay = document.querySelector(".timeDisplay")
let startBtn = document.querySelector("#startBtn")
let pauseBtn = document.querySelector("#pauseBtn")
let resetBtn = document.querySelector("#resetBtn")

let startTime = 0;
let elapseTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let mins = 0;
let secs = 0;
let milsecs = 0;

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapseTime;
        intervalId = setInterval(updatedTime, 1000)
    }
});

pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapseTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapseTime = 0;
    currentTime = 0;
    hours = 0;
    mins = 0;
    secs = 0;
    milsecs = 0;
    timeDisplay.textContent = "00:00:00:00";
});






function updatedTime() {
    elapseTime = Date.now() - startTime;
    secs = Math.floor((elapseTime / 1000) % 60);
    mins = Math.floor((elapseTime / (1000 * 60)) % 60);
    hours = Math.floor((elapseTime / (1000 * 60 * 60)) % 60);
    milsecs = (elapseTime % 60);
    milsecs = pad(milsecs);
    secs = pad(secs);
    mins = pad(mins);
    hours = pad(hours);
    timeDisplay.textContent = `${hours}:${mins}:${secs}:${milsecs}`;
    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}