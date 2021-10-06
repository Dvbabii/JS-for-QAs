/*
Task 1
Составьте программу, которая создаёт список из 10 элементов и заполняет его случайными положительными однозначными числами.
Программа должна подсчитать и вывести на экран произведение всех значений элементов списка
*/

function arraySum() {
  let randomArray = Array.apply(null, Array(10)).map(function() {
    return Math.round(Math.random() * 9);
  });
  console.log(randomArray);
  let sum = 0;
  for (let i = 0; i < randomArray.length; i++) {
    sum += randomArray[i];
  }
  console.log(sum);
}
arraySum();

/*
Task 2
Составьте программу, которая создаёт список и заполняет его 100-и случайными числами из диапазона 1...999.
Программа должна вывести на экран максимальное и минимальное значения элементов списка.
  */

function arraySum() {
  let randomArray = Array.apply(null, Array(100)).map(function() {
    return Math.round(Math.random() * 999);
  });
  console.log(randomArray);
  console.log(Math.min(...randomArray));
  console.log(Math.max(...randomArray));
}
arraySum();

/*
Task 3
Составьте программу, которая создаёт список из 1000 элементов и заполняет его случайными положительными двузначными числами.
Затем с клавиатуры вводится целое число x. Программа должна вывести на экран количество элементов списка, содержащих значение x.
*/

function arrayNum(num) {
  let randomArray = Array.apply(null, Array(10)).map(function() {
    return Math.round(Math.random() * 9);
  });
  console.log(randomArray);
  let numQant = 0;
  for (let i = 0; i < randomArray.length; i++) {
    if (num == randomArray[i]) {
      numQant++
    }
  }
  console.log(numQant);
}
arrayNum(1);

function testArrayNum() {
  const testCases = [
        [[11], 0],
  ];
  for (let oneCase of testCases) {
    let [params, expected] = oneCase;
    let result = arrayNum(...params);
    if (result !== expected) {
      throw `Ошибка в ${oneCase}. Ожидаемый результат ${expected} не равен ${result}`;
    }
  }
}
testArrayNum();

/*
Task 4
Выведите таблицу размером n×n, заполненную числами от 1 до n*n по спирали, выходящей из левого верхнего угла и закрученной по часовой стрелке.
*/

function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  console.log(results);
}
matrix(4);