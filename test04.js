const index = compare(`It's aa pencil.`, `a pen`);
console.log(index);

function compare(str, subStr) {
    const len = str.length - subStr.length;
    for (let index = 0; index <= len; index++) {
        if (str[index] === subStr[0]) {
            if (compareBody(index)) {
                return index;
            }
        }
    }

    return -1;

    function compareBody(indexOfHead) {
        for (let char of subStr) {
            if (char !== str[indexOfHead]) {
                return false;
            }
            indexOfHead++;
        }
        return true;
    }
}