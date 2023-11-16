// Signup Page     var emailRegx = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
// let signUpSubmit = document.getElementById("signUpSubmit");
var signUpUserName = document.getElementById("signUpUserName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");

function singUp() {
  // Getting data from local storage
  var storData = JSON.parse(localStorage.getItem("storeDetails")) || [];
  // Local storage object
  var userDetails = {
    name: signUpUserName.value,
    email: signUpEmail.value,
    passowrd: signUpPassword.value,
  };
  //Pusing object to local storage
  storData.push(userDetails);
  localStorage.setItem("storeDetails", JSON.stringify(storData));
}
// Main page timer
