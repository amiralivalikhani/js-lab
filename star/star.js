let num = Number(prompt("Enter a number:"));


for (let i = 1; i <= num; i++) {
  
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  
  console.log(star);
}