
/* =====================================
   NITU - NURSING PORTFOLIO
   JAVASCRIPT
===================================== */

// CURRENT YEAR

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "×" : "☰";

});


// CLOSE MOBILE MENU WHEN LINK IS CLICKED

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// EMAIL CONTACT

// Replace this with Nitu's actual email address.

const nituEmail = "";

const emailButton = document.getElementById("emailButton");

emailButton.addEventListener("click", (event) => {

    if (!nituEmail) {

        event.preventDefault();

        alert("Nitu's email address has not been added yet.");

        return;

    }

    emailButton.href = `mailto:${nituEmail}`;

});
