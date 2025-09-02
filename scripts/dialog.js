import { localItems, calculateItemPrice } from "./cart.js";

let dialog = document.getElementById('order-dialog');
let orderContent = document.getElementById('order-content');

document.addEventListener('order', openDialog);

function openDialog() {
    dialog.showModal();
    showOrderDetails(localItems);
}

function showOrderDetails(items) {
    let sum = 0;
    items.forEach(item => {
        sum += calculateItemPrice(item);
        orderContent.innerHTML += `<p>
            <span>${item.amount}x ${item.name}</span> <span>${calculateItemPrice(item).toFixed(2)}€</span>
        </p>`
    });
    orderContent.innerHTML += `
    <p class="pt20 pb10"><span>Lieferkosten:</span> <span>5.00€</span></p>
    <p><span>Summe:</span> <span>${(sum + 5).toFixed(2)}€</span></p>
    `;
}

dialog.addEventListener('click', closeDialog);

function closeDialog(e) {
    let closeBtn = document.getElementById('close');
    if (e.target === dialog || e.target === closeBtn || e.key === "esc") {
        dialog.close();
    }
    orderContent.innerHTML = "";
}