const clothInfo = {
    'shoe':   {'image': 'shoes.webp', 'count': 0},
    'jacket': {'image': 'jacket.jpg', 'count': 0},
    'hoodie': {'image': 'hoodie.jpg', 'count': 0},
    'shirt':  {'image': 'shirt.jpg',  'count': 0},
    'tshirt': {'image': 'tshirt.jpg', 'count': 0},
    'pant':   {'image': 'pant.jpg',   'count': 0},
}

document.addEventListener('DOMContentLoaded', () => {

    var cartAndFormContainer = document.getElementById('cart-and-form');
    var submitBtn = document.getElementById('submit-btn');
    var clothBtns = document.getElementsByClassName('button add-to-cart');
    var cart = document.getElementById('cart-items');
    var clearCartBtn = document.getElementById('clear-cart');

    for (let i = 0; i < clothBtns.length; i++) {

        clothBtns[i].onclick = () => {
            show(cartAndFormContainer);
            let clothType = clothBtns[i].dataset.cloth;
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
        hide(cartAndFormContainer);

        Object.keys(clothInfo).forEach(key => {
            clothInfo[key]['count'] = 0;
        })
    }
});

function bringImage (clothType) {
    let clothImageName = clothInfo[clothType]['image'];
    let clothCount = clothInfo[clothType]['count'];

    let imageString = `<img src='images/${clothImageName}'>`;
    let countString = `<button class="dot" id="${clothType}">${clothCount}</button>`
    return `<div class="cart-img-container">${imageString}${countString}</div>`
}

function increaseCount(clothType) {
    let count = clothInfo[clothType]['count'];
    document.getElementById(`${clothType}-count`).innerHTML = count;
}

function hide(elem) {
    elem.style.visibility = 'hidden';
}
function show(elem) {
    elem.style.visibility = 'visible';
}


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

