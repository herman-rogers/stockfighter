var stockTools = require('../utilities/stockApiWrapper.js');

function startBlockTrader() {
    console.log('| BLOCK TRADER |');

    stockTools.getStockVenues('OXEBEX').then(function(stockSymbols) {
        var symbols = stockSymbols.symbols;
        
        return stockTools.getOrderBook('OXEBEX', symbols[0].symbol); 
    }).then(function(orderBook){
       console.log(orderBook);
    }).catch(function(err) {
        console.log(err);
    });
}

module.export = startBlockTrader;

startBlockTrader();
