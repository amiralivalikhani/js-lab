// گرفتن قد و وزن از کاربر
const height = prompt("Enter your height in centimeters:");
const weight = prompt("Enter your weight in kilograms:");


// تبدیل قد به متر
const heightInMeters = height / 100;


// محاسبه BMI
const bmi = weight / (heightInMeters * heightInMeters);


// بررسی
if (bmi < 18.5) {
    console.log("Your weight is underweight");
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("Your weight is normal");
} else if (bmi >= 25 && bmi < 30) {
    console.log("Your weight is overweight");
}