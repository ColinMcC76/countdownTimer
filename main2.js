let date1 = new Date(2020, 01, 20, 7, 25, 0, 0);
let date2 = new Date(2020, 01, 20, 7, 35, 0, 0);
const btn = document.querySelector(".btn-Strt")
function difference(date1, date2) {
    let a = date1.getMinutes();
    let b = date2.getMinutes()
    diff = (b - a)
    return diff
}
let d = difference(date1, date2);
let totalTime = d * 60;
let i = totalTime
btn.addEventListener('click', timeStart);
function timeStart() {
    setInterval(timer, 1000);
    if(i != totalTime) {
        stop()
    }
}
function timer() {
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