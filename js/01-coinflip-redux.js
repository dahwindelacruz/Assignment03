let coinFlip;
let amountOfTimes = alert(`Please press OK to begin coin flip.`);
for (let i = 0; i <= 1; i += 1) {
    coinFlip = Math.round(Math.random() * 1);
        if (coinFlip == 0) {
            console.log(`Heads`);
            break;
        } else {
            console.log(`Tails`);
        }
    }
console.log(coinFlip);
