"use stric";

// Questions Tab

// Selecting all the tab titles, tab contents, and arrows
const tabTitles = document.querySelectorAll("#tab-title");
const tabs = document.querySelectorAll("#tab");
const arrows = document.querySelectorAll("#arrow");

// Adding event listeners to each tab title
tabTitles.forEach(function (title, titleIndex) {
    title.addEventListener("click", function () {
        // Toggle the display of tab contents based on the clicked title
        tabs.forEach(function (tab, tabIndex) {
            if (titleIndex === tabIndex) {
                tab.style.height = "auto";
            } else {
                tab.style.height = "60px";
            }
        });

        // Rotate the arrows to indicate the open/close state of the tabs
        arrows.forEach(function (arrow, arrowIndex) {
            if (titleIndex === arrowIndex) {
                arrow.style.transform = "rotateZ(180deg)";
            } else {
                arrow.style.transform = "rotateZ(0deg)";
            }
        })
    });
});

// Email Form

// Selecting form elements
const form = document.getElementById("form");
const submitButton = document.getElementById("submit");
const email = document.getElementById("email");

// Selecting error display elements
const errorIcon = document.getElementById("error-icon");
const inputError = document.getElementById("input-error");

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Adding an event listener to the submit button
submitButton.addEventListener("click", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if the email is empty or not valid
    if (email.value === "" || !emailRegex.test(email.value)) {
        errorIcon.style.display = "block";
        inputError.style.display = "block";
        email.style.border = "2px solid hsl(0, 94%, 66%)";
    } else {
        // If the email is valid, hide the error messages and submit the form
        errorIcon.style.display = "none";
        inputError.style.display = "none";
        email.style.border = "none";

        // Submit the form using fetch API (or your preferred method)
        form.submit(email);
    }
});

// Remove the Input Alert
email.addEventListener("click", removeEmailError, false);

function removeEmailError() {
    errorIcon.style.display = "none";
    inputError.style.display = "none";
    email.style.border = "none";
}