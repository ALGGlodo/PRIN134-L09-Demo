document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("highlight-ingredients").addEventListener("click", function() {
        const ingredients = document.querySelectorAll("#recipe-ingredients li");
        ingredients.forEach((item, index) => {
            if (index % 2 === 0) {
                item.classList.toggle("highlight");
            }
        });
    });
}); 
 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("check-instructions").addEventListener("click", function() {
        setTimeout(() => {
            const instructions = document.querySelectorAll("#recipe-instructions li");
            instructions.forEach(item => {
                item.classList.add("is-done");
            });
        }, 3000);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.getElementById("reset-instructions");

    if (resetButton) {
        resetButton.addEventListener("click", function() {
            const instructions = document.querySelectorAll("#recipe-instructions li");
            instructions.forEach(item => {
                item.classList.remove("is-done");
            });
        });
    } else {
        console.error(' "reset-instructions" not found!');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("h2.headers:nth-of-type(1)");

    if (header) {
        header.addEventListener("click", function() {
            this.classList.add("animate__animated", "animate__bounce");

           
            setTimeout(() => {
                this.classList.remove("animate__animated", "animate__bounce");
            }, 1000);
        });
    } else {
        console.error('Element "h2.headers:nth-of-type(1)" was not found in the DOM.');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("h2.headers:nth-of-type(2)");

    if (header) {
        header.addEventListener("click", function() {
            this.classList.add("animate__animated", "animate__shakeX");

            
            setTimeout(() => {
                this.classList.remove("animate__animated", "animate__shakeX");
            }, 1000);
        });
    } else {
        console.error('Element "h2.headers:nth-of-type(2)" was not found in the DOM.');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const cake = document.getElementById("cake");
    if (cake) {
        cake.addEventListener("click", function() {
            this.classList.add("animate__animated", "animate__pulse");
            setTimeout(() => {
                this.classList.remove("animate__animated", "animate__pulse");
            }, 1000);
        });
    }
});
