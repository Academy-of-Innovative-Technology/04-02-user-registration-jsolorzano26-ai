// Form
const form = document.querySelector("form");


// Inputs
const firstNameInput = document.querySelectorAll('input[type="text"]')[0];
const lastNameInput = document.querySelectorAll('input[type="text"]')[1];
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const countrySelect = document.querySelector("select");
const aboutTextarea = document.querySelector("textarea");


// Radio buttons
const accountTypeRadios = document.querySelectorAll('input[name="accountType"]');


// Saved user display
const noSavedUser = document.getElementById("noSavedUser");
const savedUserPanel = document.getElementById("savedUserPanel");


const savedFirstName = document.getElementById("savedFirstName");
const savedLastName = document.getElementById("savedLastName");
const savedEmail = document.getElementById("savedEmail");
const savedCountry = document.getElementById("savedCountry");
const savedAccountType = document.getElementById("savedAccountType");
const savedAbout = document.getElementById("savedAbout");


// Buttons
const loadUserBtn = document.getElementById("loadUserBtn");
const clearUserBtn = document.getElementById("clearUserBtn");
const resetBtn = document.getElementById("resetBtn");


// Submit form
form.addEventListener("submit", function (event) {
 event.preventDefault();
 saveUser();
});


// Save user
function saveUser() {
 const selectedAccount = document.querySelector(
   'input[name="accountType"]:checked'
 );


 const user = {
   firstName: firstNameInput.value,
   lastName: lastNameInput.value,
   email: emailInput.value,
   password: passwordInput.value,
   country: countrySelect.value,
   accountType: selectedAccount
     ? selectedAccount.nextElementSibling.textContent
     : "",
   about: aboutTextarea.value
 };


 localStorage.setItem("registeredUser", JSON.stringify(user));
 displayUser(user);
 alert("Registration Saved!");
}


// Load user
function loadUser() {
 const savedData = localStorage.getItem("registeredUser");


 if (!savedData) {
   noSavedUser.classList.remove("d-none");
   savedUserPanel.classList.add("d-none");
   return;
 }


 const user = JSON.parse(savedData);
 displayUser(user);
}


// Display user
function displayUser(user) {
 noSavedUser.classList.add("d-none");
 savedUserPanel.classList.remove("d-none");


 savedFirstName.textContent = user.firstName;
 savedLastName.textContent = user.lastName;
 savedEmail.textContent = user.email;
 savedCountry.textContent = user.country;
 savedAccountType.textContent = user.accountType;
 savedAbout.textContent = user.about;
}


// Clear user
function clearUser() {
 localStorage.removeItem("registeredUser");
 savedUserPanel.classList.add("d-none");
 noSavedUser.classList.remove("d-none");
}


// Buttons events
loadUserBtn.addEventListener("click", loadUser);
clearUserBtn.addEventListener("click", clearUser);


// Reset button
resetBtn.addEventListener("click", function () {
 form.reset();
 clearUser();
});


// Auto load on page refresh
loadUser();


