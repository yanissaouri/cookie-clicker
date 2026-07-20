let cookieCount = 0;
let multiplier = 1.5;
let autoClickPrice = 25;
let autoClickUpgradeLevel = 0;

const count = document.getElementById("count");
const autoClickPriceDisplay = document.getElementById("autoClickPriceDisplay");
const upgradeLevelDisplay = document.getElementById("autoClickUpgradeLevelDisplay");

function addCookie() {
    cookieCount = cookieCount + 1;
    count.textContent = cookieCount;
    saveCookie(cookieCount);
}

// ajouter les upgrades 
function saveCookie(cookieCount) {
    localStorage.setItem("cookies", cookieCount) ;
}

function saveAutoClickUpgrade(autoClickPrice, autoClickUpgradeLevel){
    localStorage.setItem("autoClickPrice", autoClickPrice);
    localStorage.setItem("autoClickUpgradeLevel", autoClickUpgradeLevel);
}

function loadGame() {
    const saveCookies = localStorage.getItem("cookies");
    if (saveCookies !== null) {
        cookieCount = parseInt(saveCookies);
        count.textContent = saveCookies;
    }

    const saveAutoClickPrice = localStorage.getItem("autoClickPrice");
    if (saveAutoClickPrice !== null){
        autoClickPrice = parseInt(saveAutoClickPrice);
        autoClickPriceDisplay.textContent = saveAutoClickPrice;
    }

    const saveAutoClickUpgradeLevel = localStorage.getItem("autoClickUpgradeLevel");
    if (saveAutoClickUpgradeLevel !== null){
        autoClickUpgradeLevel = parseInt(saveAutoClickUpgradeLevel);
        upgradeLevelDisplay.textContent = saveAutoClickUpgradeLevel;
    }
}

function autoClickShop(){
    if (cookieCount >= autoClickPrice ){
        cookieCount = cookieCount - autoClickPrice;
        autoClickPrice = Math.floor(autoClickPrice * multiplier);
        autoClickUpgradeLevel = autoClickUpgradeLevel + 1 ;
    }
    autoClickPriceDisplay.textContent = autoClickPrice;
    upgradeLevelDisplay.textContent = autoClickUpgradeLevel;

    saveAutoClickUpgrade(autoClickPrice, autoClickUpgradeLevel);

}

function autoClick(){
    cookieCount = cookieCount + autoClickUpgradeLevel;
    count.textContent = cookieCount;
    saveCookie(cookieCount);
}
setInterval(autoClick, 1000);


document.getElementById("clickMe").addEventListener("click", addCookie);

document.getElementById("autoClickPriceDisplay").addEventListener("click", autoClickShop);
loadGame();
