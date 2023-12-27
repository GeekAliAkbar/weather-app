const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    const url = `http://api.weatherstack.com/current?access_key=cb8a78c67c5d10508e15664bfa2031aa&query=${latitude,longitude}&units=f`;


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.humidity + '% chance of rain.')
            // callback(undefined, body);

        }
    })
}

module.exports = forecast