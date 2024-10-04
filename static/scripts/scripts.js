const showPassword = document.getElementById('show');
const hidePassword = document.getElementById('hide');
const passwordField = document.getElementById('password');

showPassword.addEventListener('click', () => {
    passwordField.type = "text";
    showPassword.style.display = "none";
    hidePassword.style.display = "inline";
});

hidePassword.addEventListener('click', () => {
    passwordField.type = "password";
    showPassword.style.display = "inline";
    hidePassword.style.display = "none";
});

//change theme
// Load the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme-variables');
        themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
        themeToggler.querySelector('span:nth-child(2)').classList.add('active');
    }
});

// Toggle theme and save the user's choice
const themeToggler = document.querySelector('.theme-toggler');
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    // Update the active state of the theme toggler icons
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

    // Save the selected theme to localStorage
    if (document.body.classList.contains('dark-theme-variables')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});