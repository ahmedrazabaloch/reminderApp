// Namaz Reminder
var namaz = document.querySelector(".namaz");
var hideSection = document.querySelector(".hidden");
var userSelect = document.querySelector(".hide");

function newTask() {
  namaz.style.display = "none";
  hideSection.style.display = "block";
  userSelect.style.display = "block";
  console.log("click on task");
}
function namazR() {
  namaz.style.display = "block";
  hideSection.style.display = "none";
  userSelect.style.display = "none";
  console.log("click on namaz");
}
// Main page timer
var date = document.getElementById("date");
var clockDate = moment().format("ll");
date.innerHTML = clockDate;
var time = document.getElementById("time");
setInterval(() => {
  var currentTime = moment().format("LTS");
  time.innerHTML = currentTime;
}, 1000);

let fajar = document.getElementById("fajar").innerText.slice(0),
  zuhar = document.getElementById("zuhar").innerText.slice(0),
  asar = document.getElementById("asar").innerText.slice(0),
  magrib = document.getElementById("magrib").innerText.slice(0),
  esha = document.getElementById("esha").innerText.slice(0);

let interval = setInterval(() => {
  let sliceTime;
  let timeClock = [moment().format("LTS")];
  for (var i = 0; i < timeClock.length; i++) {
    sliceTime = timeClock[i];
  }
  var checkinnTime = sliceTime.slice(0, 4);
  if (fajar === checkinnTime) {
    alert("Namaz e Fajar");
  }
  if (zuhar === checkinnTime) {
    alert("Namaz e Fajar");
  }
  if (asar === checkinnTime) {
    alert("Namaz e Fajar");
  }
  if (magrib === checkinnTime) {
    alert("Namaz e Fajar");
  }
  if (esha === checkinnTime) {
    alert("Namaz e Fajar");
  }
}, 1000);

// Getting Data from User
let userTitles = document.getElementById("userTitle"); // Title
let userDiscerption = document.getElementById("userDis"); // Discerptions
let inputTime = document.getElementById("setTime"); // Time
let inputDate = document.getElementById("setDate"); // Date
// Set & Show Data
let section = document.getElementById("section");
function saveData() {
  if (userTitles.value.trim() === "") {
    alert("Title Can't be empty");
  } else {
    if (userDiscerption.value.trim() === "") {
      alert("Discerption Can't be empty");
    } else {
      section.innerHTML += `
  <div class="sectionBox animate__animated animate__fadeInLeft">
    <div class="secDisply">
      <div class="alarm">
        <p>Time: <span id="alramSet">${inputTime.value || "03:00"}</span></p>
        <span>||</span>
        <p>Date: <span id="dateSet">${inputDate.value || "Every-Day"}</span></p>
        </div>
        <div class="reminderValue">
         <p id="titles">${userTitles.value}</p>
         <p id="discerption">${userDiscerption.value}</p>
        </div>
      </div>
    </div>
  `;
      userTitles.value = "";
      userDiscerption.value = "";
    }
  }
}
