export function saveCookie(state) {
    localStorage.setItem("cookies", state.cookieCount);
}

export function saveMaxCookie(state) {
    localStorage.setItem("maxCookies", state.cookieMax);
}

export function saveAutoClickUpgrade(state){
    localStorage.setItem("autoClickPrice", state.autoClickPrice);
    localStorage.setItem("autoClickUpgradeLevel", state.autoClickUpgradeLevel);
}

export function saveClickMultiplierUpgrade(state){
    localStorage.setItem("clickMultiplierPrice", state.clickMultiplierPrice);
    localStorage.setItem("clickMultiplierUpgradeLevel", state.clickMultiplierUpgradeLevel)
}

export function saveUsername(state){
    localStorage.setItem("username", state.username);
}

export function loadGame(state, elements) {
    const saveCookies = localStorage.getItem("cookies");
    if (saveCookies !== null) {
        state.cookieCount = parseInt(saveCookies, 10);
        elements.count.textContent = saveCookies;
    }

    const saveMaxCookies = localStorage.getItem("maxCookies");
    if (saveMaxCookies !== null) {
        state.cookieMax = parseInt(saveMaxCookies, 10);
    }

    const saveAutoClickPrice = localStorage.getItem("autoClickPrice");
    if (saveAutoClickPrice !== null){
        state.autoClickPrice = parseInt(saveAutoClickPrice, 10);
        elements.autoClickPriceDisplay.textContent = saveAutoClickPrice;
    }

    const saveAutoClickUpgradeLevel = localStorage.getItem("autoClickUpgradeLevel");
    if (saveAutoClickUpgradeLevel !== null){
        state.autoClickUpgradeLevel = parseInt(saveAutoClickUpgradeLevel, 10);
        elements.autoClickUpgradeLevelDisplay.textContent = saveAutoClickUpgradeLevel;
    }

    const saveClickMultiplierPrice = localStorage.getItem("clickMultiplierPrice")
    if (saveClickMultiplierPrice !== null){
        state.clickMultiplierPrice = parseInt(saveClickMultiplierPrice, 10);
        elements.clickMultiplierPriceDisplay.textContent = saveClickMultiplierPrice;
    }

    const saveClickMultiplierLevelDisplay = localStorage.getItem("clickMultiplierUpgradeLevel")
    if (saveClickMultiplierLevelDisplay !== null){
        state.clickMultiplierUpgradeLevel = parseInt(saveClickMultiplierLevelDisplay, 10);
        elements.clickMultiplierLevelDisplay.textContent = saveClickMultiplierLevelDisplay;
    }

    const saveUsername = localStorage.getItem("username");
    if (saveUsername !== null){
        state.username = saveUsername;
        elements.usernameDisplay.textContent = state.username;
    }
}