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