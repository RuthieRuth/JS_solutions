/* 
# Basic ATM Simulator

Create a simple ATM program that allows a user to check their balance, deposit money, or withdraw money.Use functions, loops, and conditionals to perform these tasks and interact with the user.

## Requirements

1. Create a function called `checkBalance` to show the current balance to the user.

2. Write a function called `deposit` that takes an amount of money to add to the balance.If the amount is positive, add it to the balance.

3. Write a function called `withdraw` that takes an amount of money to subtract from the balance.It should only allow the withdrawal if the amount is positive and does not exceed the current balance.

4. Create a `main` function to repeatedly ask the user what they want to do (check balance, deposit, withdraw, or exit) until they choose to exit.

5. Use `prompt` to get user input and `alert` to show messages. */




//my first soln
function accountBalance() {

    let currentBalance = 100;
    let count = 0;


    while (true) {
        let intialAmount = prompt('what you want 1 (check balance) , 2 (withdraw), 3 (exit)')
        balance += intialAmount;


        let chooseOption = prompt('enter positive answer');

        if (chooseOption == 1 && chooseOption > 0) {
            alert(intialAmount);
        } else if (chooseOption == 2 && intialAmount - count(0 < count >= 100)) {
            alert(intialAmount);
        } else {
            if (chooseOption == 3);
            break;
        }
    }
}
accountBalance();


//soln 2
let currentBalance = 100;

function checkbalance() {
    alert('your current balance is checkbalance');
}

function deposit(intialAmount) {
    if (intialAmount > 0) {
        balance += intialAmount;
        alert(intialAmount);
    }
}
function withdraw(intialAmount) {
    if (intialAmount > 0 && intialAmount < currentBalance) {
        balance -= intialAmount;
        alert(intialAmount);
    } else if (intialAmount <= 0) {
        alert('invalid withdrawal amount and enter positive withdrawal amount');
    } else {
        alert('you cant over withdraw');
    }
}

function main() { }


// correct soln
let balance = 1000; // Initial balance

function checkBalance() {  // check balance
    alert(`Your current balance is: ${balance}`);
}

function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        alert(`Deposited ${amount}. Your new balance is: ${balance}`);
    } else {
        alert("Invalid deposit amount. Please enter a positive value.");
    }
}

function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        alert(`Withdrew ${amount}. Your new balance is: ${balance}`);
    } else {
        if (amount <= 0) {
            alert("Invalid withdrawal amount. Please enter a positive value.");
        } else {
            alert("Insufficient funds. You cannot withdraw more than your balance.");
        }
    }
}

function main() {
    while (true) {
        let choice = prompt("Enter your choice:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");
        choice = parseInt(choice); // Convert string to number

        if (isNaN(choice)) {
            alert("Invalid choice. Please enter a number.");
            continue; // Skip to the next iteration of the loop
        }

        switch (choice) {
            case 1:
                checkBalance();
                break;
            case 2:
                let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                deposit(depositAmount);
                break;
            case 3:
                let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
                withdraw(withdrawAmount);
                break;
            case 4:
                alert("Thank you for using the ATM. Have a nice day!");
                return; // Exit the loop and end the program
            default:
                alert("Invalid choice. Please enter a number between 1 and 4.");
        }
    }
}

// Start the ATM program
main();