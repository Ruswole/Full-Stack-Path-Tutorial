// document.getElementById("count-el").innerText = 5;

// let count = 5;

// count = count + 1;
// console.log(count);
// cmd+k+C
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);

// 1. Create two variables, myAge and humanDogRatio.
// 2. Multiply the two together and store the result in a variable named myDogAge.
// 3. Log myDogAge to the console.

// let myAge = 35;
// let humnanDogRatio = 7;

// let myDogAge = myAge * humnanDogRatio;

// console.log(myDogAge);

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function increment() {
//   console.log("The button was clicked");
// }

let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
  console.log(count);
}
