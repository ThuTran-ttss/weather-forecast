// Log today's high temperature to the console.
// Log today's low temperature to the console.
// Log today's conditions to the console.
// Log today's sunrise time to the console.
// Use string template literals to create a more detailed description of today's weather.
let currentWeather = {
    temperature : {
        highTemperature: 36,
        lowTemperature : 25
    },
    condition : "mostly sunny",
    astronomy: {
        sunriseTime : "05:49",
        sunsetTime : "06:04"
    }
};

console.log(currentWeather.temperature.highTemperature);
console.log(currentWeather.temperature.lowTemperature);
console.log(currentWeather.condition);
console.log(currentWeather.astronomy.sunriseTime);
console.log(`Today's weather is ${currentWeather.condition} with a high of ${currentWeather.temperature.highTemperature}°C and a low of ${currentWeather.temperature.lowTemperature}°C. Sunrise was at ${currentWeather.astronomy.sunriseTime} AM and sunset will be at ${currentWeather.astronomy.sunsetTime} PM.`)