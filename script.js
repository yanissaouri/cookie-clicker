let cookieCount = 0;


function addCookie() {
    const add = document.getElementById("compteur");
    cookieCount = cookieCount + 1;
    add.textContent = cookieCount;
    saveGame(cookieCount);
}

function saveGame(cookieCount) {
    localStorage.setItem("cookies", cookieCount) ;
}

function loadGame() {
    const add = document.getElementById("compteur");
    const save = localStorage.getItem("cookies");
    if (save !== null) {
        cookieCount = parseInt(save)
        add.textContent = save;
    }
}


function autoClick(){

}

document.getElementById("clickMe").addEventListener("click", addCookie);
loadGame();
