document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.Header-Button[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href'); 

            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    });
});