// Функція filterArray приймає масив чисел (numbers) та значення (value) як параметри
function filterArray(numbers, value) {
  // Створюємо новий порожній масив для результату
  let result = [];
  // Проходимо по всіх елементах масиву numbers
  for (let number of numbers) {
    // Якщо число більше за value, додаємо його до масиву result
    if (number > value) {
      result.push(number);
    }
  }
  // Повертаємо масив result
  return result;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));