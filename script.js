let startbtn = document.querySelector(".start"); 
let stopbtn = document.querySelector(".stop"); 
let resetbtn = document.querySelector(".reset"); 
let watch = document.querySelector(".watch");

let time = 0;
let hours = 0;
let mins = 0;
let sec = 0;
let flag = false;

startbtn.addEventListener('click', () => {
    flag = true;
    start();
})

stopbtn.addEventListener('click', () => {
    flag = false;
    start();
})

resetbtn.addEventListener('click', () => {
    flag = false;
    time = 0;
    hours = 0;
    mins = 0;
    sec = 0;
    watch.innerHTML = "00::00::00::00";
})

function start() {
    if(flag) {
        time++;

        if(time == 100) {
            sec++;
            time = 0;
        }

        if(sec == 60) {
            mins++;
            sec = 0;
        }

        if(mins == 60) {
            hours++;
            mins = 0;
        }

        watch.innerHTML = `${hours}::${mins}::${sec}::${time}`;
    }
    setTimeout(start, 10);
}