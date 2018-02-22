var stringSimilarity = require('string-similarity');
var act = require('./actions');
var sound = require('./sound');
var sentenceProcessor = require('./sentence-processor');

const actions = {
    cornicheOff : {
        sentence : 'éteind corniche',
        action: act.cornicheOff
    },
    cornicheOn : {
        sentence : 'allume corniche',
        action: act.cornicheOn 
    },
    monterStore : {
        sentence : 'monte store',
        action: act.monterStore 
    },
    baisserStore : {
        sentence : 'baisse store',
        action: act.baisserStore 
    },
    bonneNuit : {
        sentence : 'bonne nuit',
        action: act.cornicheOn 
    }
}

const threshold = 0.7;

const getAction = function(sentence){
    let bestMatch = function(){
        sound.playError();
        console.log('je ne comprend pas')
    };
    let bestMatchThreshold = 0;
    Object.keys(actions).forEach(function(a){
        Object.keys(actions[a]).forEach(function(s){
            const phrase = actions[a].sentence;
            const match = stringSimilarity.compareTwoStrings(sentence, phrase);
            if (match > threshold && match > bestMatchThreshold) {
                bestMatch = actions[a].action;
            }
        });
    });
    return bestMatch;
}

module.exports = function(sentence){
    const sanitizedSentence = sentenceProcessor.sanitize(sentence);
    getAction(sanitizedSentence)();
}