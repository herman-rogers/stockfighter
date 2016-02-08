var request = require('request-promise');

module.exports = {

    getStockVenues: function(venueName) {
        var uri = 'https://api.stockfighter.io/ob/api/venues/' + venueName +'/stocks';
        console.log('-stocks-');

        return this.requestData(uri);
    },

    getOrderBook: function(venue, stockSymbol) {
        var uri = 'https://api.stockfighter.io/ob/api/venues/' + venue + '/stocks/' + stockSymbol;
        console.log('-order book-');

        return this.requestData(uri);
    },

    requestData: function(uri) {
        return request(uri).then(function(reponse) {
            return JSON.parse(reponse); 
        }).catch(function(err) {
            console.log(err);
            return err;
        });
    }
}
