const typeSelect = document.getElementById('type');
const nutsCheckbox = document.getElementById('nuts');
const bananasCheckbox = document.getElementById('bananas');
const syrupCheckbox = document.getElementById('syrup');
const whippedCreamCheckbox = document.getElementById('whippedCream');
const iceCreamCheckbox = document.getElementById('iceCream');
const totalPriceSpan = document.getElementById('totalPrice');

// Function to calculate and update the total price
function calculateTotalPrice() {
    let totalPrice = parseInt(typeSelect.value);

    // Add prices of toppings
    if (nutsCheckbox.checked) {
        totalPrice += 1;
    }
    if (bananasCheckbox.checked) {
        totalPrice += 1;
    }
    if (syrupCheckbox.checked) {
        totalPrice += 1;
    }

    // Add prices of extras
    if (whippedCreamCheckbox.checked) {
        totalPrice += 2;
    }
    if (iceCreamCheckbox.checked) {
        totalPrice += 3;
    }
} 

    // Update the final total price display
    function updateTotalPrice() {
        let price = calculateTotalPrice()
     
        const twoTotalPrices = document.querySelectorAll("[id='totalPrice']")
     
        twoTotalPrices.forEach((element) => {element.innerHTML = `$${price}`;
     
    });
    }
    updateTotalPrice();

// Event listener for pancake type changes
typeSelect.addEventListener('change', calculateTotalPrice);

// Event listeners for checkbox changes
nutsCheckbox.addEventListener('change', calculateTotalPrice);
bananasCheckbox.addEventListener('change', calculateTotalPrice);
syrupCheckbox.addEventListener('change', calculateTotalPrice);
whippedCreamCheckbox.addEventListener('change', calculateTotalPrice);
iceCreamCheckbox.addEventListener('change', calculateTotalPrice);

// Initial calculation
calculateTotalPrice();








// // part 2
// function totalPriceFinal() {
//     let totalPrice = parseInt(typeSelect.value);
// }

// if (deliveryOption1.selected){
//     totalPrice += 5;
// }