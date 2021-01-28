window.onload = function(){

    let suits = ["♠", "♣", "♥", "♦"];
    let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suitContentTop = document.getElementById("suits-top");
    let suitContentBottom = document.getElementById("suits-bottom");
    let numContent = document.getElementById("number");

    //Guardar el suit y el num random generado
    let suitRandom = suits[Math.floor(Math.random() * (3 - 0 + 1) ) + 0];
    let numRandom = num[Math.floor(Math.random() * (12 - 0 + 1) ) + 0];
    //Asignar el suit y num generado al contenido de los elementos del html (p)
    suitContentTop.textContent = suitRandom;
    suitContentBottom.textContent = suitRandom;
    numContent.textContent = numRandom;

    if(suitRandom == "♥" || suitRandom == "♦"){
        suitContentTop.style.color = "red";
        suitContentBottom.style.color = "red"
    }
}
