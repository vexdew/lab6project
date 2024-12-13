document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.color = '#ff6600'; // Highlight link on hover
            });
            link.addEventListener('mouseout', () => {
                link.style.color = '#fff'; // Revert link color
            });
        });
    }

    // Prevent duplicating header content
    if (document.querySelector('header')) {
        console.log('Header already exists, not duplicating.');
    }

    // Add form validation and success alert
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate that all fields are filled
            if (!name || !email || !message) {
                alert('Please fill in all fields before submitting.');
                return;
            }

            // Validate email format
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Display success alert
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            form.reset(); // Clear the form fields
        });
    }

    // Helper function to validate email addresses
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
