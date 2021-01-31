//find all the classes "giveup"
var giveUp = document.querySelectorAll(".giveup");
//create array where all the values will be gathered
const counter = [];

//for every individual tag within the "giveup" class, change from string to number then push to array
for (var gives of giveUp) {
  var num = parseFloat(gives.innerText, 10);
  counter.push(num);
}

//reduce individual values in counter to 1 single value
var total = counter.reduce((a, b) => a + b, 0);

//if total is less than 10, concatenate two 0's so it looks like 00X
//if total is less than 100, concatenate one 0 so it looks like 0XX
//display total value in "counter" id

//0 as a string to concatenate or something
const zero = "0";

//if total is 0, display three 0s, if less than 10, add two 0s, if less than 100, add one 0, otherwise display as it is
if (total < 10) {
  document.getElementById("counter").innerText = zero + zero + total;
} else if (total < 100) {
  document.getElementById("counter").innerText = zero + total;
} else {
  document.getElementById("counter").innerText = total;
}

// if you want to add an entry of how many times you've wanted to give up, simply create a tag with the class "giveup" and put a number in it
