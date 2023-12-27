const request = require('request');
const geocode = require('./utils/geocode');

// const url = 'http://api.weatherstack.com/current?access_key=cb8a78c67c5d10508e15664bfa2031aa&query=pune&units=f';

// request(
//     {
//         url: url,
//         json: true,
//     },
//     (error, response) => {
//         // const data = JSON.parse(response.body);
//         console.log(response.body);
//         console.log(response.body.current);
//         console.log(`${response.body.current.weather_descriptions[0]}
//         It is currently ${response.body.current.temperature} degrees out. 
//         There is a  ${response.body.current.precip} % chance of rain. 
//         It feels like ${response.body.current.feelslike} degrees out`);
//     }
// );

// Geocoding 
// Address -> Lat/Long -> Weather

// curl "https://api.radar.io/v1/geocode/forward?query=841+broadway%2C+new+york%2C+ny&layers=address" \
//  -H "Authorization: prj_test_pk_35c74f59de62a8d739bdaa8d90b70ed058c62579" 

// const url = 'https://api.radar.io/v1/geocode/forward?query=mumbai';

// request(
//     {
//         url: url,
//         json: true,
//         headers: {
//             'Authorization': 'prj_live_pk_1dc764b95abd147f555ebdadcbf35ae6f0c06ea8',
//         },        
//     },
//     (error, response) => {
//         if (response) {
//             console.log(response.body.addresses[0].latitude);
//             console.log(response.body.addresses[0].longitude);
            
//         } else {
//             console.log(error);
//         }
//     }
// );

// const geoCode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0,
//         };
//         callback(data);
//     }, 2000);
// }
// geoCode('Mumbai', (data) => {
//     console.log(data);
// })

// const weatherForecast = (coordinates, callback) => {
//     const url = `http://api.weatherstack.com/current?access_key=cb8a78c67c5d10508e15664bfa2031aa&query=${coordinates.latitude,coordinates.longitude}`;
//     request({})
// }

// weatherForecast({latitude, longitude}, (error, response) => {

// });


geocode ('Burhanpur', (error, data) => {
    console.log('Error: ', error);
    console.log('data: ', data);
});