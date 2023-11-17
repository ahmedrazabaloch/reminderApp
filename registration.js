// Email Validition
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function singUp() {
  // >>>> Signup Page <<<<
  var signUpUserName = document.getElementById("signUpUserName").value;
  var signUpEmail = document.getElementById("signUpEmail").value;
  var signUpPassword = document.getElementById("signUpPassword").value;
  if (signUpUserName.trim() === "") {
    alert("Name can't b empty");
  } else if (!emailRegex.test(signUpEmail)) {
    alert("please enter a valid email address");
  } else if (!passwordRegex.test(signUpPassword)) {
    alert(
      "Password must be 8 character at least one small one capital alpha one Number "
    );
  } else {
    // Getting data from local storage
    var storData = JSON.parse(localStorage.getItem("storeDetails")) || [];
    // Local storage object
    var userDetails = {
      name: signUpUserName,
      email: signUpEmail,
      passowrd: signUpPassword,
    };
    //Pusing object to local storage
    storData.push(userDetails);
    localStorage.setItem("storeDetails", JSON.stringify(storData));
    setTimeout(() => {
      document.location.href = "main.html";
    }, 3000);
  }
}

// >>>> Login Page <<<<

// Getting data from local storage
var storData = JSON.parse(localStorage.getItem("storeDetails")) || [];
for (var i = 0; i < storData.length; i++) {
  details = storData[i];
}
function login() {
  let loginEmail = document.getElementById("email").value;
  let loginPass = document.getElementById("password").value;
  if (loginEmail !== details.email) {
    alert("email id not registered");
  } else if (loginPass !== details.passowrd) {
    alert("Wrong Password");
  } else {
    setTimeout(() => {
      document.location.href = "main.html";
    }, 3000);
  }
}
