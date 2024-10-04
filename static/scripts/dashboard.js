const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener('click' , () => {
    sideMenu.style.display = "none";
});

//change theme
const themeToggler = document.querySelector('.theme-toggler');

// Load the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const themeToggler = document.querySelector('.theme-toggler');
    
    if (themeToggler) { // Ensure the element exists
        // Load the saved theme on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme-variables');
            themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
            themeToggler.querySelector('span:nth-child(2)').classList.add('active');
        }

        // Add event listener to the theme toggler
        themeToggler.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme-variables');

            // Update active state of the icons
            themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
            themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

            // Save the selected theme
            if (document.body.classList.contains('dark-theme-variables')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    } else {
        console.error("Theme toggler element not found");
    }
});


