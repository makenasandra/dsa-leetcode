/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    if (x < 0 || (x % 10===0 && x != 0)) return false;

    let revHalf = 0;
    while (x > revHalf) {
        
        let digit = x % 10;
        revHalf = revHalf * 10 + digit;
        x = Math.floor(x/10);
    }
    
    return (x === revHalf || x === Math.floor(revHalf / 10));
};

console.log(isPalindrome(14541))
