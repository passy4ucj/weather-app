const axios = require('axios')
const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicGFzc3k0dWNqIiwiYSI6ImNrbmlqenM3dDA4MnIyeG11ejFtcWczeWEifQ.6ilHr0K0fWwj62PTrCckJw`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}


// const geocode = async (address, callback) => {
//     const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicGFzc3k0dWNqIiwiYSI6ImNrbmlqenM3dDA4MnIyeG11ejFtcWczeWEifQ.6ilHr0K0fWwj62PTrCckJw`)
//     if(!response) {
//         callback('Unable to fetch data', undefined)
//     }
//     console.log(undefined, {
//         latitude: response.data.features[0].center[1],
//         longitude: response.data.features[0].center[0]
//     })
//     //return response
// }


module.exports = geocode