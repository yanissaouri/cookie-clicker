import { state } from "./gameState.js";
import { elements } from "./dom.js";
import { loadGame } from "./storage.js";
import { addCookie, startAutoClick, setUsername } from "./gameLogic.js";
import { autoClickShop, clickMultiplierShop } from "./upgrades.js";


document.getElementById("clickMe").addEventListener("click", () => {
    addCookie(state, elements);
});

elements.autoClickPriceDisplay.addEventListener("click", () => {
    autoClickShop(state, elements);
});

elements.clickMultiplierPriceDisplay.addEventListener("click", () => {
    clickMultiplierShop(state, elements);
});

document.getElementById("usernameSubmit").addEventListener("click", () => {
    setUsername(state, elements);
});

// document.getElementById("reset").addEventListener("click", resetGame);


loadGame(state, elements);

startAutoClick(state, elements)
