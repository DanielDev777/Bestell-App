import { restaurants } from './dishes.js';
import { saveToLocalStorage } from './scripts/restaurant.js';

function createListItem(item, i) {
    let listItem = `
        <div class="card radius pb20 mt20 mb20" value="${i}">
            <img src="${item.images.main}" id="card-banner">
            <div class="card-info pt20 pr20 pb20 pl20">
                <h2>${item.name}</h2>
                <div class="rating-group">
                    <img src="./assets/img/icons/star.svg">
                    <p><span id="rating">${item.rating}</span>/5</p>
                </div>
            </div>
            <div class="card-bottom-info pr20 pl20">
                <div class="delivery-cost pr20 d-flex align-items-center">
                    <img src="./assets/img/icons/delivery.svg">
                    <span id="delivery-cost">${item.deliveryCost.toFixed(2)}€</span>
                </div>
                <div class="delivery-time pr20 d-flex align-items-center">
                    <img src="./assets/img/icons/clock.svg">
                    <span id="delivery-time">${item.deliveryTime}</span>
                </div>
                <div class="min-price pr20 d-flex align-items-center">
                    <img src="./assets/img/icons/cost.svg">
                    <span id="min-price">${item.minOrderCost.toFixed(2)}€</span>
                </div>
            </div>
        </div>
    `;
    return listItem;
}

window.addEventListener('load', function() {
    if (checkPath()) {
        renderRestaurants();
        initListener();
    }
});

function checkPath() {
    if (window.location.pathname == '/Projekte/bestell-app/index.html' || window.location.pathname == '/Projekte/bestell-app/' || window.location.pathname == '/bestellapp/' || window.location.pathname == '/bestellapp/index.html') {
        return true;
    }
}

function initListener() {
    let cards = Array.from(document.getElementsByClassName('card'));
    cards.forEach(card => {
    card.addEventListener('click', moveToRestaurant);
});
}

function renderRestaurants() {
    let restListRef = document.getElementById('restaurant-list');
    restListRef.innerHTML = "";
    restaurants.forEach((item, index) => {
        restListRef.innerHTML += createListItem(item, index);
    })
}

function moveToRestaurant(e) {
    let restValue = e.currentTarget.getAttribute('value');
    let restaurant = restaurants[restValue];
    saveToLocalStorage('currentRestaurant', restaurant);
    window.location.href = "./restaurant.html";
}