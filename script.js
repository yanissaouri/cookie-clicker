let cookieCount = 0;
let multiplier = 1.5;
let autoClickPrice = 25;
let autoClickUpgradeLevel = 0;


function addCookie() {
    const count = document.getElementById("count");
    cookieCount = cookieCount + 1;
    count.textContent = cookieCount;
    saveGame(cookieCount);
}

// ajouter les upgrades 
function saveGame(cookieCount) {
    localStorage.setItem("cookies", cookieCount) ;
    localStorage.setItem("autoClickPriceDisplay", autoClickPrice) ;
}

function loadGame() {
    const count = document.getElementById("count");
    const save = localStorage.getItem("cookies");
    if (save !== null) {
        cookieCount = parseInt(save)
        count.textContent = save;
    }
}

// changer la variable pour faire comprendre que c'est que pour le shop et en creer une autre pour la logique du cookie + x
function autoClickShop(){
    const autoClickPriceDisplay = document.getElementById("autoClickPriceDisplay");
    autoClickPriceDisplay.textContent = autoClickPrice;

    const upgradeLevelDisplay = document.getElementById("autoClickUpgradeLevelDisplay");
    upgradeLevelDisplay.textContent = autoClickUpgradeLevel;

    // cookieCount = cookieCount + 1;

    if (cookieCount >= autoClickPrice ){

        cookieCount = cookieCount - autoClickPrice;
        autoClickPrice = autoClickPrice * multiplier;
        autoClickUpgradeLevel = autoClickUpgradeLevel + 1 ;
    }
}

document.getElementById("clickMe").addEventListener("click", addCookie);

// a mettre en haut pour qu'il se charge en premier? pour pas que le html s'affiche avant
document.getElementById("autoClickPriceDisplay").addEventListener("click", autoClickShop);
loadGame();
