const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b796ab49b43dfd8ef994e80fa77fccff&query=' + latitude + ',' + longitude + '&units=f'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service!',undefined)
        }else if (body.error) {
            callback('Unable to find location',undefined)
        }else(
        callback(undefined,{
            weather_descriptions: body.current.weather_descriptions[0],
            temperature: body.current.temperature,
            feelslike: body.current.feelslike
        })
        )
    })
}


module.exports = forecast