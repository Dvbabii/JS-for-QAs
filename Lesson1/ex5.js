//Создайте функцию, которая принимает в качестве параметров два целых числа (a и b) и выводит на экран все чётные числа из диапазона a...b.

function honest(a,b){
for (; a <= b; a++) {
  if (a % 2 == 0) {
  	console.log(a)
  }
}
}
honest(1,20);