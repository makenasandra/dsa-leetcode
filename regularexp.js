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
const isMatch2 = (s, p) => {
    if (!p) {
        if (s) {
            return false
        }
        return true;
    }
    const firstCharMatch = Boolean(s) && (s[0] === p[0] || p[0] === ".");
    if (pattern[1] === "*") {
        return isMatch(s.slice(1), p.slice(1))
    }
    return firstCharMatch ? isMatch(s.slice(1), p.slice(1)) : false;
}