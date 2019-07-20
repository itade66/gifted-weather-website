const request = require('request')
const geocode = (address, callback) => {
      const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaXRhZGVnaWZ0IiwiYSI6ImNqeHllZWxoMTA4cG8zZ3J6eHNybWtycDYifQ.sBtKBcOk25xbGFblqzK2Aw'

request({ url, json: true }, (error, { body }) => {
      if (error) {
            callback('Unable to connect to location service!', undefined)
      } else if (body.features.length === 0){
            callback('Unable to find location Try another search.', undefined)
      } else {
            callback(undefined, {
                  latitude: body.features[1].center[0],
                  longitude: body.features[0].center[1],
                  location: body.features[0].place_name
            })
      }

})

}
module.exports = geocode