const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '     ': ' ',
};

function decode(expr) {
    let result = '';
    //"0000101010000011111100000011110000000010000011111100000011100000000010**********00001011100000000010000000101100001110100000101010**********0000000011001010101000000010100000101010"));
    let offset = 0;
    while (offset < expr.length) {
        let letter = expr.substr(offset, 10);

        var morseCode = '';
        //0000101010
        let smallOffset = 0;
        while (smallOffset < letter.length) {
            var twoSymbols = letter.substr(smallOffset, 2);
            if (twoSymbols == '11')
                morseCode += '-';
            else if (twoSymbols === '10')
                morseCode += '.';
            else if (twoSymbols == '**')
                morseCode += ' ';
            else // if twoSymbols == '00''
            {
                // do nothing
            }
            smallOffset += 2;
        }

        result += MORSE_TABLE[morseCode];

        offset = offset + 10;
    }
    return result;
}

module.exports = {
    decode
}