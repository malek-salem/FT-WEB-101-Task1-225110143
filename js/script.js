// Malek Amr Salem - 225110143

const themeBtn = document.getElementById("theme-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const greetingText = document.getElementById("greeting-text");
const visitorForm = document.getElementById("visitor-form");
const formFeedback = document.getElementById("form-feedback");

// Step 4: Toggle dark class on body when the button is clicked
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Switch to Light Mode";
    } else {
        themeBtn.textContent = "Switch to Dark Mode";
    }
});

// Section 5 Bonus: Say hello with the name the visitor types
nameInput.addEventListener("input", function () {
    const visitorName = nameInput.value.trim();

    if (visitorName !== "") {
        greetingText.textContent = "Hello, " + visitorName + "! Nice to meet you.";
    } else {
        greetingText.textContent = "Type your name below to say hello!";
    }
});

// Section 5 Bonus: Keep the form on the page and reject an empty email
visitorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = nameInput.value.trim();
    const visitorEmail = emailInput.value.trim();

    if (visitorEmail === "") {
        formFeedback.textContent = "Please enter your email address before submitting.";
        return;
    }

    const displayName = visitorName !== "" ? visitorName : "friend";
    formFeedback.textContent = "Thanks, " + displayName + "! Your email (" + visitorEmail + ") has been recorded.";
});
