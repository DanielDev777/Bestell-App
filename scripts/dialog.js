import { localItems, calculateItemPrice } from "./cart.js";

document.addEventListener('order', openDialog);

function openDialog() {
    let dialog = document.getElementById('order-dialog');
    dialog.showModal();
    showOrderDetails(localItems);
}

function showOrderDetails(items) {
    let orderContent = document.getElementById('order-content');
    let sum;
    console.log(items);
    items.forEach(item => {
        sum += calculateItemPrice(item);
        orderContent.innerHTML += `<p>
            ${item.amount}x ${item.name} - ${calculateItemPrice(item).toFixed(2)}€
        </p>`
    });
    orderContent.innerHTML += `<p>Summe: ${sum}</p>`
}