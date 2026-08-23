// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Contact form
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const button = form.querySelector("button");

        button.textContent = "✓ Mesazhi u dërgua!";
        button.style.background = "#22c55e";

        setTimeout(() => {
            button.textContent = "Dërgo mesazhin →";
            button.style.background = "";
            form.reset();
        }, 2500);
    });
}

// Reveal animation
const cards = document.querySelectorAll(
    ".feature-card, .service, .project, .about-box"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.1
    }
);

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all .7s ease";

    observer.observe(card);
});