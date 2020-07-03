let date1 = new Date();
date1.getTime();
const userTime1 = document.getElementById("Days").value;
const userTime2 = document.getElementById("Hours").value;
const userTime3 = document.getElementById("Minutes").value;
const userTime4 = document.getElementById("Seconds").value; // sets constants based off user inputs
const time = document.querySelector(".time")
let daysTime = userTime1;
let hoursTime = userTime2;
let minutesTime = userTime3;
let secondsTime = userTime4;
let days = date1.getDay();
let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();






let date2 = new Date();


const btn = document.querySelector(".btn-Strt")
function difference(date1, date2) {
    date2.setDate(days + DaysTime);
    date2.setHours(hours + HoursTime);
    date2.setMinutes(minutes + MinutesTime);
    date2.setSeconds(seconds + SecondsTime);
    let d = date2 - date1;
    timeStart();
}

btn.addEventListener('click', difference);
function timeStart() {
    let totalTime = diff * 60;
    let i = totalTime;
    setInterval(timer, 1000);
}
function timer(diff) {
    let min = Math.floor(i / 60);
    let sec = (i % 60);
    if (sec < 10) {
        sec = "0"+sec
    }
    if (min < 10) {
        min = "0"+min
    }
    if (i > 0) {
        document.getElementById("countdownTimer").innerText = (min + ":" + sec);
    }
    else {
        document.getElementById("countdownTimer").innerText = "END"
        stop()
        return
    }
    i--;
}
function stop() {
    clearInterval(timeStart)
}