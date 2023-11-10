function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputPin) {
            if (inputPin !== pin) return "Invalid PIN.";
            return `$${amount}`;
        },
        deposit(inputPin, depositAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            amount += depositAmount;
            return `Successfully deposited $${depositAmount}. Current balance: $${amount}.`;
        },
        withdraw(inputPin, withdrawalAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            if (withdrawalAmount > amount)
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            amount -= withdrawalAmount;
            return `Successfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
        },
        changePin(inputPin, newPin) {
            if (inputPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!";
        },
    };
}

module.exports = { createAccount };
