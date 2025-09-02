import { dishes } from './dishes.js';
import { sum } from './scripts/cart.js';

export let cartItems = [];

let addEvent = new CustomEvent('add-to-cart');
let cartBtn = document.getElementById('cart-btn');
let cartRef = document.getElementById('cart-wrapper');

window.addEventListener('load', function() {
    initListeners();
})

document.addEventListener('order', function() {
    initListeners();  
})

function addToCart(e) {
    let dish = dishes[e.currentTarget.value];
    if (localStorage.getItem('cart')) {
        cartItems = getFromLocalStorage('cart');
    }
    if (cartItems.findIndex(item => item.name === dish.name) !== -1) {
        let localItemIndex = cartItems.findIndex(item => item.name === dish.name);
        cartItems[localItemIndex].amount++;
    } else {
        dish.amount = 0;
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

export function saveToLocalStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}

export function getFromLocalStorage(name) {
    let value = JSON.parse(localStorage.getItem(name));
    return value;
}

window.addEventListener('scroll', function() {
    let currentScroll = this.window.scrollY + this.window.innerHeight;
    if (currentScroll >= (document.body.scrollHeight - 50)) {
        cartBtn.style.bottom = '59px';
    } else {
        if (cartBtn.style.bottom != '0px') {
            cartBtn.style.bottom = '0px';
        }
    }
})

cartBtn.addEventListener('click', openCart);

function openCart() {
    cartRef.classList.toggle('hide-mobile');
    if (!cartRef.classList.contains('hide-mobile')) {
        cartBtn.innerText = 'schließen';
    }  else {
        cartBtn.innerText = 'Warenkorb';
        showSumInButton();
    }
}

document.addEventListener('calculated', showSumInButton);

function showSumInButton() {
    if (cartRef.classList.contains('hide-mobile') && sum > 5) {
        cartBtn.innerText = `Warenkorb (${sum.toFixed(2)}€)`;
    }
}