
// Main page timer

var date = document.getElementById("date");
var clockDate = moment().format("LL");
date.innerHTML = clockDate;

var time = document.getElementById("time");
setInterval(() => {
  var currentTime = moment().format("LTS");
  time.innerHTML = currentTime;
}, 1000);

var settime = "6:50:30 a";
var timing = moment().format(settime);
console.log("varible check ==>", timing);

var fajar = document.getElementById("fajar");
fajar.innerHTML = timing;
