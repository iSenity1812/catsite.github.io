document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const menuToogle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToogle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});