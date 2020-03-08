// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// While it's useful to get the current temperature for a specific lat/lng,
// most often we want to provide the name of a place instead.
//
// You already created a function that can do address ==> position,
// and one that can do position ==> temperature. For this exercise,
// re-use these two functions to create one that goes directly from address ==> temperature.
//
// You can copy/paste your code from the previous exercises,
// or require them at the top of this file.
// Remember to _export_ them from their file, if you plan on _requiring_ them.
const rq = require("request-promise");

const opencage = require("opencage-api-client")

const { getAddressPosition } = require("./exercise-2");

const { getCurrentTemperatureAtPosition }= require("./exercise-3");

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {

    getAddressPosition(address)
.then( res =>{
    
    getCurrentTemperatureAtPosition(res)
})



   
}

getCurrentTemperature('Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France');