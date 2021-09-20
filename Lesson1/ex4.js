/*Создать функцию калькулятор. Передается 3 параметра: a, b и операция над ними.
*/

function calc(num1,num2,oper){
let result
switch (oper) {
case ("+"):
result = num1 + num2;
break;
case ("-"):
result = num1 - num2;
break;
case ("*"):
result = num1 * num2;
break;
case ("/"):
result = num1 / num2;
break;
case ("%"):
result = num1 % num2;
break;
default:
result = "wrong operator"
	}
console.log(num1+oper+num2+"="+result)
}
calc(8,3,"%");