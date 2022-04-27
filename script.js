const clothInfo = {
    'shoe':   {'image': "<div><img src='images/shoes.webp'></div>",   'quantity': 0},
    'jacket': {'image': "<div><img src='images/jacket.jpg'></div>",   'quantity': 0},
    'hoodie': {'image': "<div><img src='images/hoodie.jpg'></div>",   'quantity': 0},
    'shirt':  {'image': "<div><img src='images/shirt.jpg'></div>",    'quantity': 0},
    'tshirt': {'image': "<div><img src='images/tshirt.jpg'></div>",   'quantity': 0},
    'pant':   {'image': "<div><img src='images/pant.jpg'></div> ",    'quantity': 0},
}

document.addEventListener('DOMContentLoaded', () => {
    let clothBtns = document.getElementsByClassName('button add-to-cart');
    // let proceedBtn = document.getElementById('proceed-btn');
    let cart = document.getElementById('cart-items');
    let totalClothCount = 0;

    for (let i = 0; i < clothBtns.length; i++) {
        let clothBtn = clothBtns[i];
        clothBtn.addEventListener('click', () => {
            openForm();

            // Not more than 8 items are allowed to choose
            // if (totalClothCount >= 8) {
            //     alert("Max items reached!");
            // } else {
                let clothType = clothBtn.dataset.cloth;
                cart.innerHTML += clothInfo[clothType]['image'];
                clothInfo[clothType['quantity']]++;
                totalClothCount++;
                console.log(totalClothCount);
        });
    }
});

function openForm() {
    document.getElementById('cart-and-submit').style.visibility = 'visible';
    document.getElementById('submit-btn').style.visibility = 'visible';
}

