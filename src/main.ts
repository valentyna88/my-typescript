import "./style.css";
// Task 1
// Напиши функцію, яка приймає масив чисел і повертає їхню суму.
// Додай типи до параметрів та результату функції.

const result = sumArray([1, 2, 3, 4]); // Очікується: 10
console.log(result);

function sumArray(arr: number[]): number {
  return arr.reduce((acc, el) => acc + el, 0);
}
