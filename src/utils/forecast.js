const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=859fb36d462eebb08c130b73a4a92b97`;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, `It's currently ${body.main.temp} degrees out. The high today is ${body.main.temp_max} with a low of ${body.main.temp_min}.`);
        }
    });
}

module.exports = forecast;