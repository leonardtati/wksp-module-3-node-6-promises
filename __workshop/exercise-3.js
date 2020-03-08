// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// Given a position (latitude and longitude), returns the position

const rq = require("request-promise");

function getCurrentTemperatureAtPosition(position) {
  return rq(
    `https://api.darksky.net/forecast/90a67178bda51fcbcc7252ae140b8330/${position.lat},${position.lng}`
  )
    .then(data => {
      const temperature = JSON.parse(data);


      return {
        temperature: temperature.currently.temperature
      };
    })
    .then(res => console.log(res));
}

//getCurrentTemperatureAtPosition({lat:37.8267, lng:-122.4233})

module.exports = {
  getCurrentTemperatureAtPosition
};
