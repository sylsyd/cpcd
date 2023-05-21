window.onload = function() {
    try {
        document.getElementById('thumbnail1').addEventListener('click', function() {
            if(this.style.transform === 'scale(3)') {
                this.style.transform = 'scale(1)';
            } else {
                this.style.transform = 'scale(3)';  // Enlarge to 300% when clicked
            }
        });

        document.getElementById('thumbnail2').addEventListener('click', function() {
            if(this.style.transform === 'scale(3)') {
                this.style.transform = 'scale(1)';
            } else {
                this.style.transform = 'scale(3)';  // Enlarge to 300% when clicked
            }
        });
    } catch(e) {
        console.log("Thumbnail elements not found", e);
    }

    // Password check code...
    var password = "ifs2023";
    
    // Check if password has already been entered during this session
    if (!sessionStorage.getItem("passwordEntered")) {
        var userPassword = prompt("Please enter the password:");
    
        if(userPassword !== password) {
            document.body.innerHTML = '<h1>Access denied</h1><p>You entered an incorrect password.</p>';
        } else {
            // Store in the session that the password has been successfully entered
            sessionStorage.setItem("passwordEntered", "true");
        }
    }

    function toggleDisplay(element) {
        if(element.style.display === 'block') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    }

    document.getElementById('Syl').addEventListener('click', function() {
        var myTextBox = document.getElementById('myTextBox');
        myTextBox.innerHTML = 'Syl is Australian but initially trained and qualified as a teacher in the UK. He started his career as an English teacher in Year 6 at Clare Middle School and went  on to teach in the USA, Cambodia and was teaching Year 5 English in his hometown of Sydney, Australia before coming to Singapore in 2021.';
        toggleDisplay(myTextBox);
    });

    document.getElementById('Lorene').addEventListener('click', function() {
        var myTextBox2 = document.getElementById('myTextBox2');
        myTextBox2.innerHTML = 'Lorène Coilier a enseigné pendant 5 ans en France dans différents niveaux de classe (CP, CE1, CM1, PS-MS) avant d’arriver à Singapour il y a un peu plus de 3 ans. Elle a commencé au lycée en tant que remplaçante et entame sa troisième année en CP Anglais +.';
        toggleDisplay(myTextBox2);
    });

    document.getElementById('Karen').addEventListener('click', function() {
        var textBox = document.getElementById('textBoxKaren');
        textBox.innerHTML = 'Karen is a...';
        toggleDisplay(textBox);
    });

    document.getElementById('Ganyue').addEventListener('click', function() {
        var textBox = document.getElementById('textBoxGanyue');
        textBox.innerHTML = 'Ganyue is a...';
        toggleDisplay(textBox);
    });

    document.getElementById('Omar').addEventListener('click', function() {
        var textBox = document.getElementById('textBoxOmar');
        textBox.innerHTML = 'Ganyue is a...';
        toggleDisplay(textBox);
    });

    document.getElementById('Marko').addEventListener('click', function() {
        var textBox = document.getElementById('textBoxMarko');
        textBox.innerHTML = 'Ganyue is a...';
        toggleDisplay(textBox);
    });

    document.getElementById('Suresh').addEventListener('click', function() {
        var textBox = document.getElementById('textBoxSuresh');
        textBox.innerHTML = 'Ganyue is a...';
        toggleDisplay(textBox);
    });

    // Repeat for Omar, Marko, and Suresh
}