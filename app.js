// <!-- Powered by Ahmedraza https://ahmedrazabaloch.netlify.app -->

// Window Notification

// Namaz & Task Section Show Hide
const namaz = document.querySelector(".namaz"),
  hideSection = document.querySelector(".sectionBox"),
  userSelect = document.querySelector(".hide"),
  hidehoja = document.querySelector("#hidehoja");
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
// >>>>>> Main Page Code <<<<<<
// Set date on top of the display
let date = document.getElementById("date"),
  clockDate = moment().format("ll");
date.innerHTML = clockDate;

// Set Timer on top of the display
const timerClock = document.getElementById("time");
setInterval(() => {
  let currentTime = moment().format("LTS");
  timerClock.innerHTML = currentTime;
}, 1000);
// Namaz Timing
const fajar = "5:30am",
  zuhar = "12:30pm",
  asar = "3:45pm",
  magrib = "6:15pm",
  esha = "8:30pm";

let timeClock, dayNight;

setInterval(function () {
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  let currentMinutes = currentDate.getMinutes();

  // Set am/pm
  dayNight = currentHours > 12 ? "pm" : "am";

  // Set minutes
  currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;

  // Create formatted time string
  // timeClock = `${currentHours}:${currentMinutes}${dayNight}`;
  timeClock = moment(`${currentHours}:${currentMinutes}`, "HH:mm").format(
    "h:mm A"
  );

  // Check if the current time matches any prayer time
  if (fajar == timeClock) {
    console.log("Namaz e Fajar");
  }
  if (zuhar == timeClock) {
    console.log("Namaz e Zuhar");
  }
  if (asar == timeClock) {
    console.log("Namaz e Asar");
  }
  if (magrib == timeClock) {
    console.log("Namaz e Magrib");
  }
  if (esha == timeClock) {
    console.log("Namaz e Esha");
  }
}, 1000);

// Getting Data from User
let userTitles = document.getElementById("userTitle"),
  userDiscerption = document.getElementById("userDis"),
  inputTime = document.getElementById("setTime"),
  inputDate = document.getElementById("setDate"),
  formattedTime;
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

  // setInterval(() => {
  //   const currentDate = new Date();
  //   const currentHours = currentDate.getHours();
  //   let currentMinutes = currentDate.getMinutes();
  //   // Create formatted time string
  //   timeClock = moment(`${currentHours}:${currentMinutes}`, "HH:mm").format(
  //     "h:mm"
  //   );
  //   if (formattedTime.slice(0, 4) == timeClock) {
  //     console.log("reminder");
  //   }
  // }, 1000);
  flag = true;
  setInterval(function () {
    if (flag) {
      const currentDate = new Date();
      const currentHours = currentDate.getHours();
      let currentMinutes = currentDate.getMinutes();
      // Create formatted time string
      timeClock = moment(`${currentHours}:${currentMinutes}`, "HH:mm").format(
        "h:mm"
      );
      console.log("formattedTime==>", formattedTime.slice(0, 4));
      console.log("timeClock==>", timeClock);
      if (formattedTime.slice(0, 4) == timeClock) {
        if (!("Notification" in window)) {
          alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
          const notification = new Notification("Reminder task time'up");
        } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              const notification = new Notification("Reminder task time'up");
            }
          });
        }
        flag = false;
      }
    }
  }, 1000);
}
