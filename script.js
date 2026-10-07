```javascript
/* =========================================================
   SARANYA S - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");
        menuToggle.textContent = "☰";

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .experience-card, .timeline-card, .contact-card, .soft-skill, .about-grid"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= TYPING EFFECT ================= */

const roles = [
    "Cybersecurity Student",
    "Aspiring SOC Analyst",
    "Security Enthusiast"
];

const typingElement = document.querySelector(".hero h2");

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeRole() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        characterIndex++;

        typingElement.innerHTML =
            currentRole.substring(0, characterIndex) +
            ' <span class="typing-cursor">|</span>';

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1800);

            return;
        }

    } else {

        characterIndex--;

        typingElement.innerHTML =
            currentRole.substring(0, characterIndex) +
            ' <span class="typing-cursor">|</span>';

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    const typingSpeed = deleting ? 45 : 85;

    setTimeout(typeRole, typingSpeed);
}


/* Start typing animation */

setTimeout(typeRole, 1000);


/* ================= CURRENT YEAR ================= */

const footerYear = document.querySelector("footer");

if (footerYear) {

    const year = new Date().getFullYear();

    footerYear.setAttribute("data-year", year);

}


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%cHello! Welcome to Saranya's Cybersecurity Portfolio.",
    "color:#00e5ff;font-size:16px;font-weight:bold;"
);

console.log(
    "%cStay curious. Keep learning. Keep securing.",
    "color:#00ff9d;font-size:13px;"
);
```
