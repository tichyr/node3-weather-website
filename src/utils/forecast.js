const request  = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2676001e11a0fd7c3c460a1aca47690f&query=' + latitude + ',' + longitude + '&units=m'

    request({url, proxy:'http://10.90.112.45:3128', json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search!', undefined)
        } else  {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + '.')
        }
    })


}

module.exports = forecast