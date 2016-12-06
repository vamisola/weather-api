const request = require('request');

var getWeather = (lat, lng, callback) => {
    // var encodedLatitude = encodeURIComponent(latitude);
    // var encodedLongitude = encodeURIComponent(longitude);
    request({
        url: `https://api.darksky.net/forecast/092f8248c7f386294c296facf4487f17/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};
        // if( !error && response.statusCode === 200){
        //     callback(body.currently.temperature);
        // }else{
        //   callback('Unable to fetch weather');
        // }
   

module.exports.getWeather = getWeather;

