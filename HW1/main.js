// 'use strict'; 

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let point1 = +prompt("Введите обязательную статью расходов в этом месяце", ""),
    point2 = +prompt("Во сколько обойдется?", ""),
    point3 = +prompt("Введите обязательную статью расходов в этом месяце?", ""),
    point4 = +prompt("Во сколько обойдется?", "");

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уроень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уроень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уроень достатка");
} else {
  console.log("Произошла ошибка");
}