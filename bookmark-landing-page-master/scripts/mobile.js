'use strict';

// Make The Navbar Show and Hide

// Get references to DOM elements
const body = document.body; // The body element
const navbar = document.getElementById("navbar"); // The navbar element
const openMenu = document.getElementById("open-menu"); // The open menu button
const closeMenu = document.getElementById("close-menu"); // The close menu button
const headerLogo = document.getElementById("headerLogo"); // The header logo

// Open Navbar 
openMenu.addEventListener("click", openNavbar, false);

// Function to open the navbar
function openNavbar() {
    // Add class to show the navbar
    navbar.classList.add("show-navbar");
    // Change the fill color of the header logo to white
    headerLogo.style.fill = "white";

    // If navbar is shown, hide the open menu button and disable scrolling
    if (navbar.classList.contains("show-navbar")) {
        body.style.overflow = "hidden";
    }
}

// Close Navbar
closeMenu.addEventListener("click", closeNavbar, false);

// Function to close the navbar
function closeNavbar() {
    // Remove class to hide the navbar
    navbar.classList.remove("show-navbar");
   
    headerLogo.style.fill = "black";
    // Enable scrolling
    body.style.overflow = "visible";

    const observer = new ResizeObserver(function (entries) {
        for (let entry of entries) {
            if(entry.target.offsetWidth < 900) {
                openMenu.style.display = "block";
            } else {
                openMenu.style.display = "none";
            }
        }
    })

    observer.observe(body);
}


// Button to go back on top

// Get reference to the button that scrolls to the top
const topButton = document.getElementById("top-btn");

// Add scroll event listener to the window to show/hide the button
window.addEventListener("scroll", showTopButton, false);

// Function to show or hide the button based on the scroll position
function showTopButton() {
    // If the vertical scroll position is greater than 100 pixels
    if (document.documentElement.scrollTop > 100) {
        // Show the button
        topButton.style.display = "block";
    } else {
        // Hide the button
        topButton.style.display = "none";
    }
}

// Add click event listener to the button to scroll to the top
topButton.addEventListener("click", toTheTop, false);

// Function to scroll the page to the top when the button is clicked
function toTheTop() {
    // Scroll to the top of the page
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to the top
    });
}


// Slide Tabs

// Select all elements with the id "info-button" and "slide"
const buttons = document.querySelectorAll("#info-button");
const slides = document.querySelectorAll("#slide");

// Define a constant for the screen width threshold
const screenWidth = 800;

// Create a ResizeObserver instance with a callback function
const observer = new ResizeObserver(function (entries) {
    // Iterate over each resize observer entry
    for (let entry of entries) {

        // Iterate over each button
        buttons.forEach(function (button, buttonIndex) {
            // Add click event listener to each button
            button.addEventListener("click", function () {
                // Iterate over each slide
                slides.forEach(function (slide, slideIndex) {

                    // Check if the observed element's width is greater than the defined screen width
                    if (entry.target.offsetWidth > screenWidth) {
                        // If condition is met, set slide display properties based on button and slide index
                        if (buttonIndex === slideIndex) {
                            slide.style.display = "flex"; // Display the slide as flex
                        } else {
                            slide.style.display = "none"; // Hide the slide
                        }
                    } else {
                        // If condition is not met, set slide display properties based on button and slide index
                        if (buttonIndex === slideIndex) {
                            slide.style.display = "block"; // Display the slide as block
                        } else {
                            slide.style.display = "none"; // Hide the slide
                        }
                    }
                });
            });
        });
    }
});

// Observe changes in the body element's size
observer.observe(body); // Assuming 'body' is defined somewhere in your code

