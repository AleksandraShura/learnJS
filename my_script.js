"use scrict";

// let input_array = document.getElementById('input_array');
// let text = document.getElementById('text');
// let button1 = document.getElementById('button1');
// let button2 = document.getElementById('button2');

// const separator = ","

// button2.addEventListener("click", () => {
//     if (input_array.value.length === 0) {
//         alert('Введите, пожалуйста, массив чисел!')
//     } else {
//     let arrayFromInput = stringsToArray(input_array.value, separator)
//     let oddNumsArr = oddNumbers(arrayFromInput)
//     text.textContent = oddNumsArr
//     }
// })

// button1.addEventListener("click", () => {
//     if (input_array.value.length === 0) {
//         alert('Введите, пожалуйста, массив чисел!')
//     } else {
//         let arrayFromInput = stringsToArray(input_array.value, separator)
//         let evenNumsArr = evenNumbers(arrayFromInput) 
//         text.textContent = evenNumsArr
//     }
// })

// function evenNumbers(array) {
//     return array.filter(element => element % 2 == 0)
// }

// function oddNumbers(array) {
//     return array.filter(element => element % 2 != 0)
// }

function print(message) {
    console.log(`${message}`)
}

// function stringsToArray(strings, separator) {
//     return strings.split(separator)
// }
// ---------------------------------------------------------------
let arrayTest1 = [2, 6, 392, 44, 29, 23.6, 22, 10, 7, 2109, -2]

// Метод every проверяет содержимое массива на условие лямбды 
// и возвращает булиан значение

// let isNumberSmall = (value) => value < 10

// print(`${arrayTest1.every(isNumberSmall)}`)

// ---------------------------------------------------------------
// Метод concat - обединяет два массива в один, не изменяя существующие массивы

// let arrayTest2 = [ 3, 4, 6, 7, 11, 998, 2.35, 11, 22, -54]

// let arrayTest3 = arrayTest1.concat(arrayTest2)
// ---------------------------------------------------------------
// Метод sort - сортирует массив в порядке возростания
// arrayTest3.sort((a, b) => a - b)

// print(arrayTest3)

// ---------------------------------------------------------------
// Метод filter - создает новый отфильтрованный массив

let resultArray = arrayTest1.filter(value => value < 100)
print(resultArray)
