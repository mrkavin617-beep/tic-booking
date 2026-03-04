const menu = document.getElementById("menu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", () => {
    menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("active");
});
const buttons = document.querySelectorAll(".movie-card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Booking feature coming soon 🚀");
    });
});
