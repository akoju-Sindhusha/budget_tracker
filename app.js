
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCOaH5_zYpgEUQy_OIo92EICtVSOxCUMeA",
    authDomain: "sindhu-786a0.firebaseapp.com",
    projectId: "sindhu-786a0",
    storageBucket: "sindhu-786a0.firebasestorage.app",
    messagingSenderId: "472225045665",
    appId: "1:472225045665:web:42d4b9f0da1edf783024e0"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const form = document.getElementById("auth-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formTitle = document.getElementById("form-title");
const authButton = document.getElementById("auth-button");
const toggleMessage = document.getElementById("toggle-message");
const toggleLink = document.getElementById("toggle-link");

// Toggle between Login and Signup
let isSignup = true;

// Function to update the form when toggling between login and signup
function updateForm() {
  if (isSignup) {
    formTitle.textContent = "Signup";
    authButton.textContent = "Sign Up";
    toggleMessage.innerHTML = `Already have an account? <a href="#" id="toggle-link">Login</a>`;
  } else {
    formTitle.textContent = "Login";
    authButton.textContent = "Login";
    toggleMessage.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Signup</a>`;
  }

  // Attach event listener to the toggle link
  const toggleLink = document.getElementById("toggle-link");
  toggleLink.addEventListener("click", (e) => {
    e.preventDefault();
    isSignup = !isSignup; // Toggle between login and signup mode
    updateForm(); // Update form based on the new mode
  });
}

// Initialize the form state
updateForm();

// Handle Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  if (isSignup) {
    // Signup user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Signup successful!Please login");
        console.log("User:", userCredential.user);
        form.reset();
      })
      .catch((error) => alert("Error: " + error.message));
  } else {
    // Login user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful!");
        window.open("mainpage.html","_blank")
        console.log("User:", userCredential.user);
        form.reset();
      })
      .catch((error) => alert("Error: " + error.message));
  }
});