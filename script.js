let rightBtn = document.querySelector(".choice1-right");
let leftBtn = document.querySelector(".choice1-left");
let h1 = document.querySelector("h1")
let orText = document.querySelector(".orText");

rightBtn.addEventListener("click", funcRightRight1);

function funcRightRight1() {
    h1.textContent = "För att nå ICA så behöver du passera ett övergångsställe, men plötsligt så ser du en gullig hund!"

    rightBtn.textContent = "Gå till övergångsställe";
    leftBtn.textContent = "Klappa hunden";
    rightBtn.addEventListener("click", funcRightRight2);
    leftBtn.addEventListener("click", funcRightRight2);
}


//  ELIN ÄR BÄST

rightBtn.addEventListener("click", funcRightLeft1);

function funcRightLeft1() {
    h1.textContent = "123"

    rightBtn.textContent = "Gå till övergångsställe";
    leftBtn.textContent = "Klappa hunden";
    // rightBtn.addEventListener("click", funcRightRight3);
}




// function funcRightRight2() {
//     h1.textContent = "Du är framme vid ICA!"
//     rightBtn.textContent = "Gå hem";
//     leftBtn.style.display = "none";
//     orText.style.display = "none";
//     rightBtn.addEventListener("click", function goHome() {
//         h1.textContent = "Du är nu hemma igen :)"
//         rightBtn.style.display = "none";
//     });
// }

