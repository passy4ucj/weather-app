const axios = require('axios')
const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0d8dae0e58be3060b39ddc12708613d3&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.location.name} is currently ${body.current.precip} degrees and will be ${body.current.weather_descriptions[0]}`)
        }
    })
}
// const forecast = (latitude, longitude, callback) => {
//     axios.get(`http://api.weatherstack.com/current?access_key=0d8dae0e58be3060b39ddc12708613d3&query=${latitude},${longitude}`)
//     .then(response => {
//         callback(undefined, `${response.data.location.name} is currently ${response.data.current.precip} degrees and will be ${response.data.current.weather_descriptions[0]}`)
//     })
//     .catch(error => {
//         callback(error, undefined)
//     })
// }



module.exports = forecast