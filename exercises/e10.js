// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let set = [];
  for (let user of array) {
    if (user.name) {
      for (let i of user.name) {
        if (i === letter.toUpperCase() || i === letter.toLowerCase()) {
          set.push(user.name);
          break;
        }
      }
    }
  }
  return set;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
