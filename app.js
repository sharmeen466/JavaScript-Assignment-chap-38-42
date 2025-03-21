//................................CHAP # 38-42 START.....................................//
//....................FUNCTIONS, SWITCH STATEMENT, WHILE..DO WHILE LOOPS...........................//

//  Q   #   01

// let a = Number(prompt("Enter a number"))
// let b = Number(prompt("Enter a power"))

// function power(a, b){
// let result = Math.pow(a, b)
// return result
// }

// document.write(a + "<sup>" + b + "</sup> = "+ power(a, b))
// power(a, b)

//  Q   #   02


// let year = Number(prompt("Enter any year, will show you, it's Leap year or not.."))

// function leapYear(year){

//     switch(year){
//        case 2012:
//        document.write("It's a Leap Year")
//        break;

//        case 2016:
//        document.write("It's a Leap Year")
//        break;

//        case 2020:
//        document.write("It's a Leap Year")
//        break;

//        default:
//        document.write("It's not a Leap Year")
//     }
// }
// leapYear(year)


//  Q   #   03


// let a = Number(prompt("Enter a length of one side of triangle"))
// let b = Number(prompt("Enter a length of sec side of triangle"))
// let c = Number(prompt("Enter a length of third side of triangle"))

// function area(a, b, c) {
// let S = sides(a, b , c)
// let result = S *(S - a)*(S - b)*(S - c)
// return result

// }
// function sides(a, b, c) {
//     return (a + b + c)/ 2
// }

// document.write(area(a, b , c))
// area(a, b, c)


//  Q   #   04


// let sub1 = Number(prompt("Enter your 1st subject marks"))
// let sub2 = Number(prompt("Enter your second subject marks"))
// let sub3 = Number(prompt("Enter your tird subject marks"))
// let total = Number(prompt("Enter Total Marks"))

// function main() {
// let ave = average(sub1, sub2, sub3)
// let percent = percentage(sub1, sub2, sub3, total)

// document.write("Your average marks is: "+ ave + "<br /> Your Percentage is: "+ percent)
// }

// function average(sub1, sub2, sub3) {
//     return ((sub1 + sub2+ sub3) / 3).toFixed(2)
// }

// function percentage(sub1, sub2, sub3, total) {
//     return (((sub1 + sub2+ sub3) / total) * 100).toFixed(2)
// }

// main()


//  Q   #   05

// let  str = prompt("Write a sentence")
// let character = prompt("Write a word to find")
// let index = -1

// function findIndex(str,character){
// for(let i = 0; i < str.length; i++){
//     if(character === str[i]){
//        break;
//     }
// }
// }
// if (str.indexOf(character) !== index){
//     document.write(`The index of ${character} is ${str.indexOf(character)}`);

// }
// else{

//     document.write(`${index}`);

// }
// findIndex(str,character)

//  Q   #   06


// let sentence = prompt("Enter a sentence")

// function vowels(sentence) {
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence.length > 25) {
//             document.write("The sentence must be under 25 words")
//             break;
//         }
//         else {
//             let result = sentence.replace(/[a,e,i,o,u,A,E,I,O,U]/g, '')
//             return document.write("Before: " + sentence + "<br /> After: " + result)
//         }
//     }
// }
// vowels(sentence)


//  Q   #   07


// let str = "“Pleases read this application and give me gratuity”".toLowerCase()
// let count = 0;
// let char = []
// function twoVowels(str) {
//     for (let i = 0; i < str.length; i++) {
//         let firstChar = str[i]
//         let secChar = str[i + 1]

//         if (isVowel(firstChar) && isVowel(secChar)) {
//             count++
//             let merged = firstChar + secChar
//             char.push(merged)
//         }
//     }
// }
// twoVowels(str)
// function isVowel(str) {
//     switch (str) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             return true;

//         default:
//             false
//     }
// }
// document.write(count + "<br />")
// document.write(char)



//  Q   #   08


// let distance = Number(prompt("Enter a distance between 2 cities in kilometers"))

// function meters(distance) {
//     let meterDistance = distance * 1000
//     return meterDistance
// }
// function feets(distance) {
//     let feetDistance = distance * 3280.84
//     return feetDistance
// }
// function inches(distance) {
//     let inchesDistance = distance * 39370
//     return inchesDistance
// }
// function cm(distance) {
//     let cmDistance = distance * 100000
//     return cmDistance
// }

// document.write("Your destination in km: " + distance + " km <br />")
// document.write("Your destination in meters: " + meters(distance) + " m <br />")
// document.write("Your destination in feets: " + feets(distance) + " feet<br />")
// document.write("Your destination in inches: " + inches(distance) + " inch <br />")
// document.write("Your destination in centimeters: " + cm(distance) + " cm <br />")

// meters(distance)
// feets(distance)
// inches(distance)
// cm(distance)


//  Q   #   09


// let regularHours = 40
// let extraWorkProfit = 12
// let extraHour = Number(prompt("Enter your Working Hours"))
// let overTime;

// function overTimeBonus() {
//     if (regularHours < extraHour) {
//         let overTime = extraHour - regularHours
//         extraWorkProfit = overTime * extraWorkProfit
//         return `Good Job 👌<br /> Your Over Time pay is Rs. ${extraWorkProfit}`;

//     }
//     else {
//         return `No Extra Time, No Extra Pay`
//     }
// }

// document.write(overTimeBonus())


//  Q   #   10


let userAmount = Number(prompt("Enter your amount")) // 280
let hundredNotes = 100
let fiftyNotes = 50
let tenNotes = 10

function withdrawNotes() {
    let amount1 = parseInt(userAmount / hundredNotes) // 280/100=2
    userAmount = userAmount - (amount1 * hundredNotes) // 280 - (2 *100) = 80
    console.log(userAmount); // 80

    let amount2 = parseInt(userAmount / fiftyNotes) // 80/50 = 1
   
    userAmount = userAmount - (amount2 * fiftyNotes) // 80 - (1*50) = 30
    console.log(userAmount); // 30

    let amount3 = parseInt(userAmount / tenNotes) // 30/10 = 3
    
    userAmount = userAmount - (amount3 * tenNotes) // 30 - (3*10) = 0
    console.log(userAmount); // 0

    document.write(`Quantity of hundred notes  are: ${amount1} <br />`)
    document.write(`Quantity of fifty notes  are: ${amount2} <br />`)
    document.write(`Quantity of ten notes  are: ${amount3}`)
    
}
withdrawNotes()
