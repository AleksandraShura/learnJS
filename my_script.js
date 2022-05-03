"use scrict";

// function makeNegative(num) {
//     // let negative =  num > 0 ? num * -1 : num

//     // if(num > 0) {
//     //     negative = num * -1   
//     // } else {
//     //     negative = num
//     // }

//     return num > 0 ? num * -1 : num
// }
// console.log(makeNegative(8))


// function betterThanAverage(classPoints, yourPoints) {
//     classPoints.push(yourPoints)
//     let sumPoints = classPoints.reduce((sum, current) => sum + current)
//     let middlePoint = sumPoints / classPoints.length
    
//     return yourPoints > middlePoint ? true : false
    
//     // if( yourPoints > middlePoint ) {
//     //     return true
//     // } else {
//     //     return false
//     // }
// }
// console.log(betterThanAverage([2, 4, 6, 7], 7))


// function makeUpperCase(str) {
//     return str.toUpperCase()
// }
// console.log(makeUpperCase("привет"))


// function bmi(weight, height) {
//     let bmi = weight / (height * height)
   
//     if(bmi <= 18.5) {
//         return "Underweight"
//     } else if(bmi <= 25.0) {
//         return "Normal"
//     } else if(bmi <= 30.0) {
//         return "Overweight"
//     } else if(bmi > 30) {
//         return "Obese"
//     }   
// }
// console.log(bmi(71, 1.74))


// function even_or_odd(number) {
//     return number % 2 === 0 ? "Even" : "Odd"
// }
// console.log(even_or_odd(12))


// function lovefunc(flower1, flower2) {
//     let fl1 = flower1 % 2 === 0
//     let fl2 = flower2 % 2 === 0    
//     let a = true
//     if((fl1 == true && fl2 == true) || ((fl1 == false && fl2 == false))) {
//         a = false
//     }
//     return a
//   }
//   console.log(lovefunc(0, 0))


// function abbrevName(name){
//     let nameSplit = name.split(' ')

//     let nameSlice1 = nameSplit.slice(0).toLocaleString().charAt(0)
    
//     let nameSlice2 = nameSplit.slice(1).toLocaleString().charAt(0)
    
//     return nameSlice1 + "." + nameSlice2
// }

// console.log(abbrevName("Sasha Litvinova"))

// Переписанное задание Колей ==>

// function abbrevName(name){
//     let nameSplit = name.split(' ')
//     let nameSlice1 = sliceNum(nameSplit, 0)
//     let nameSlice2 = sliceNum(nameSplit, 1)
    
//     return nameSlice1 + "." + nameSlice2
// }

// function sliceNum(param, index) {
//     return param.slice(index).toString().charAt(0)
// }