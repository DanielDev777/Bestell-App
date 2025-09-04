import { establishment } from "./restaurant.js"; 

function createCard(item, i) {
    item = `
    <div class="card radius pt10 pr10 pb10 pl10 mb20">
        <h3 class="pb20">${item.name}</h3>
        <p class="pb10">${item.description}</p>
        <span class="price">${item.price.toFixed(2)}€</span>
        <button class="add-btn" value="${i}">
            <img src="./assets/img/icons/plus.svg">
        </button>
    </div>
    `;
    return item;
}

function renderDishes() {
    let mainRef = document.getElementById('main-course');
    let sideRef = document.getElementById('snacks');
    mainRef.innerHTML = "";
    sideRef.innerHTML = "";
    establishment.dishes.forEach((item, index) => {
        if (!item.side_dish) {
            mainRef.innerHTML += createCard(item, index);
        } else if (item.side_dish) {
            sideRef.innerHTML += createCard(item, index);
        }
    });
}

window.addEventListener('load', renderDishes);