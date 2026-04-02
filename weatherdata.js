// In your JavaScript file, copy and paste the following array:

// var highTemperatures = [55, 57, 53, 47, 56, 50];
// var lowTemperatures = [33, 30, 29, 35, 31, 32]; 
// Print the first high temperature to the console.
// Print the last low temperature to the console.
// What is the average high temperature from the data set?
// What is the average low temperature from the data set?

var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 
console.log(highTemperatures[0]);
console.log(lowTemperatures[5]);
// 3. What is the average high temperature from the data set?
let sumHighTemp = 0;
for (let i = 0; i < highTemperatures.length; i++){
    sumHighTemp+= highTemperatures[i];
}
console.log(`Average high temperature from the data set is : ${sumHighTemp/highTemperatures.length}`);
// 4. What is the average low temperature from the data set?
let sumLowTemp = 0;
for (let k = 0; k < lowTemperatures.length; k++){
    sumLowTemp+= lowTemperatures[k];
}
console.log(`Average low temperature from the data set is : ${(sumLowTemp/lowTemperatures.length).toFixed(2)}`);
// 5. What is the median high temperature from the data set?
highTemperatures.sort((a,b) => a -b)
let midIndex = parseInt(highTemperatures.length/2);
let median = 0;
if (highTemperatures.length%2 === 0) {median =( highTemperatures[midIndex-1] + highTemperatures[midIndex])/2;}
else {median = highTemperatures[midIndex];}
console.log(median);
// 6. What is the median low temperature from the data set?
lowTemperatures.sort((a,b) => a -b)
let midIndexLow = parseInt(lowTemperatures.length/2);
let medianLow = 0;
if (lowTemperatures.length%2 === 0) {medianLow =(lowTemperatures[midIndexLow-1] + lowTemperatures[midIndexLow])/2;}
else {medianLow = lowTemperatures[midIndexLow];}
console.log(medianLow);