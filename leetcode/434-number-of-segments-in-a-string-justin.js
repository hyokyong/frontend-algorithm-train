/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var regx = /([0-9A-Z',\-#@#!%^&*()_+\.])+/gi;

    var result = s.match(regx);
    return result ? result.length : 0;
};