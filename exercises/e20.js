// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // I noticed this only works when there's just 1 letter "a" in the name...otherwise produces duplicates! Perhaps there's a "numberOf" function that let's one if there's more than one duplicate letter, allowing one to "pop" the extras or something?
  let withA = [];
  let withoutA = [];
  for (const value of Object.values(array)) {
    withoutA.push(value);
    for (let letter of Object.values(value)) {
      if (letter === "a" || letter === "A") {
        withA.push(value);
        withoutA.pop(value);
      }
    }
  }
  return [withA, withoutA];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
