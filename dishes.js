export const restaurants = [
    {
        name: "Pizza Heaven",
        rating: 4.7,
        deliveryTime: "15 Min",
        deliveryCost: 5,
        minOrderCost: 12,
        images: {
            main: "./assets/img/main-banner.jpg",
            mainDishes: "./assets/img/pizza-banner.jpg",
            sideDishes: "./assets/img/pizza-rolls.jpg"
        },
        dishes: [
            {
                "name": "Pizza Salami",
                "price": 8.50,
                "description": "Steinofenpizza mit Tomatensoße, feinstem Gouda und großen Salamis",
                "side_dish": false,
                "amount": 0
            },
            {
                "name": "Pizza BBQ Bacon",
                "price": 12.00,
                "description": "Steinofenpizza mit Tomatensoße, feinstem Gouda, saftigen Baconstreifen, Zwiebeln und BBQ-Soße on top",
                "side_dish": false,
                "amount": 0
            },
            {
                "name": "Pizza Veggie",
                "price": 9.50,
                "description": "Steinofenpizza mit Tomatensoße, feinstem Gouda, Paprikastreifen, Cherry-Tomaten, Mais und Mozzarella",
                "side_dish": false,
                "amount": 0
            },
            {
                "name": "Pizza Monster",
                "price": 13.50,
                "description": "Steinofenpizza mit Tomatensoße, feinstem Gouda, Paprikastreifen, Mais, Mozzarella, Hackfleisch, Baconstreifen und BBQ-Chili-Soße on top",
                "side_dish": false,
                "amount": 0
            },
            {
                "name": "Pizza Brötchen",
                "price": 6.50,
                "description": "Handgemachte, fluffige Pizzabrötchen, überbacken mit Käse und Knoblauchbutter",
                "side_dish": true,
                "amount": 0
            },
            {
                "name": "Snack Rolls",
                "price": 8.50,
                "description": "Selbstgebackene Brötchenrolle, eingerollt mit Käse und Schinken",
                "side_dish": true,
                "amount": 0
            },
            {
                "name": "Lavacakes",
                "price": 3.50,
                "description": "3 heiße Lavacakes, Schokoladenlava so frisch wie die Lava aus dem Ätna",
                "side_dish": true,
                "amount": 0
            },
        ]
    },
    {
        name: "Pasta Plaza",
        rating: 4.2,
        deliveryTime: "25 Min",
        deliveryCost: 3,
        minOrderCost: 17,
        images: {
            main: "./assets/img/pasta-banner.jpg",
            mainDishes: "./assets/img/pasta-main.jpg",
            sideDishes: "./assets/img/pasta-side.jpg"
        },
        dishes: [
            {
                "name": "Spaghetti Bolognese",
                "price": 9.50,
                "description": "Klassische Pasta mit hausgemachter Rinderhackfleisch-Tomatensauce, langsam geschmort mit Kräutern und Rotwein.",
                "side_dish": false,
                "amount": 0
            },
            {
                "name": "Penne Arrabbiata",
                "price": 8.90,
                "description": "Pikante Tomatensauce mit Knoblauch, Chili und frischen Kräutern, serviert mit al dente gekochten Penne.",
                "side_dish": false,
                "amount": 0
            },
            {
                "name": "Tagliatelle Carbonara",
                "price": 10.50,
                "description": "Cremige Sauce aus Ei, Parmesan und Speckwürfeln – original nach italienischem Rezept, ohne Sahne.",
                "side_dish": false,
                "amount": 0
            },
            {
                "name": "Lasagne al Forno",
                "price": 11.90,
                "description": "Hausgemachte Lasagne mit geschichteter Bolognese, Béchamelsauce und geschmolzenem Käse, im Ofen goldbraun gebacken.",
                "side_dish": false,
                "amount": 0
            },
            {
                "name": "Knoblauchbrot",
                "price": 3.50,
                "description": "Frisches Baguette mit Kräuterbutter und Knoblauch, im Ofen knusprig gebacken.",
                "side_dish": true,
                "amount": 0
            },
            {
                "name": "Gemischter Beilagensalat",
                "price": 4.20,
                "description": "Frische Blattsalate, Tomaten, Gurken und ein leichtes Dressing nach Wahl.",
                "side_dish": true,
                "amount": 0
            },
            {
                "name": "Bruschetta Classica",
                "price": 4.90,
                "description": "Geröstetes Brot mit frischen Tomaten, Basilikum, Olivenöl und Knoblauch.",
                "side_dish": true,
                "amount": 0
            },
        ]
    }
];