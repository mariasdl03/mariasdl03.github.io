const moonBtn = document.querySelector('.moon-btn');
const moonIcon = moonBtn.querySelector('i');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    moonIcon.classList.add('bi-moon');
} else {
    moonIcon.classList.add('bi-sun');
}

moonBtn.addEventListener('mousedown', () => {
    moonBtn.classList.add('is-pressed');
});
document.addEventListener('mouseup', () => {
    moonBtn.classList.remove('is-pressed');
});

moonBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        moonIcon.classList.remove('bi-sun');
        moonIcon.classList.add('bi-moon');
    } else {
        moonIcon.classList.remove('bi-moon');
        moonIcon.classList.add('bi-sun');
    }
});

const kofiContainer = document.querySelector('.kofi-container');
const heartIcon = kofiContainer.querySelector('i');

kofiContainer.addEventListener('mouseenter', () => {
    heartIcon.classList.remove('bi-heart');
    heartIcon.classList.add('bi-heart-fill');
});

kofiContainer.addEventListener('mouseleave', () => {
    heartIcon.classList.remove('bi-heart-fill');
    heartIcon.classList.add('bi-heart');
});

