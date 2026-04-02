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
let sumHighTemp = 0;
for (let i = 0; i < highTemperatures.length; i++){
    sumHighTemp+= highTemperatures[i];
}
console.log(`Average high temperature from the data set is : ${sumHighTemp/highTemperatures.length}`);
let sumLowTemp = 0;
for (let k = 0; k < lowTemperatures.length; k++){
    sumLowTemp+= lowTemperatures[k];
}
console.log(`Average low temperature from the data set is : ${(sumLowTemp/lowTemperatures.length).toFixed(2)}`);