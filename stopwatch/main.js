const time =
{
    min: 0,
    sec: 0,
    mil: 0,
}

let startButton = document.querySelector(".startButton")
let resetButton = document.querySelector(".resetButton")
let stopButton = document.querySelector(".stopButton")
let interval;
function ubtadeTime() {
    time.sec++;
    let selector = document.querySelector('.time');
    if (time.sec == 60) {
        time.sec = 0;
        time.min++;
    }
    selector.innerHTML = time.min + ":" + time.sec;
    if (time.sec < 10) {
        selector.innerHTML = time.min + ':0' + time.sec;
    }
}
function resetTime() {
    clearInterval;

}


function startTime() {
    interval = setInterval(ubtadeTime, 1000);
}

function stopTime() {
    clearInterval(interval);
}

startButton.addEventListener("click", startTime)
resetButton.addEventListener("click", resetTime)



