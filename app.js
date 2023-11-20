// PWA Service Worker
//for push notification
// Check if the browser supports service workers
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceworker.js")
    .then(function (registration) {
      console.log("Service Worker registered with scope:", registration.scope);
      return registration.pushManager
        .getSubscription()
        .then(function (subscription) {
          if (subscription) {
            console.log("User is already subscribed:", subscription);
          } else {
            return registration.pushManager
              .subscribe({ userVisibleOnly: true })
              .then(function (newSubscription) {
                console.log("Subscribed:", newSubscription);
              });
          }
        });
    })
    .catch(function (error) {
      console.error("Service Worker registration failed:", error);
    });
}

// Request notification permission
if ("Notification" in window) {
  Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.error("Notification permission denied.");
    }
  });
}
// Namaz & Task Section Show Hide
var namaz = document.querySelector(".namaz");
var hideSection = document.querySelector(".sectionBox");
var userSelect = document.querySelector(".hide");
var hidehoja = document.querySelector("#hidehoja");
setTimeout(() => {
  namaz.style.display = "block";
}, 1500);

function newTask() {
  namaz.style.display = "none";
  hideSection.style.display = "block";
  userSelect.style.display = "block";
  hideinnher.style.display = "flex";
}
function namazR() {
  hideinnher.style.display = "none";
  console.log(hideSection);
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
let hideinnher = document.getElementById("hideinnher");
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
      hideinnher.innerHTML += `
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
    if (formattedTime.slice(0,) == sliceTime.slice(0,)) {
      // Swal.fire({
      //   title: `Reminder`,
      //   showClass: {
      //     popup: `
      //         animate__animated
      //         animate__fadeInUp
      //         animate__faster
      //       `,
      //   },
      //   hideClass: {
      //     popup: `
      //         animate__animated
      //         animate__fadeOutDown
      //         animate__faster
      //       `,
      //   },
      // });
      showNotification();
      // clearInterval(clearInter);
    }
  }, 1000);
}
// Window Notification
function showNotification() {
  // Check if the Notification API is available
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "permitted") {
    // If permission is already granted, show the notification
    new Notification("Reminder", {
      body: "ALERT!!! It's time for your reminder!",
    });
  } else if (Notification.permission !== "denied") {
    // Request permission from the user

    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        // If the user allows, show the notification
        new Notification("Reminder", {
          body: "granted It's time for your reminder!",
        });
        ringtone.play();
        ringtone.loop = true;
      }
    });
  }
}
