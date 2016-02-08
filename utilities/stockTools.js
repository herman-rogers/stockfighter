var request = require('request-promise');

module.exports = {

    getStockVenues: function(venueName) {
        var uri = 'https://api.stockfighter.io/ob/api/venues/' + venueName +'/stocks';

        request(uri).then(function(response) {
            var parsedResponse = JSON.parse(response);

            return parsedResponse;
        }).catch(function(err) {
            console.log(err); 
        });
    }
}
