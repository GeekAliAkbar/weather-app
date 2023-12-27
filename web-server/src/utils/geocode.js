const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.radar.io/v1/geocode/forward?query=${encodeURIComponent(address)}`;
    request({
        url: url,
        json: true,
        headers: {
            'Authorization': 'prj_live_pk_1dc764b95abd147f555ebdadcbf35ae6f0c06ea8',
        },
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services !!', undefined);
        } else if (response.body?.meta?.code !== 200) {
            callback(response.body.meta.message, undefined);
            console.log(response.body.meta.message);
        } else if (response.body.meta?.code === 200 && response.body.addresses?.length === 0) {
            callback('Unable to finnd location. Try another search.', undefined);
        } else if (response.body.meta?.code === 200 && response.body?.addresses?.length > 0) {
            callback(undefined, {
                latitude: response.body.addresses[0].latitude,
                longitude: response.body.addresses[0].longitude,
                formattedAddress: response.body.addresses[0].formattedAddress,
            });
        }
    })
}

module.exports = geocode;