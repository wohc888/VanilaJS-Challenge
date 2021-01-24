const time = document.querySelector("h2");

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900"),
    today = new Date(),
    now = today.getTime(),
    days = xmasDay.getDate(),
    hours = xmasDay.getHours(),
    minutes = xmasDay.getMinutes(),
    seconds = xmasDay.getSeconds();

    // time.innerText(`${days}, ${hours}, ${minutes}, ${seconds}`)
    time.innerHTML(`${now}`)
}

function init() {
  getTime();
}

init();
