const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
const togglePassword = document.getElementsByClassName("togglePassword")[0];
const confirmPassword = document.getElementsByClassName("confirmPassword")[0];

let isValid = false;
let passwordsMatch = false;

function messageContent(text, color) {
    message.textContent = `${text}`;
    message.style.color = `${color}`;
    messageContainer.style.borderColor = `${color}`;
}

function passwordContent(color) {
    password1El.style.borderColor = `${color}`;
    password2El.style.borderColor = `${color}`;
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    console.log(user);
    resetForm();
}

function resetForm() {
    form.name.value = "";
    form.phone.value = "";
    form.email.value = "";
    form.website.value = "";
    form.passwordInitial.value = "";
    form.password.value = "";
    passwordContent("red");
}

function checkPass() {
    password1El.type === "password" ? (password1El.type = "text") : (password1El.type = "password");
    togglePassword.classList.toggle("checkIcon");
    togglePassword.classList.contains("checkIcon") ? (togglePassword.innerHTML = `<i class="fa-solid fa-eye"></i>`) : (togglePassword.innerHTML = `<i class="fa-sharp fa-solid fa-eye-slash">`);
}

function confimPass() {
    password2El.type === "password" ? (password2El.type = "text") : (password2El.type = "password");
    confirmPassword.classList.toggle("showIcon");
    confirmPassword.classList.contains("showIcon") ? (confirmPassword.innerHTML = `<i class="fa-solid fa-eye"></i>`) : (confirmPassword.innerHTML = `<i class="fa-sharp fa-solid fa-eye-slash">`);
}

function validateForm() {
    // Use HTML constraint API to check form validity
    isValid = form.checkValidity();
    // Check to see if both password fields match
    if (password1El.value === password2El.value) {
        // If they match, set value to true and borders to green
        passwordsMatch = true;
        passwordContent("green");
    } else {
        // If they don't match, border color of input to red, change message
        passwordsMatch = false;
        messageContent("Make sure passwords match.", "red");
        passwordContent("red");
        return;
    }
    // If form is valid and passwords match, Style main message for success
    isValid && passwordsMatch && messageContent("Successfully Registered!", "green");
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    isValid && passwordsMatch && storeFormData();
}

// Event Listener
form.addEventListener("submit", processFormData);
togglePassword.addEventListener("click", checkPass);
confirmPassword.addEventListener("click", confimPass);