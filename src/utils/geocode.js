const request = require('request')

const geocode = (address, callback) => {
    const url = 'api.weatherstack.com/current?access_key=7d6d4a90af74850661046695b8a75866&query=' + address

    //const url = 'api.weatherstack.com/current?access_key=7d6d4a90af74850661046695b8a75866&query=Texas'

    request({ url, json: true }, (error, { body }) => {

        /*if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }*/
    })
}

module.exports = geocode