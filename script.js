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

// Function to open modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Function to add paragraph tags
function addParagraphTags(str) {
    const paragraphs = str.split("\n\n");
    return paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("");
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Run this code after the DOM has fully loaded

    // Add click event for modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // ... You can add other initialization code here
});
