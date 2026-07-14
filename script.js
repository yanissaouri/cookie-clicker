
function addCookie() {
    const add = document.getElementById("compteur");
    let cookieCount = parseInt(add.textContent);
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
        add.textContent = save;
    }

}

document.getElementById("clickMe").addEventListener("click", addCookie);
loadGame();
