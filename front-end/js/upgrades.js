import { saveAutoClickUpgrade, saveClickMultiplierUpgrade } from "./storage.js";

export function autoClickShop(state, elements){
    if (state.cookieCount >= state.autoClickPrice ){
        state.cookieCount = state.cookieCount - state.autoClickPrice;
        state.autoClickPrice = Math.floor(state.autoClickPrice * state.priceMultiplier);
        state.autoClickUpgradeLevel = state.autoClickUpgradeLevel + 1 ;
    }
    elements.autoClickPriceDisplay.textContent = state.autoClickPrice;
    elements.autoClickUpgradeLevelDisplay.textContent = state.autoClickUpgradeLevel;

    saveAutoClickUpgrade(state);
}

export function clickMultiplierShop(state, elements){
    if (state.cookieCount >= state.clickMultiplierPrice ){
        state.cookieCount = state.cookieCount - state.clickMultiplierPrice;
        state.clickMultiplierPrice = Math.floor(state.clickMultiplierPrice * state.priceMultiplier)
        state.clickValue = state.clickValue + state.clickMultiplier;
        state.clickMultiplierUpgradeLevel = state.clickMultiplierUpgradeLevel + 1;
    }
    elements.clickMultiplierPriceDisplay.textContent = state.clickMultiplierPrice;
    elements.clickMultiplierLevelDisplay.textContent = state.clickMultiplierUpgradeLevel

    saveClickMultiplierUpgrade(state);
}