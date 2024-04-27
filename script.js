document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            const clickedDropdownContent = toggle.nextElementSibling;
            const allDropdownContents = document.querySelectorAll('.dropdown-content');
            
            allDropdownContents.forEach(function(dropdownContent) {
                if (dropdownContent !== clickedDropdownContent) {
                    dropdownContent.classList.remove('show');
                }
            });
            
            clickedDropdownContent.classList.toggle('show');
        });
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });

    // Select the hamburger menu and navigation links
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Add event listener to the hamburger menu
    hamburgerMenu.addEventListener('click', () => {
        // Toggle the 'show' class on the navigation links
        navLinks.classList.toggle('show');
        // Toggle the 'open' class on the hamburger menu
        hamburgerMenu.classList.toggle('open');
    });
});


