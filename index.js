function fizzBuzz() {
    const result = []; // Initialize an empty array to store the values
  
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz"); // If divisible by both 3 and 5, store "FizzBuzz"
      } else if (i % 3 === 0) {
        result.push("Fizz"); // If divisible by 3, store "Fizz"
      } else if (i % 5 === 0) {
        result.push("Buzz"); // If divisible by 5, store "Buzz"
      } else {
        result.push(i); // Otherwise, store the number itself
      }
    }
  
    return result; // Return the final array
  }
   // Test the function by printing the resulting array
   console.log(fizzBuzz());


  //part2
  // Initial array of student scores
const scores = [85, 93, 78, 92, 88, 76, 95, 89];

// Step 1: Filter out scores below 80
const passingScores = scores.filter(score => score >= 80);
console.log("Passing Scores:", passingScores);

// Step 2: Add 5 bonus points to each passing score
const boostedScores = passingScores.map(score => score + 5);
console.log("Boosted Scores:", boostedScores);

// Step 3: Calculate the total class score by summing the boosted scores
const totalClassScore = boostedScores.reduce((acc, score) => acc + score, 0);
console.log("Total Class Score:", totalClassScore);

  
// Function to find the maximum and minimum values in an array
function findMaxAndMin(numbers) {
  let max = numbers[0];
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return { max, min };
}

// Prompt user to input numbers for the array
const userInput = prompt("Enter numbers separated by commas:");
const numberArray = userInput.split(",").map(Number); // Split the input and convert to an array of numbers

// Call the function with the user's array
const result = findMaxAndMin(numberArray);
console.log("Maximum:", result.max);
console.log("Minimum:", result.min);


 
  