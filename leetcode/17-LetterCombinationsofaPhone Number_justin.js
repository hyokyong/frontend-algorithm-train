/**
 * Created by front on 2019-11-01.
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let keyMap = {
        '1': '',
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    if (digits.length <= 1){
        if(keyMap[digits]) {
            return Array.from(keyMap[digits])
        } else {
            return [];
        }
    }

    let index = 1;

    recursiveIt(digits.slice(0, index), digits[index]);

    function recursiveIt (digitA, digitB) {
        let array = [];
        if (index >= digits.length) return;
        let wA = keyMap[digitA];
        let wB = keyMap[digitB];


        for (let i = 0; i < wA.length; i++) {
            for (let j = 0; j < wB.length; j++) {
                array.push(wA[i] + wB[j]);
            }
        }

        keyMap[digitA + digitB] = array;
        recursiveIt(digits.slice(0, ++index), digits[index]);
    }

    return keyMap[digits]
};