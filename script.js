function addCookie() {
    const add = document.getElementById("compteur");
    let cookieCount = parseInt(add.textContent);
    add.textContent = cookieCount + 1;
}

document.getElementById("clickMe").addEventListener("click", addCookie);

