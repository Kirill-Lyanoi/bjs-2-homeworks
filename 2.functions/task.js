"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let x1, x2;
    
    if (d > 0) {
      x1 = (- b + Math.sqrt(d)) / (2 * a);
      x2 = (- b - Math.sqrt(d)) / (2 * a);
      arr.push (x1, x2);
    } else if (d === 0) {
      x1 = -b / (2 * a); 
      arr.push (x1);
    }
    return arr;
}
console.log(solveEquation(3, 2, 1));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = ((percent / 100) / 12);
  let s = amount - contribution;
  let n = countMonths;
  let mounthlyPayment = s * (p + (p / (((1 + p) ** n) - 1)));
  let totalAmount = (mounthlyPayment * n).toFixed(2);
  return Number(totalAmount);
}
console.log(calculateTotalMortgage(10, 1000, 20000, 24));