// Theme Switcher
const themeSelector = document.getElementById("theme");
themeSelector.addEventListener("change", (e) => {
    const theme = e.target.value;
    document.documentElement.style.setProperty("--main-color", theme);
});

// Scroll Reveal Animations
ScrollReveal().reveal("#hero", { delay: 200, origin: "top", distance: "50px" });
ScrollReveal().reveal("#about, #courses, #testimonials, #contact", { delay: 300, origin: "bottom", distance: "50px" });
