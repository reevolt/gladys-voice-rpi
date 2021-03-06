
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
        var args = {
            data: [
                { 'address': 'STORES_SEJOUR', 'value': false },
                { 'address': 'STORES_CUISINE', 'value': false }
            ],
            headers: { "Content-Type": "application/json" }
        };
        client.post("http://192.168.1.134:3000/scene", args, function(){});
    },
    baisserStore : function() {
        var args = {
            data: [
                { 'address': 'STORES_SEJOUR', 'value': 100 },
                { 'address': 'STORES_CUISINE', 'value': 100 },
                { 'address': 'STORES_SEJOUR_LAMELLE', 'value': 70 },
                { 'address': 'STORES_CUISINE_LAMELLE', 'value': 70 }
            ],
            headers: { "Content-Type": "application/json" }
        };
        client.post("http://192.168.1.134:3000/scene", args, function(){});
    },
    bonneNuit:  function() {
        var args = {
            data: [
                { 'address': 'STORES_SEJOUR', 'value': false },
                { 'address': 'STORES_CUISINE', 'value': false },
                { 'address': 'CUISINE_SWITCH', 'value': false },
                { 'address': 'CUISINE_LED_SWITCH', 'value': false },
                { 'address': 'CORNICHE_DIMMING', 'value': 30 },
                { 'address': 'SALLEMANGER_SWITCH', 'value': false },
                { 'address': 'STORES_PARENTS', 'value': true },
                { 'address': 'CORNICHE_SWITCH', 'value': false, 'delay': 15 },
            ],
            headers: { "Content-Type": "application/json" },
            requestConfig: {
                timeout: 20000,
            },
        };
        client.post("http://192.168.1.134:3000/scene", args, function(){});
    },
    hello:  function() {
        var args = {
            data: [
                { 'address': 'CUISINE_DIMMING', 'value': 30 },
                { 'address': 'CUISINE_LED_DIMMING', 'value': 30 },
                { 'address': 'CORNICHE_DIMMING', 'value': 30 },
            ],
            headers: { "Content-Type": "application/json" }
        };
        client.post("http://192.168.1.134:3000/scene", args, function(){});
    },
}

