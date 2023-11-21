// Email Validition
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function signup() {
  // >>>> Signup Page <<<<
  var signUpUserName = document.getElementById("signUpUserName").value;
  var signUpEmail = document.getElementById("signUpEmail").value;
  var signUpPassword = document.getElementById("signUpPassword").value;
  if (signUpUserName.trim() === "") {
    Swal.fire({
      title: "Name field can't be empty",
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
  } else if (!emailRegex.test(signUpEmail)) {
    Swal.fire({
      title: "Please enter a valid email address",
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
  } else if (!passwordRegex.test(signUpPassword)) {
    Swal.fire({
      title:
        "Password must be at least 8 characters long,<br/>with at least 1 lowercase letter,<br/>1 uppercase letter, and 1 number.",
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
    // Getting data from local storage
    var storData = JSON.parse(localStorage.getItem("storeDetails")) || [];
    // Local storage object
    var userDetails = {
      name: signUpUserName,
      email: signUpEmail,
      password: signUpPassword,
    };
    //Pusing object to local storage
    storData.push(userDetails);
    localStorage.setItem("storeDetails", JSON.stringify(storData));
    for (var i = 0; i < storData.length; i++) {
      details = storData[i];
    }
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: `Registerd successfully
      Welcom ${details.name}
      `,
    });
    setTimeout(() => {
      document.location.href = "main.html";
    }, 2000);
  }
}

// >>>> Login Page <<<<
function login() {
  // Getting data from local storage
  let storData = JSON.parse(localStorage.getItem("storeDetails")) || [];
  let details;

  for (var i = 0; i < storData.length; i++) {
    details = storData[i];

    var loginEmail = document.getElementById("email").value;
    var loginPass = document.getElementById("password").value;

    if (loginEmail === details.email) {
      break;
    }
  }
  if (!details) {
    Swal.fire({
      title: "Please register your email address",
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
    if (loginEmail !== details.email) {
      Swal.fire({
        title: "Please enter a valid email",
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
    } else if (loginPass !== details.password) {
      Swal.fire({
        title: "Wrong Password",
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
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      setTimeout(() => {
        document.location.href = "main.html";
      }, 2000);
    }
  }
}
