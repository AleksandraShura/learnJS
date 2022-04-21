"use scrict";

let input_array = document.getElementById('input_array');
let text = document.getElementById('text');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

const separator = ","

button2.addEventListener("click", () => {
    if (input_array.value.length === 0) {
        alert('Введите, пожалуйста, массив чисел!')
    } else {
    let arrayFromInput = stringsToArray(input_array.value, separator)
    let oddNumsArr = oddNumbers(arrayFromInput)
    text.textContent = oddNumsArr
    }
})

button1.addEventListener("click", () => {
    if (input_array.value.length === 0) {
        alert('Введите, пожалуйста, массив чисел!')
    } else {
        let arrayFromInput = stringsToArray(input_array.value, separator)
        let evenNumsArr = evenNumbers(arrayFromInput) 
        text.textContent = evenNumsArr
    }
})

function evenNumbers(array) {
    let cacheArray = []
    for (let el of array) {
        if (el % 2 == 0) {
        cacheArray.push(el)    
        } 
    }
    return cacheArray
}

function oddNumbers(array) {
    let cacheArray = []
    for (let el of array) {
        if (el % 2 != 0) {
        cacheArray.push(el)    
        } 
    }
    return cacheArray
}

function print(message) {
    console.log(`${message}`)
}

function stringsToArray(strings, separator) {
    return strings.split(separator)
}


// console.log(`Четные числа ${evenNumsArr}`)
// console.log(`Нечетные числа ${oddNumsArr}`)

// button1.addEventListener("click", () => {
//     text.textContent = evenNumbers()
// })