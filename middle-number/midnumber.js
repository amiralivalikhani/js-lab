// گرفتن سه عدد از کاربر
let a = Number(prompt("Enter number one:"));
let b = Number(prompt("Enter number two:"));
let c = Number(prompt("Enter number three:"));

// پیدا کردن عدد وسط با فرمول ریاضی
let middle = a + b + c - Math.max(a, b, c) - Math.min(a, b, c);

// نمایش عدد وسط
console.log(middle);