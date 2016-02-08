var request = require('request-promise');

var checkStockFighterApi = function() {
    var heartBeatUrl = 'https://api.stockfighter.io/ob/api/heartbeat';

    request(heartBeatUrl).then(function(response) {
        var parsedResponse = JSON.parse(response);
        var currentStatus = parsedResponse.ok;
        console.log('StockFighter OK: ' + currentStatus);

        return currentStatus;
    }).catch(function(err) {
        var parsedResponse = JSON.parse(err);
        return parsedResponse.error;
    });

}

module.exports = checkStockFighterApi;

checkStockFighterApi();
