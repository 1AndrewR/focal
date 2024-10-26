// Roll a single six-sided die
const rollDie = () => Math.floor(Math.random() * 6) + 1;

// Roll a specified number of dice
const rollDice = (numDice) => {
  const results = [];
  for (let i = 0; i < numDice; i++) {
    results.push(rollDie());
  }
  return results;
};

// Number of dice to roll from the command line arguments
const numDice = parseInt(process.argv[2]);

// Join the results into a string
const rolledDice = rollDice(numDice);
console.log(`Rolled ${numDice} dice: ${rolledDice.join(', ')}`);