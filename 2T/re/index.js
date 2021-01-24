const clock = document.querySelector(".js-clock")

function operateClock(){
    const time = new Date,
        hr = time.getHours(),
        min = time.getMinutes();
    
    clock.innerHTML = `${hr < 10 ? '0'+hr:hr}:${min < 10 ? '0'+min:min}`
}

setInterval(operateClock, 1000);

operateClock();