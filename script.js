let cookieCount = 0;
let clickValue = 1; // jsp comment l'appeler (variable qui sert a augmenter le cookie +1 )
let priceMultiplier = 1.2;
let clickMultiplier = 2;
let autoClickPrice = 25;
let clickMultiplierPrice = 50;
let clickMultiplierUpgradeLevel = 0;
let autoClickUpgradeLevel = 0;

const count = document.getElementById("count");
const autoClickPriceDisplay = document.getElementById("autoClickPriceDisplay");
const autoClickUpgradeLevelDisplay = document.getElementById("autoClickUpgradeLevelDisplay");
const clickMultiplierPriceDisplay = document.getElementById("clickMultiplierPriceDisplay")
const clickMultiplierLevelDisplay = document.getElementById("clickMultiplierLevelDisplay")

function addCookie() {
    cookieCount = cookieCount + clickValue;
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

function saveClickMultiplierUpgrade(clickMultiplierPrice, clickMultiplierUpgradeLevel){
    localStorage.setItem("clickMultiplierPrice", clickMultiplierPrice);
    localStorage.setItem("clickMultiplierUpgradeLevel", clickMultiplierUpgradeLevel)
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
        autoClickUpgradeLevelDisplay.textContent = saveAutoClickUpgradeLevel;
    }

    const saveClickMultiplierPrice = localStorage.getItem("clickMultiplierPrice")
    if (saveClickMultiplierPrice !== null){
        clickMultiplierPrice = parseInt(saveClickMultiplierPrice);
        clickMultiplierPriceDisplay.textContent = saveClickMultiplierPrice;
    }

    const saveClickMultiplierLevelDisplay = localStorage.getItem("clickMultiplierUpgradeLevel")
    if (saveClickMultiplierLevelDisplay){
        clickMultiplierUpgradeLevel = parseInt(saveClickMultiplierLevelDisplay);
        clickMultiplierLevelDisplay.textContent = saveClickMultiplierLevelDisplay;
    }
}

function autoClickShop(){
    if (cookieCount >= autoClickPrice ){
        cookieCount = cookieCount - autoClickPrice;
        autoClickPrice = Math.floor(autoClickPrice * priceMultiplier);
        autoClickUpgradeLevel = autoClickUpgradeLevel + 1 ;
    }
    autoClickPriceDisplay.textContent = autoClickPrice;
    autoClickUpgradeLevelDisplay.textContent = autoClickUpgradeLevel;

    saveAutoClickUpgrade(autoClickPrice, autoClickUpgradeLevel);
}

function autoClick(){
    cookieCount = cookieCount + autoClickUpgradeLevel;
    count.textContent = cookieCount;
    saveCookie(cookieCount);
}
setInterval(autoClick, 1000);

function clickMultiplierShop(){
    if (cookieCount >= clickMultiplierPrice ){
        cookieCount = cookieCount - clickMultiplierPrice;
        clickMultiplierPrice = Math.floor(clickMultiplierPrice * priceMultiplier)
        clickValue = clickValue + clickMultiplier;
        clickMultiplierUpgradeLevel = clickMultiplierUpgradeLevel + 1;
    }
    clickMultiplierPriceDisplay.textContent = clickMultiplierPrice;
    clickMultiplierLevelDisplay.textContent = clickMultiplierUpgradeLevel

    saveClickMultiplierUpgrade(clickMultiplierPrice, clickMultiplierUpgradeLevel);
}


document.getElementById("clickMe").addEventListener("click", addCookie);

document.getElementById("autoClickPriceDisplay").addEventListener("click", autoClickShop);
document.getElementById("clickMultiplierPriceDisplay").addEventListener("click", clickMultiplierShop);
loadGame();
