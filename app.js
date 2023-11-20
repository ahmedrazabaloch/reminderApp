// Namaz & Task Section Show Hide
var namaz = document.querySelector(".namaz");
var hideSection = document.querySelector(".sectionBox");
var userSelect = document.querySelector(".hide");
setTimeout(() => {
  namaz.style.display = "block";
}, 1500);
function newTask() {
  console.log("Inside newTask function");
  namaz.style.display = "none";
  hideSection.style.display = "block";
  userSelect.style.display = "block";
}
function namazR() {
  console.log("Inside namazR function");
  namaz.style.display = "block";
  hideSection.style.display = "none";
  userSelect.style.display = "none";
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
// Namaz Time Notification
let fajar = document.getElementById("fajar").innerText.slice(0),
  zuhar = document.getElementById("zuhar").innerText.slice(0),
  asar = document.getElementById("asar").innerText.slice(0),
  magrib = document.getElementById("magrib").innerText.slice(0),
  esha = document.getElementById("esha").innerText.slice(0);
// checking time if they match
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
let formattedTime;
// Set & Show Data
let section = document.getElementById("section");
let flag = false;
function saveData() {
  // Validation
  if (userTitles.value.trim() === "") {
    Swal.fire({
      title: "Title Can't be empty",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  } else {
    if (userDiscerption.value.trim() === "") {
      Swal.fire({
        title: "Discerption Can't be empty",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    } else {
      formattedTime = moment(inputTime.value, "HH:mm").format("h:mm A");
      //Set Reminder
      section.innerHTML += `
  <div class="sectionBox animate__animated animate__fadeInLeft">
    <div class="secDisply">
      <div class="alarm">
        <p>Time: <span id="alramSet">${formattedTime || "03:00"}</span></p>
        <span> | </span>
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
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Alarm Set",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  // Matching Time the show alert
  let clearInter = setInterval(() => {
    let sliceTime;
    let timeClock = [moment().format("LTS")];
    for (var i = 0; i < timeClock.length; i++) {
      sliceTime = timeClock[i];
    }
    if (formattedTime.slice(0, 5) == sliceTime.slice(0, 5)) {
      Swal.fire({
        title: `Reminder`,
        showClass: {
          popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
        },
        hideClass: {
          popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
        },
      });
      clearInterval(clearInter);
    }
  }, 1000);
}
