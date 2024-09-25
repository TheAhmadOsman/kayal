document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTopButton');
    const backToTopContainer = document.getElementById('backToTopContainer');

    // Function to handle scroll event
    function handleScroll() {
        if (window.scrollY > window.innerHeight / 2) {
            backToTopContainer.classList.add('show');
        } else {
            backToTopContainer.classList.remove('show');
        }
    }

    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    backToTopButton.addEventListener('click', scrollToTop);

    // Initial call to handleScroll
    handleScroll();
});