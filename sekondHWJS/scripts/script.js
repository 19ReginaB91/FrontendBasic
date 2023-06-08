// Решение задачи №1:
let num = prompt("Введите число:");
let result = number * 0.1;
console.log("10% от числа:", result);

// Решение задачи №2:
let number1 = prompt("Введите первое число:");
let number2 = prompt("Введите второе число:");

if (number1 < number2) {
  console.log("Наименьшее число:", number1);
} else {
  console.log("Наименьшее число:", number2);
}

// Решение задачи №3:
let number = prompt("Введите число:");

if (number < 100) {
  console.log("Число меньше 100");
} else if (number > 100) {
  console.log("Число больше 100");
} else {
  console.log("Число равно 100");
}

// Решение задачи №4:
let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст (в годах):");

if (age >= 18) {
  console.log("Hello, " + name);
} else {
  console.log("Hi, " + name);
}