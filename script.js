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
                entry.target.classList.add('animate'); // Add the class that triggers the animation
                observer.unobserve(entry.target); // Stop observing once it's in view
            }
        });
    }, { threshold: 0.1 }); // Start the animation when 10% of the element is in view

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
