// Update footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Add active navigation effect
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

// Simple console message
console.log("Welcome to Angel369-Pro Portfolio!");
console.log("GitHub: https://github.com/angel369-pro");