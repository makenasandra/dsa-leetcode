/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const regExp = new RegExp(p);
    const res = s.match(regExp);
    if (res) {
        return res?.input === res[0];
    }
    return false;
};
const res = isMatch("aa", "a*")
console.log(res)

//Using recursion