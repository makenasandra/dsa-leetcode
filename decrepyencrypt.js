/**
 * A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

Create a ShiftCipher class that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
decrypt: takes an encrypted message and returns a lowercase string with each letter shifted back in the alphabet based on the set shift value.
In both methods, any character outside the alphabet should remain the same.
But if a character is shifted outside the alphabet in either direction, it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 results in z.

Example:

const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'

Feel free to reference the Unicode Table as well as the JavaScript String methods including: toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()
 */

// Write class below
class ShiftCipher {
    constructor(shift) {
        this.shift = shift;
        this.minCode = 65;
        this.maxCode = 90;
    }

    encrypt(text) {
        text = text.toUpperCase();
        let str = ""
        for (let i = 0; i < text.length; i++) {
            let code = text.charCodeAt(i);
            if (code >= this.minCode && code <= this.maxCode) {
                code += this.shift;

                if (code > this.maxCode) {
                    code = (this.minCode + (code - this.maxCode)) - 1

                }
                str += String.fromCharCode(code);
            } else {
                str += text[i];
            }
        }
        return str;
    }

    decrypt(text) {
        text = text.toUpperCase();
        let str = ""
        for (let i = 0; i < text.length; i++) {

            let code = text.charCodeAt(i);
            if (code >= this.minCode && code <= this.maxCode) {
                code -= this.shift;

                if (code < this.minCode) {
                    code = (this.maxCode - (this.minCode - code)) + 1
                }

                str += String.fromCharCode(code);
            } else {
                str += text[i];
            }
        }
        return str.toLowerCase();
    }
}
const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
const cipher2 = new ShiftCipher(1);
console.log(cipher2.decrypt('B')); 