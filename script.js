let sec = document.getElementById('seconds');
let min = document.getElementById('minutes');
let hour = document.getElementById('hours');

function setTime(){
    const date = new Date();
    // console.log(date)

    let seconds = date.getSeconds();
    let secDeg = ((seconds / 60) * 350) + 90;
    sec.style.transform = `rotate(${secDeg}deg)`;

    let minutes = date.getMinutes();
    let minDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    min.style.transform = `rotate(${minDeg}deg)`;

    let hr = date.getDate();
    let hrDeg = ((hr / 12) * 360) + ((minutes / 60) * 30) + 90;
    hour.style.transform = `rotate(${hrDeg}deg)`
}

setInterval(setTime, 1000);
setTime();