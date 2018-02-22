
var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// direct way 
module.exports = {
    cornicheOn : function() {
        client.post("http://192.168.1.134:3000/write/CORNICHE_SWITCH?value=1", function(){});
    },
    cornicheOff : function() {
        client.post("http://192.168.1.134:3000/write/CORNICHE_SWITCH?value=0", function(){});
    },
    monterStore : function() {
        client.post("http://192.168.1.134:3000/write/STORES_SEJOUR?value=false", function(){});
        client.post("http://192.168.1.134:3000/write/STORES_CUISINE?value=false", function(){});
    },
    baisserStore : function() {
        client.post("http://192.168.1.134:3000/write/STORES_SEJOUR?value=true", function(){});
        client.post("http://192.168.1.134:3000/write/STORES_CUISINE?value=true", function(){});
    },
}

