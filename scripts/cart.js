import { cartItems, saveToLocalStorage, getFromLocalStorage, setRestaurant, checkPath } from "./restaurant.js";

export let localItems = [];
export let sum = 0;

let orderEvent = new CustomEvent('order');
let calcEvent = new CustomEvent('calculated');
let cart = document.getElementById('cart');
let orderBtn = document.getElementById('order-btn');
let establishment;

function createCartItem(item, i) {
    let cartItem = `
    <div class="cart-item pt10 pb10">
        <h4 class="pb10">${item.name}</h4>
        <div class="cart-item-controls">
            <div class="cart-item-amount">
                <button class="minus-btn" class="radius" value="${i}">
                    <img src="./assets/img/icons/minus.svg">
                </button>
                <span class="pr10 pl10 item-amount">${item.amount}x</span>
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

document.body.addEventListener('load', init);

function init() {
    establishment = setRestaurant();
    if (localStorage.getItem(establishment.name + ' cart')) {
        localItems = getFromLocalStorage(establishment.name + ' cart');
        addItemsToCart(localItems);
    }
    initListeners();
}

function addItemsToCart(array) {
    cart.innerHTML = "";
    array.forEach((item, index) => {
        cart.innerHTML += createCartItem(item, index);
    });
    if (array.length > 0) {
        orderBtn.disabled = false;
    }
    localItems = array;
    calculateSum(array);
    saveToLocalStorage(establishment.name + ' cart', array);
    initListeners();
}

export function calculateItemPrice(item) {
    let itemPrice = item.price * item.amount;
    return itemPrice;
}

function calculateSum(array) {
    sum = 0;
    let subtotal = document.getElementById('subtotal');
    let total = document.getElementById('total');
    array.forEach(item => {
        sum += calculateItemPrice(item);
    });
    subtotal.innerHTML = `${sum.toFixed(2)}€`
    sum+= 5;
    total.innerHTML = `${(sum).toFixed(2)}€`
    if (array.length > 0) {
        document.dispatchEvent(calcEvent);
    }
    return sum;
}

function changeAmount(e) {
    
    let value;
    if (this.classList.contains('minus-btn')) {
        value = -1;
    } else if(this.classList.contains('plus-btn')) {
        value = 1;
    }
    localItems[this.value].amount += value;
    if (localItems[this.value].amount === 0) {
        removeItem(e);
    }
    saveToLocalStorage(establishment.name + ' cart', localItems);
    addItemsToCart(localItems);
    initListeners();
}

function initListeners() {
    let minusBtns = document.getElementsByClassName('minus-btn');
    let plusBtns = document.getElementsByClassName('plus-btn');
    let removeBtns = document.getElementsByClassName('rm-btn');
    
    Array.from(minusBtns).forEach((btn) => {
        btn.addEventListener('click', changeAmount);
    });
    Array.from(plusBtns).forEach((btn) => {
        btn.addEventListener('click', changeAmount);
    });
    Array.from(removeBtns).forEach((btn) => {
        btn.addEventListener('click', removeItem);
    });
    orderBtn.addEventListener('click', orderItems);
}

function removeItem(e) {
    if (!this) {
        localItems.splice(e.currentTarget.value, 1);
    } else {
        localItems.splice(this.value, 1);
    }
    saveToLocalStorage(establishment.name + ' cart', localItems);
    addItemsToCart(localItems);
    if (localItems.length === 0) {
        orderBtn.disabled = true;
    }
}

function orderItems() {
    document.dispatchEvent(orderEvent);
    cart.innerHTML = "";
    localItems = [];
    addItemsToCart(localItems);
    orderBtn.disabled = true;
}