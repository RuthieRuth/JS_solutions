const pancakeType = document.getElementById('type');
const nutsCheckbox = document.getElementById('nuts');
const bananasCheckbox = document.getElementById('bananas');
const syrupCheckbox = document.getElementById('syrup');
const whippedCreamCheckbox = document.getElementById('whippedCream');
const iceCreamCheckbox = document.getElementById('iceCream');
const totalPriceBelow = document.getElementById('totalPrice')

function newTotalPrice() {
    let totalPrice = parseInt(pancakeType.value);


    // prices of toppings if choosen 
    if (nutsCheckbox.checked) {
        totalPrice += 1;
    }  // no 'else' is needed since theres no need for any further action like *, -,/

    if (bananasCheckbox.checked) {
        totalPrice += 1;
    }

    if (syrupCheckbox.checked) {
        totalPrice += 1;
    }

    if (whippedCreamCheckbox.checked) {
        totalPrice += 2;
    }

    if (iceCreamCheckbox.checked) {
        totalPrice += 3;
    }

    totalPriceBelow.textContent = totalPrice; // why inside the condition?
}

nutsCheckbox.addEventListener('change', newTotalPrice);
bananasCheckbox.addEventListener('change', newTotalPrice);
syrupCheckbox.addEventListener('change', newTotalPrice);
whippedCreamCheckbox.addEventListener('change', newTotalPrice);
iceCreamCheckbox.addEventListener('change', newTotalPrice);


newTotalPrice();
