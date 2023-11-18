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

// let serialNo = 0;

function saveData() {
  // serialNo++;
  section.innerHTML += `
  <div class="sectionBox">
    <div class="secDisply">
      <div class="alarm">
        <p>Time: <span id="alramSet">${inputTime.value}</span></p>
        <span>||</span>
        <p>Date: <span id="dateSet">${inputDate.value}</span></p>
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
