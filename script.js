import { restaurants } from './dishes.js';

function createListItem(item, i) {
    let listItem = `
        <div class="card radius pb20 mt20 mb20">
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
                    <span id="min-price">${item.minOrderCost}€</span>
                </div>
            </div>
        </div>
    `;
    return listItem;
}

window.addEventListener('load', renderRestaurants);

function renderRestaurants() {
    let restListRef = document.getElementById('restaurant-list');
    restListRef.innerHTML = "";
    restaurants.forEach((item, index) => {
        restListRef.innerHTML += createListItem(item, index);
    })
}