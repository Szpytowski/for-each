// 2
/*
function positiveNumFilter(numbers) {
  let positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  return positiveNumbers;
}

function positiveSum(numbers){
  const positiveNumbers = positiveNumFilter(numbers);
  let sum = 0
  for (let i = 0; i < positiveNumbers.length; i++) {
    sum = sum + positiveNumbers[i];
  }
  return sum
}


// we have to filter out the positive numbers
// we have to get the postive numbers and sumthem
*/
// now turn it into forEach

function positiveNumFilter(numbers) {
  const positiveNumbers = [];
  numbers.forEach(function (num) {
    if (num > 0) {
      positiveNumbers.push(num);
    }
  });
  return positiveNumbers;
}

function positiveSum(numbers) {
  const positiveNumbers = positiveNumFilter(numbers);
  let sum = 0;
  positiveNumbers.forEach(function (num) {
    sum += num;
  });
  return sum;
}

// 7
// make function
// make empty variable that stores the avarage
// loop the results and add it to the total score
/*
function getAverage(marks) {
  let totalScore = 0;
  for (let i = 0; i < marks.length; i++) {
    totalScore += marks[i];
  }
  let avarageScore = totalScore / marks.length;

  return Math.floor(avarageScore); // I found this https://www.w3schools.com/jsref/jsref_floor.asp#:~:text=JavaScript%20Math.floor()&text=The%20Math.floor()%20method,DOWN%20to%20the%20nearest%20integer.
}
*/
// now with for each
function getAverage(marks) {
  let totalScore = 0;
  marks.forEach(function (mark) {
    totalScore += mark;
  })
  return totalScore / marks.length;
}

const marksArray = [4, 5, 3, 4, 5];
console.log(getAverage(marksArray));

// 9
const vegetables = ['Carrot', 'Cabbage', 'Onion'];

function printVegetable(vegetable, index) {
  console.log(vegetable, index);
}

// Carrot 0
// Cabbage 1
// Onion 2

vegetables.forEach(printVegetable);

const fruits = ['Apple', 'Orange', 'Watermelon'];

fruits.forEach(function(fruit, index) {
  console.log(fruit, index);
});

// Apple 0
// Orange 1
// Watermelon 2
