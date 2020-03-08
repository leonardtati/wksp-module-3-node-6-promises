// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
// Again here you should re-use two previously created functions, plus the `getDistance` function provided to you in `workshop.js`.
//
// One of the functions does address ==> position and the other simply does nothing ==> position.
// The `getDistance` function needs the two positions to compute the final value.


// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition

const rp = require('request-promise');

const opencage = require('opencage-api-client')

const { getIssPosition } = require('./exercise-1');

const{ getAddressPosition } = require('./exercise-2')

// Euclidian distance between two points
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
  }
function getDistanceFromIss(address) {


  const getIssPos = getIssPosition()
  .then (getIssPos=> position.pos=pos1)
  .then(()=> getAddressPosition(address))
  .then(adress=> position.pos=pos2)
  .then(()=> getDistance(pos1, pos2))
        
       

        //something wrong with my getAddressPosition function
    };
   



getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
