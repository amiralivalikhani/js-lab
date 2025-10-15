let num = Number(prompt("enter number : "));


let factorial = 1; 


for (let i = 1; i <= num; i++) {
  factorial = factorial * i;
}


console.log("factorial " + num + " is = " + factorial);
