import AOS from "aos";
import "aos/dist/aos.css";
import Swal from 'sweetalert2'
// import "./node_modules/waypoints/lib/noframework.waypoints";

AOS.init();

const navbar = document.querySelector("#myNavbar");
const about = document.querySelector("#about");
// const project = document.querySelector("#project");
const heroSection = document.querySelector("#heroSection");

// var waypoints = new Waypoint({
//     element: about,
//     handler: function() {
//         navbar.classList.replace("bg-transparent","bg-secondary");
//       }
//   })

const navBtn = document.querySelector("#navBtn");
const navbarSupportedContent = document.querySelector("#navbarSupportedContent")

const handleNav = () => {
  navbarSupportedContent.classList.toggle("collapse");
}

navBtn.addEventListener("click",handleNav);



const handleScroll = () => {
  const position = (window.innerHeight / 5) * 4;
  const aboutTop = about.getBoundingClientRect().top;
  if (aboutTop < position) {
    navbar.classList.add("bg-secondary");
  } else if (aboutTop > position) {
    navbar.classList.remove("bg-secondary");
  }
};

window.addEventListener("scroll", handleScroll);

const registerForm = document.querySelector("#registerForm");
const registerBtn = document.querySelector("#registerBtn");
const createLoginForm = document.querySelector("#createLoginForm");
const createSignupForm = document.querySelector("#createSignupForm");
const changeToSign = document.querySelector("#changeToSign");
const changeToLog = document.querySelector("#changeToLog");
const loginForm = document.querySelector("#loginForm");
const signUpForm = document.querySelector("#signUpForm");
const userId = document.querySelector("#userId");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

const handleRegisterForm = () => {
  registerForm.classList.toggle("opa");
  navbarSupportedContent.classList.toggle("collapse");
};

const handleChangeToLog = () => {
  loginForm.classList.remove("btt");
  signUpForm.classList.remove("btt");
};

const handleChangeToSign = () => {
  loginForm.classList.add("btt");
  signUpForm.classList.add("btt");
};

const handlerSignUpForm = (e) => {
  e.preventDefault();
  const formData = new FormData(createSignupForm);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = JSON.stringify({
    name: formData.get("signName"),
    email: formData.get("signEmail"),
    password: formData.get("signPassword"),
  });

  const options = {
    method: "POST",
    headers,
    body,
    redirect: "follow",
  };

  const test = async () => {
    const res = await fetch("http://localhost:5173/api/users", options);
    const json = await res.json();

    userId.innerText = json.name;
  };
  test();
  createSignupForm.reset();
  registerForm.classList.remove("opa");
};

const handleCreateLoginForm = (event) => {
  event.preventDefault();
  const userMail = loginEmail.value;
  const userPassword = loginPassword.value;



  const userData = fetch("http://localhost:5173/api/users")
    .then((response) => response.json())
    .then((json) => {
      json.forEach((el) => finale(el));
    });

    const finale = (data) => {
      if(data.email === userMail && data.password === userPassword){
        registerForm.classList.remove("opa");
        userId.innerText = data.name;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        registerForm.classList.add("animate__shakeX");
        loginEmail.value = null;
        loginPassword.value = null;
        registerForm.addEventListener("animationend",() => {
          registerForm.classList.remove("animate__shakeX");
          console.log("Hello");
        })
      }
    }
};

createLoginForm.addEventListener("submit", handleCreateLoginForm);
signUpForm.addEventListener("submit", handlerSignUpForm);
registerBtn.addEventListener("click", handleRegisterForm);
changeToLog.addEventListener("click", handleChangeToLog);
changeToSign.addEventListener("click", handleChangeToSign);
