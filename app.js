// Main page timer

var date = document.getElementById("date");
var clockDate = moment().format("ll");
date.innerHTML = clockDate;

var time = document.getElementById("time");
setInterval(() => {
  var currentTime = moment().format("LTS");
  time.innerHTML = currentTime;
}, 1000);
