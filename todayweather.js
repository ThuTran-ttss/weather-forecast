// //In your JavaScript file, instantiate and assign the following variables with information about the current weather:
// temperature should hold a number representing the current temperature in Fahrenheit
// conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
// sunriseTime should hold a string representing what time the sun rose this morning
// sunsetTime should hold a string representing what time the sun will set this evening
// Log each variable to the console.
// Use string template literals to combine these variables into a sentence about the weather. (Example: "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM.")

let temperature = 34;
let condition = "mostly sunny";
let sunriseTime = "05:49";
let sunsetTime = "06:04";
console.log(temperature);
console.log(condition);
console.log(sunriseTime);
console.log(sunsetTime);
console.log(`It's currently ${condition} and ${temperature} degrees Celcius. The sun rose this morning at ${sunriseTime} AM and will set at ${sunsetTime} PM.`)