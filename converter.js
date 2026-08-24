console.log("This is the class activity for Week 4 in week 6");

const convertToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
}

const convertToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5/9;
}

module.exports = { celsiusToF: convertToFahrenheit, fToCelsius: convertToCelsius };