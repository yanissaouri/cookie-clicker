let cookieCount = 0;
let multiplicateur = 1.5;
let autoClickPrice = 25;
let upgradeLevel = 0;

//fixer la variable qui fait du caca
var bought = false ;

function addCookie() {
    const compteur = document.getElementById("compteur");
    cookieCount = cookieCount + 1;
    compteur.textContent = cookieCount;
    saveGame(cookieCount);
}

// ajouter les upgrades 
function saveGame(cookieCount) {
    localStorage.setItem("cookies", cookieCount) ;
    localStorage.setItem("autoClickPrice", autoClickPrice) ;
}

function loadGame() {
    const compteur = document.getElementById("compteur");
    const save = localStorage.getItem("cookies");
    if (save !== null) {
        cookieCount = parseInt(save)
        compteur.textContent = save;
    }
}

// changer la variable pour faire comprendre que c'est que pour le shop et en creer une autre pour la logique du cookie + x
function autoClick(){
    const autoClickUpgrade = document.getElementById("autoClickUpgradeDisplay");
    autoClickUpgrade.textContent = autoClickPrice;

    const upgradeLevelDisplay = document.getElementById("autoClickUpgradeLevelDisplay");
    upgradeLevelDisplay.textContent = autoClickUpgradeLevel;

    // cookieCount = cookieCount + 1;

    if (cookieCount >= autoClickPrice){
        if (bought) return ;
    bought = true ;
        setInterval(autoClick, 1000);
        cookieCount = cookieCount - autoClickPrice;
        autoClickPrice = autoClickPrice * multiplicateur;
        upgradeLevelDisplay = upgradeLevelDisplay + 1 ;
    }
}

document.getElementById("clickMe").addEventListener("click", addCookie);

// a mettre en haut pour qu'il se charge en premier? pour pas que le html s'affiche avant
document.getElementById("autoClickUpgradeDisplay").addEventListener("click", autoClick);
loadGame();
