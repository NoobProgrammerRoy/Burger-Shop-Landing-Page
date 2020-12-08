var modal = document.getElementsByClassName('menu-modal')[0];
var closeBtn = document.getElementsByClassName('menu-modal-close')[0];
var navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function () {
        document.getElementById('nav-flex').classList.toggle('nav-flex-toggle');
});

closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.getElementById('modal').classList.toggle('modal');
});

function loadModal(name) {
        let dishName = "";
        let dishDescription = "";
        let dishPrice = "";

        if (name == 'Chicken') {
                dishName = 'Chicken Burger';
                dishDescription = 'A mouth-watering chicken burger consisting of a juicy chicken patty along with bacon jam and fries.';
                dishPrice = "Rs. 249/-";
        }
        else if (name == 'Veg') {
                dishName = 'Veg Burger';
                dishDescription = 'A mouth-watering veg burger made using a combination of 4 vegetables along with fried onions.';
                dishPrice = "Rs. 199/-";
        }
        else if (name == 'Mutton') {
                dishName = 'Mutton Burger';
                dishDescription = 'A mouth-watering mutton burger filled with grilled mutton kebabs and a fried egg.';
                dishPrice = "Rs. 299/-";
        }
        else if (name == 'Fish') {
                dishName = 'Fish Burger';
                dishDescription = 'A mouth-watering fish burger built using fish fillet and fish mayo.';
                dishPrice = "Rs. 249/-";
        }

        modal.style.display = 'block';
        document.getElementById('menu-modal-header').innerHTML = dishName;
        document.getElementById('menu-modal-desc').innerHTML = dishDescription;
        document.getElementById('menu-modal-price').innerHTML = dishPrice;
        document.getElementById('modal').classList.toggle('modal');
}