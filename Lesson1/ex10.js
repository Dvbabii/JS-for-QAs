//Создайте функцию, которая принимает в качестве параметров координаты x и y точки и возвращает одно из значений 1, 2, 3 или 4 – в зависимости от того, в какой четверти системы координат находится точка. В случае, если точка находится на, как минимум, одной из осей координат, функция возвращает -1.

function axesSystem(x, y) {
  let quarter
  if (x > 0 && y > 0) {
    quarter = 1
  } else if (x < 0 && y > 0) {
    quarter = 2;
  } else if (x < 0 && y < 0) {
    quarter = 3;
  } else if (x > 0 && y < 0) {
    quarter = 4;
  } else {
    quarter = -1;

  }
  console.log(quarter);
}
axesSystem(1, 2)
axesSystem(-1, 2)
axesSystem(-1, -2)
axesSystem(1, -2)
axesSystem(1, 0)
axesSystem(0, 1)
axesSystem(0, 0)