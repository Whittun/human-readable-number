module.exports = function toReadable (number) {
    const textNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const numbersInTens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    let textNumber;

    number = number.toString();

    if (+number === 0) {
        textNumber = "zero";
    } else if (+number < 20) {
        textNumber = textNumbers[+number - 1]
    } else if (+number < 100) {
        textNumber = numbersInTens[+number[0] - 2]
        if (+number[1] !== 0) {
            textNumber += " " + toReadable(+number[1]);
        }
    } else if (+number < 1000) {
        textNumber = textNumbers[+number[0] - 1] + " " + "hundred";

        if (+number[1] !== 0 || +number[2] !== 0) {
            textNumber += " " + toReadable(+(number[1] + number[2]))
        }
    } 
        
    return textNumber
}
