// نوع دما
let type = prompt("Do you want to enter Celsius or Fahrenheit? (C/F)");


// مقدار دما
let temp = prompt("Enter the temperature:");
temp = Number(temp);


// تبدیل دما
if (type == "C") {
  const fahrenheit = (temp * 9 / 5) + 32;
  console.log(temp + "°C = " + fahrenheit + "°F");
} else if (type == "F") {
  const celsius = (temp - 32) * 5 / 9;
  console.log(temp + "°F = " + celsius + "°C");
}