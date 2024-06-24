// 1. deposit money
// 2. determine number of lines to bet on
// 3. collect bet amount
// 4. spin slot machine
// 5. check if user won
// 6. give user winnings
// 7. play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const depositAmount = deposit();
console.log(depositAmount);
