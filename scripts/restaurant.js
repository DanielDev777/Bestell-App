import { sum } from './cart.js';

export let cartItems = [];

let addEvent = new CustomEvent('add-to-cart');
let cartBtn = document.getElementById('cart-btn');
let cartRef = document.getElementById('cart-wrapper');
export let establishment;

window.addEventListener('load', function() {
    if (checkPath()) {
        establishment = setRestaurant();
        document.title = establishment.name;
        initListeners();
        fillInfo();
    }
})

document.addEventListener('order', function() {
    initListeners();  
})

function addToCart(e) {
    let dish = establishment.dishes[e.currentTarget.value];
    if (localStorage.getItem(establishment.name + ' cart')) {
        cartItems = getFromLocalStorage(establishment.name + ' cart');
    }
    if (cartItems.findIndex(item => item.name === dish.name) !== -1) {
        let localItemIndex = cartItems.findIndex(item => item.name === dish.name);
        cartItems[localItemIndex].amount++;
    } else {
        dish.amount = 0;
        dish.amount++;
        cartItems.push(dish);
    }
    saveToLocalStorage(establishment.name + ' cart', cartItems);
    document.dispatchEvent(addEvent);
}

function initListeners() {
    let addBtns = document.getElementsByClassName('add-btn');
    Array.from(addBtns).forEach(btn => {
        btn.addEventListener('click', addToCart);
    });
    cartBtn.addEventListener('click', openCart);
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

function fillInfo() {
    let infoVars = initInfoVars();
    
    infoVars.nameRef.innerHTML = establishment.name;
    infoVars.ratingRef.innerHTML = establishment.rating;
    infoVars.bannerImg.src = establishment.images.main;
    infoVars.mainImg.src = establishment.images.mainDishes;
    infoVars.sideImg.src = establishment.images.sideDishes;
}

function initInfoVars() {
    let infoVars = {
        ratingRef: document.getElementById('rating'),
        nameRef: document.getElementById('restaurant-name'),
        bannerImg: document.getElementById('banner-img'),
        mainImg: document.getElementById('main-img'),
        sideImg: document.getElementById('side-img')
    }
    return infoVars;
}

function checkPath() {
    if (window.location.pathname == '/Projekte/bestell-app/restaurant.html' || window.location.pathname == '/Projekte/bestell-app/' || window.location.pathname == '/bestellapp/' || window.location.pathname == '/bestellapp/restaurant.html') {
        return true;
    }
}

export function setRestaurant() {
    let restaurant = getFromLocalStorage('currentRestaurant');
    return restaurant;
}