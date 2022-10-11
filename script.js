let rightBtn = document.querySelector(".choice1-right");
const leftBtn = document.querySelector(".choice1-left");
let h1 = document.querySelector("h1")
const klappahund = document.createElement("button");

rightBtn.addEventListener("click", right1func);

function right1func() {
klappahund.insertAdjacentElement("afterend", rightBtn);
}


