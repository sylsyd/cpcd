// Function to toggle navigation bar
function toggleNav() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Function to toggle email content
function toggleEmails() {
    var emailContent = document.getElementById('email-content');
    emailContent.style.display = emailContent.style.display === 'none' ? 'block' : 'none';
}

let cascadeDelay = 0; // Initialize a variable to hold the delay time

// Function to open modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.animation = 'none';
    modal.offsetHeight; // Trigger reflow
    modal.style.animation = '';
    modal.style.animationName = 'fadeIn';
    modal.style.animationDuration = '2s';
    modal.style.animationDelay = `${cascadeDelay}s`;
    modal.style.display = "block";
    cascadeDelay += 0.5;
}

// Function to close modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.animation = '';
    modal.style.display = "none";
    cascadeDelay = 0; // Reset the delay time
}

document.addEventListener('DOMContentLoaded', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const emailEntries = document.querySelectorAll('.email-entry');
    emailEntries.forEach((entry, index) => {
        entry.style.animationDelay = `${index * 0.2}s`;
    });
});
