const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    const currentTheme = body.classList.contains('dark-theme') ? 'Sötét Téma' : 'Világos Téma';
    themeToggle.textContent = currentTheme;
});

themeToggle.textContent = 'Világos téma';


document.getElementById('scrollButton').addEventListener('click', function() {
    document.querySelector('.box').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.getElementById('topButton').addEventListener('click', function() {
    // Az oldal tetejére görgetés
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('menuButton').addEventListener('click', function() {
    const navbarLinks = document.querySelector('.navbar-links');
    const menuButton = document.getElementById('menuButton');
    
    if (navbarLinks.style.display === 'flex') {
        navbarLinks.style.maxHeight = '0';
        navbarLinks.style.opacity = '0';
        menuButton.classList.remove('rotate');
        setTimeout(() => {
            navbarLinks.style.display = 'none';
        }, 500); // Megvárjuk az átmenet végét
    } else {
        navbarLinks.style.display = 'flex';
        setTimeout(() => {
            navbarLinks.style.maxHeight = '300px';
            navbarLinks.style.opacity = '1';
            menuButton.classList.add('rotate');
        }, 10); // Kis késleltetés az átmenet indításához
    }
});
