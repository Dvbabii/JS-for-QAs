//Создайте функцию, которая принимает в качестве параметра целое число и возвращает значение true (истина), если число простое; иначе функция возвращает значение false (ложь).

function primeNum(num) {
  let bool = true;
  if (num > 2) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0)
        bool = false;
    }
  }
  console.log(bool);
}
primeNum(4);
primeNum(5);