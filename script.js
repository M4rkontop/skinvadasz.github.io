const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    const currentTheme = body.classList.contains('dark-theme') ? 'Sötét Téma' : 'Világos Téma';
    themeToggle.textContent = currentTheme;
});

themeToggle.textContent = 'Világos téma';
