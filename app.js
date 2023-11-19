// Namaz Reminder
var namaz = document.querySelector(".namaz");
var hideSection = document.querySelector(".sectionBox");

function newTask() {
  namaz.style.display = "none";
  hideSection.style.display = "block";
  console.log("click on task");
}
function namazR() {
  namaz.style.display = "block";
  hideSection.style.display = "none";
  console.log("click on namaz");
}
// let namazR = document.getElementById("namazR");
// namazR.addEventListener("click", () => {});
// let newTask = document.getElementById("newTask");
// newTask.addEventListener("click", () => {});

// Main page timer
var date = document.getElementById("date");
var clockDate = moment().format("ll");
date.innerHTML = clockDate;
var time = document.getElementById("time");
setInterval(() => {
  var currentTime = moment().format("LTS");
  time.innerHTML = currentTime;
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
  <div class="sectionBox">
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
