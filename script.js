document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');

    hamburger.addEventListener('click', function () {
        navigation.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animated-element');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const animatedCards = document.querySelectorAll('.card-animated');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedCards.forEach(element => {
        observer.observe(element);
    });
});
