document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');

    hamburger.addEventListener('click', function () {
        navigation.classList.toggle('active');
    });

    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY < lastScrollY) {
            header.style.top = '0';
        } else {
            header.style.top = '-100px';
        }
        lastScrollY = window.scrollY;
    })
});

const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));