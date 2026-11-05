import { saveCookie, saveMaxCookie, saveUsername } from "./storage.js";

export function addCookie(state, elements) {
    state.cookieCount = state.cookieCount + state.clickValue;
    state.cookieMax = state.cookieMax + state.clickValue ;
    elements.count.textContent = state.cookieCount;
    saveCookie(state);
    saveMaxCookie(state);
}

export function autoClick(state, elements){
    state.cookieCount = state.cookieCount + state.autoClickUpgradeLevel;
    state.cookieMax = state.cookieMax + state.autoClickUpgradeLevel
    elements.count.textContent = state.cookieCount;
    saveCookie(state);
    saveMaxCookie(state);
}

export function startAutoClick(state, elements){
    setInterval(() => {autoClick(state, elements)}, 1000);
}

export function setUsername(state, elements){
    const value = elements.usernameInput.value.trim();
    if (value === ""){
        return;
    }
    state.username = value;
    elements.usernameDisplay.textContent = state.username;
    saveUsername(state);
}

//reset les donnés d'une partie, utile pour les tests, il faut ajouter/supprimer le bouton dans le html 
// function resetGame(){
//     localStorage.clear();
//     cookieCount = 0;
//     cookieMax = 0;
//     clickValue = 1; 
//     priceMultiplier = 1.5;
//     clickMultiplier = 1;
//     autoClickPrice = 25;
//     clickMultiplierPrice = 50;
//     clickMultiplierUpgradeLevel = 0;
//     autoClickUpgradeLevel = 0;

//     autoClickPriceDisplay.textContent = autoClickPrice;
//     autoClickUpgradeLevelDisplay.textContent = autoClickUpgradeLevel;

//     clickMultiplierPriceDisplay.textContent = clickMultiplierPrice;
//     clickMultiplierLevelDisplay.textContent = clickMultiplierUpgradeLevel
// }
