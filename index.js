document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const menuToogle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToogle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
    
    // Light and Dark
    const themeToggle = document.querySelector("#mode-toggle");
    const mainContent = document.querySelector("#main-content");

    // Function to toggle between light and dark mode
    function toggleTheme() {
        mainContent.classList.toggle("dark-mode");
        const isDark = mainContent.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    // Function to apply the saved theme
    const saveTheme = localStorage.getItem("theme");
    if (saveTheme === "dark") {
        mainContent.classList.add("dark-mode");
        themeToggle.checked = true;
    }

    // Add event listener to the theme toggle
    themeToggle.addEventListener("change", toggleTheme);
});
