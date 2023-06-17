document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(link.getAttribute('href'));
            console.log(target)
            const targetTop = target.offsetTop;
            console.log(targetTop)
            const windowHeight = window.innerHeight;
            const scrollToPosition = targetTop - (windowHeight / 2) + (target.offsetHeight / 2);

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        });
    });
});