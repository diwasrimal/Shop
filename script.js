let clothInfo = {
    'shoe':   {'image': 'shoes.webp',  'count': 0},
    'jacket': {'image': 'jacket.jpg',  'count': 0},
    'hoodie': {'image': 'hoodie.jpg',  'count': 0},
    'shirt':  {'image': 'shirt.jpg',   'count': 0},
    'tshirt': {'image': 'tshirt.jpg',  'count': 0},
    'pant':   {'image': 'pant.jpg',    'count': 0},
    'jersey': {'image': 'jersey.webp', 'count': 0},
    'boots':  {'image':  'boots.webp', 'count': 0},
    'hat':    {'image': 'hat.webp',    'count': 0},
    'skirt':  {'image': 'skirt.jpg',   'count': 0},
    'bag':    {'image': 'bag.jpg',     'count': 0},
    'blazers':{'image': 'blazers.jpg', 'count': 0},
}

document.addEventListener('DOMContentLoaded', () => {

    let cartAndFormContainer = document.getElementById('cart-and-form');
    let submitBtn = document.getElementById('submit-btn');
    let clothBtns = document.getElementsByClassName('button add-to-cart');
    let cart = document.getElementById('cart-items');
    let totalPrice = document.getElementById('total-price');
    let clearCartBtn = document.getElementById('clear-cart');

    for (let i = 0; i < clothBtns.length; i++) {

        clothBtns[i].onclick = () => {
            show(cartAndFormContainer);
            show(submitBtn);
            let clothType = clothBtns[i].dataset.cloth;
            let clothPrice = clothBtns[i].dataset.price;
            addPrice(clothPrice);

            clothInfo[clothType]['count']++;
            
            let clothCount = clothInfo[clothType]['count'];
            let clothCountId = clothType;

            if (clothCount == 1) {
                cart.innerHTML += bringImage(clothType);
                hide(document.getElementById(clothCountId)); // brings cloth's image into cart and hides if first image
            }
            else {
                document.getElementById(clothCountId).innerHTML = clothCount;
                show(document.getElementById(clothCountId));
            }

        }
    }
    // When you clear the cart
    clearCartBtn.onclick = () => {
        cart.innerHTML = null;
        totalPrice.innerHTML = 0;
        hide(cartAndFormContainer);
        hide(submitBtn);

        Object.keys(clothInfo).forEach(key => {
            clothInfo[key]['count'] = 0;
        })
    }
    
    function bringImage(clothType) {
        let clothImageName = clothInfo[clothType]['image'];
        let clothCount = clothInfo[clothType]['count'];

        let imageString = `<img src='images/${clothImageName}'>`;
        let countString = `<button class="dot" id="${clothType}">${clothCount}</button>`
        return `<div class="cart-img-container">${imageString}${countString}</div>`
    }

    function addPrice(price) {
        // convert price to number and then add to the total price
        let addedPrice = Number(totalPrice.innerHTML.slice(1)) + Number(price.slice(1));
        totalPrice.innerHTML = `$${addedPrice}`;
    }

    function hide(elem) {
        elem.style.visibility = 'hidden';
    }
    function show(elem) {
        elem.style.visibility = 'visible';
    }

});

// Algorithm

// when item added to cart
    // show form
    // count occurence of that item's img
    // if first occurence
            // add inside cart
                // generate HTML string
            // find image inside cart
            // hide its count
        // else
            // find the image inside cart
            // increase its count 

