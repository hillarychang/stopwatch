const button = document.getElementById("start-toggle");
const label = document.getElementById("display");
let minutes = 0;
let seconds = 0;
let started = false;

let token;

button.addEventListener("click", function () {
  if (started) {
    setInterval(function () {
      seconds = seconds + 1;
      if (seconds == 60) {
        minutes = minutes + 1;
        seconds = 0;
      }
      label.textContent = minutes + ":" + seconds.toString().padStart(2, "0");
    }, 1000);
  } else {
    clearInterval(token);
  }
});