/*Создайте функцию, которая принимает в качестве параметров координаты центра и радиус окружности, а также координаты некоторой точки.
  Функция должна проверить, находится ли данная точка внутри окружности.
  */

function circlePoint(center_x, center_y, radius, x, y) {
  if ((x - center_x) ^ 2 + (y - center_y) ^ 2 < radius ^ 2 && radius > 0) {
    console.log("точка внутри окружности");
  } else if ((x - center_x) ^ 2 + (y - center_y) ^ 2 == radius ^ 2 && radius > 0) {
    console.log("точка на окружности");
  } else if ((x - center_x) ^ 2 + (y - center_y) ^ 2 > radius ^ 2 && radius > 0) {
    console.log("точка вне окружности");
  } else {
    console.log("радиус должен быть больше 0");
  }
}
circlePoint(0, 0, 10, 2, 2);
circlePoint(1, 1, 1, 2, 2);
circlePoint(1, 1, 2, 2, 2);
circlePoint(0, 0, 0, 0, 0);
circlePoint(-1, -1, -1, -2, -2);