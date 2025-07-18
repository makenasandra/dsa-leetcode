/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = 0;
    let multplier = 1;
    
    let numStrlen = (Math.abs(x).toString().length) - 1;

    let divisor = parseInt(`1${"0".repeat(numStrlen)}`);


    while (divisor > 0.1) {
        let res = Math.trunc(x / divisor);

        if (x > 0) {
            num += (res * multplier)
            x -= res * divisor;
        } else {
            num += (res * multplier)
            x -= res * divisor;

        }

        divisor /= 10;
        multplier *= 10;

    }
    
    return Math.abs(num) > Math.pow(2, 31)? 0: num;
};