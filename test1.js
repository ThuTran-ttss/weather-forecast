function printThreeDigitNumber(){
    let result = "";
    for (let i=999; i>= 100; i--)
    {result += i + " ";}
    return result;
}
console.log(printThreeDigitNumber());