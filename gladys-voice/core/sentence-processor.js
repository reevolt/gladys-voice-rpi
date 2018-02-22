const pronoms = ['un', 'une', 'le', 'la', 'les', 'tu'];

String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find, 'g'), replace);
};

const sanitize = function(sentence){
    let s = sentence.replaceAll('\'', ' ');
    s = s.replaceAll(/\W*\b\w{1,2}\b/g, '');
    Object.keys(pronoms).forEach(function(i){
        const pronom = pronoms[i];
        s = s.replaceAll(pronom, '');
    });
    return s;
}

module.exports = {
    sanitize : sanitize
}