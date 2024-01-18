function handleThemeTogglerClick(toggleTheme: () => void) {
    const themeToggler = document.querySelector(".theme-toggler");
    themeToggler?.classList.toggle("active");
    
    toggleTheme();
}

export { handleThemeTogglerClick }