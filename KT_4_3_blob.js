// вариант 24: Создайте массив Books с элементами «Лермонтов», «Достоевский». Удалите первый элемент массива. Вставьте «Тютчев» и «Пушкин» в начало массива. Добавьте «Толстой» в конец. Результат вывести в консоль.
var books = ["Лермонтов", "Достоевский"];

// Удаление первого элемента массива
books.shift();

// Вставка элементов в начало массива
books.unshift("Тютчев", "Пушкин");

// Добавление элемента в конец массива
books.push("Толстой");

// Вывод результата в консоль
console.log(books);