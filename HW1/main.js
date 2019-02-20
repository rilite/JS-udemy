'use strict'; 

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

appData.expenses.point1 = point2;
appData.expenses.point3 = point4;

alert(appData.budget/30);