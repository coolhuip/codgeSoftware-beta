const themeToggleBtns = document.querySelector('#theme-toggle');

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
});