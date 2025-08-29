import { cartItems } from "../script.js";

let cart = document.getElementById('cart');

function createCartItem(item, i) {
    let cartItem = `
    <div class="cart-item pt10 pb10">
        <h4 class="pb10">${item.name}</h4>
        <div class="cart-item-controls">
            <div class="cart-item-amount">
                <button class="minus-btn" class="radius" value="${i}">
                    <img src="./assets/img/icons/minus.svg">
                </button>
                <span class="pr10 pl10" id="item-amount">${item.amount}x</span>
                <button class="plus-btn" class="radius" value="${i}">
                    <img src="./assets/img/icons/plus.svg">
                </button>
            </div>
            <span class="cart-item-price">${calculateItemPrice(item).toFixed(2)}€</span>
            <button class="rm-btn" class="radius" value="${i}">
                <img src="./assets/img/icons/trash.svg">
            </button>
        </div>
    </div>
    `;
    return cartItem;
} 

document.addEventListener('add-to-cart', function() {
    addItemsToCart(cartItems);
});

window.addEventListener('load', function() {
    if (localStorage.getItem('cart')) {
        let localItems = getFromLocalStorage('cart');
        addItemsToCart(localItems);
    }
    initListeners();
})

function addItemsToCart(array) {
    cart.innerHTML = "";
    array.forEach((item, index) => {
        cart.innerHTML += createCartItem(item, index);
    });
    calculateSum(array);
}

function getFromLocalStorage(name) {
    let value = JSON.parse(localStorage.getItem(name));
    return value;
}

function calculateItemPrice(item) {
    let itemPrice = item.price * item.amount;
    return itemPrice;
}

function calculateSum(array) {
    let subtotal = document.getElementById('subtotal');
    let total = document.getElementById('total');
    let sum = 0;
    array.forEach(item => {
        sum += calculateItemPrice(item);
    });
    subtotal.innerHTML = `${sum.toFixed(2)}€`
    total.innerHTML = `${(sum + 5).toFixed(2)}€`
}

function changeAmount() {
    console.log(this);
    
}

function initListeners() {
    let minusBtns = document.getElementsByClassName('minus-btn');
    let plusBtns = document.getElementsByClassName('plus-btn');
    let removeBtns = document.getElementsByClassName('rm-btn');
    
    Array.from(minusBtns).forEach((btn) => {
        btn.addEventListener('click', changeAmount);
    })
}