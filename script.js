let h1 = document.querySelector("h1")
let container = document.querySelector(".container");
let choiceLeft = document.querySelector(".choice-left");
let choiceRight = document.querySelector(".choice-right");
let orText = document.querySelector(".orText");



// Right (ICA)
choiceRight.addEventListener("click", function() {
    console.log("du gick till höger (mot ICA)");

    h1.textContent = "För att nå ICA så behöver du passera ett övergångsställe, men plötsligt så ser du en gullig hund!";

    choiceLeft.textContent = "Klappa hund";

    choiceRight.textContent = "Passera övergångsställe";

    choiceLeft.addEventListener("click", function() {
        console.log("du klappade hunden");

        h1.textContent = "Du har nu klappat hunden och kan antingen...";
    
        choiceLeft.textContent = "fortsätta till ICA via övergångsstället";
    
        choiceRight.textContent = "gå tillbaka hem";

        choiceLeft.addEventListener("click", function() {
            console.log("du fortsätter mot ICA");

            h1.textContent = "Du är framme vid ICA!";

            // hides buttons and paragraph text
            choiceLeft.style.display = "none";
            choiceRight.style.display = "none";
            orText.style.display = "none";

            // creates button, appends & changes text in it
            const goBackBtn = document.createElement("button");
            container.appendChild(goBackBtn);
            goBackBtn.textContent = "Gå tillbaka hem";
            
            goBackBtn.addEventListener("click", function() {
                console.log("du går tillbaka hem från ICA");
                h1.textContent = "Du är nu hemma igen :)"
                goBackBtn.style.display = "none";
            });

        });

        choiceRight.addEventListener("click", function() {
            console.log("du går direkt tillbaka hem!");

            h1.textContent = "Du är nu hemma igen :)"

            // hides buttons and paragraph text
            choiceLeft.style.display = "none";
            choiceRight.style.display = "none";
            orText.style.display = "none";
        });

    });

    choiceRight.addEventListener("click", function() {
        console.log("Du har passerat övergångsstället och är vid ICA");

        h1.textContent = "Du är framme vid ICA!";

        // hides buttons and paragraph text
        choiceLeft.style.display = "none";
        choiceRight.style.display = "none";
        orText.style.display = "none";

        // creates button, appends & changes text in it
        const goBackBtn = document.createElement("button");
        container.appendChild(goBackBtn);
        goBackBtn.textContent = "Gå tillbaka hem";

        goBackBtn.addEventListener("click", function() {
            console.log("du går tillbaka hem från ICA");
            h1.textContent = "Du är nu hemma igen :)"
            goBackBtn.style.display = "none";
        });

    });
});