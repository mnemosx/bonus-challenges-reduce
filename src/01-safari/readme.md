## Task 1: Safari Animal Count

### Objective
Imagine you're a safari guide keeping track of all the animals you see on today's journey. Your group spots various animals, and you need to keep a count. Using the `.reduce()` method, count how many times each animal appears in a list.

### Example
- Input: `['elephant', 'zebra', 'elephant', 'lion', 'zebra', 'elephant']`
- Output: `{ elephant: 3, zebra: 2, lion: 1 }`

### Instructions
1. **Name your function `safariTally`.**
2. It accepts an array of animal names (strings).
3. Use the `.reduce()` method to create an object. Each key represents an animal, and its value is the number of times it's been spotted.
4. Imagine the output as a report you're going to present to your safari group. Make it accurate!

### Creative Challenge
Can you enhance your function so it can also handle different cases (e.g., 'Elephant' and 'elephant' are counted as the same animal)? How about sorting the final tally alphabetically by animal name?
