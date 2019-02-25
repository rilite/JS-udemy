let num = 50;

if (num < 49) {
  console.log('Неверно!');
} else if (num > 100) {
  console.log('Много!');
} else {
  console.log('Верно!');
};


// тернарный оператор
(num == 50) ? console.log('Верно!') : console.log('Неверно!');


// Конструкция swich

switch (num) {
  case num < 49:
    console.log('Неверно!');
    break;
  case num > 100:
    console.log('Много!');
    break;
  case num > 800:
    console.log('Все еще много!');
    break;
  case 50:                                  // неправильная запись num == 50
    console.log('Верно!');
    break;
  default:
    console.log('Что-то пошло не так!');
    break;
}



