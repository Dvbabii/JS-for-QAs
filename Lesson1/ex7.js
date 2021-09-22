//Создайте функцию, которая принимает в качестве параметра целое число и возвращает сумму его цифр.

  function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) sum += Number(str[i]);
    console.log(sum);
  }
  getDigitsSum(2349835988398403);