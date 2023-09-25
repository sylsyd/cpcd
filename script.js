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

function showDetails(subject) {
    alert(`This is a ${subject} class.`);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const timetableContainer = document.querySelectorAll('.timetable-container');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });
  
    timetableContainer.forEach(container => {
      observer.observe(container);
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const timetableDays = document.querySelectorAll('.day');
    
    let dayDelay = 0.5; // initial delay for the first day

    timetableDays.forEach((day, dayIndex) => {
        // Set the animation delay for each day
        day.style.animationDelay = `${dayDelay}s`;
        
        const lessons = day.querySelectorAll('.lesson');
        let lessonDelay = 0.2; // initial delay for the first lesson within a day

        lessons.forEach((lesson, lessonIndex) => {
            // Set the animation delay for each lesson, relative to its parent day
            lesson.style.animationDelay = `${dayDelay + lessonDelay}s`;
            lessonDelay += 0.2;
        });

        dayDelay += 0.5; // increment the delay for the next day
    });
});

function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
