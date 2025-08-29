import { dishes } from './dishes.js';

export let cartItems = [];

let addEvent = new CustomEvent('add-to-cart');

window.addEventListener('load', function() {
    initListeners();
})

function addToCart(e) {
    let btnValue = e.currentTarget.value;
    let dish = dishes[btnValue];
    if (localStorage.getItem('cart')) {
        cartItems = getFromLocalStorage('cart');
    }
    if (cartItems.findIndex(item => item.name === dish.name) !== -1) {
        let localItemIndex = cartItems.findIndex(item => item.name === dish.name);
        cartItems[localItemIndex].amount++;
    } else {
        dish.amount++;
        cartItems.push(dish);
    }
    saveToLocalStorage('cart', cartItems);
    document.dispatchEvent(addEvent);
}

function initListeners() {
    let addBtns = document.getElementsByClassName('add-btn');
    Array.from(addBtns).forEach(btn => {
        btn.addEventListener('click', addToCart);
    });
}

function saveToLocalStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}

function getFromLocalStorage(name) {
    let value = JSON.parse(localStorage.getItem(name));
    return value;
}