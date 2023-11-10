function guessingGame() {
    const answer = Math.floor(Math.random() * 100);
    let guesses = 0;
    let found = false;

    return function guess(num) {
        if (found) return "The game is over, you already won!";
        guesses++;
        if (num === answer) {
            found = true;
            const guess = guesses === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${guesses} ${guess}.`;
        }
        if (num < answer) return `${num} is too low!`;
        if (num > answer) return `${num} is too high!`;
    };
}

module.exports = { guessingGame };
