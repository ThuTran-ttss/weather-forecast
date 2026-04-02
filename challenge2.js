var weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]

// Log today's weather conditions to the console.
console.log(weatherForecast[0].conditions);
// Log Saturday's high temperature to the console.
console.log(weatherForecast[1].temperature.high);
// Log Saturday's sunrise time to the console.
console.log(weatherForecast[1].astronomy.sunrise);
// Log Sunday's conditions to the console.
console.log(weatherForecast[2].conditions);
// Log Sunday's sunset time to the console.
console.log(weatherForecast[2].astronomy.sunset);
// Use string template literals to build few sentences about the weather forecast for Sunday. 
console.log(`According to the forecast for Sunday, we are expecting a ${weatherForecast[2].conditions}. The thermal variation will range from a chilling low of ${weatherForecast[2].temperature.low}°F in the early morning to a peak high of ${weatherForecast[2].temperature.high}°F during the afternoon. Regarding the celestial schedule, the astronomy data confirms that the sunrise will occur at ${weatherForecast[2].astronomy.sunrise} AM, while the day will officially end with the sunset at ${weatherForecast[2].astronomy.sunset} PM.`);