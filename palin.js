/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let i = 0
    let pali = s[0]

    function expand(ind, start, end) {
        let p = s[ind];
        while (end <= s.length) {
            if (!s[start] || !s[end] || s[start] !== s[end]) {
                break;
            } else {
                p = s.slice(start, end + 1); 0,1
                console.log({p})
                console.log({start, end})
                start--; 
                end++;
            }

        }
        return p
    }
    while (i <= s.length) {

        let even= expand(i, i, i + 1);
        let odd = expand(i, i-1, i+1)
      console.log({odd,even})
        if (odd?.length > pali.length) {
            pali = odd
        } else if (even?.length > pali.length){
pali = even
        }

        i++;
    }

    return pali
};

console.log(longestPalindrome("bb"));