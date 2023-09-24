class CheckCodeMaker {
    constructor() {
        this.charArray = [];
        for (let i = "0".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
            const char = String.fromCharCode(i);
            if (/[a-zA-Z0-9]/.test(char)) {
                this.charArray.push(char);
            }
        }
    }
    generate(length) {
        const checkCode = [];
        const random = () => Math.floor(Math.random() * this.charArray.length);
        for (let i = 0; i < length; i++) {
            checkCode.push(this.charArray[random()]);
        }
        return checkCode.join("");
    }
}
class CheckCode {
    constructor() {
        this.checkCodeMaker = new CheckCodeMaker();
    }
    create(length) {
        return this.checkCodeMaker.generate(length);
    }
}
const Code = new CheckCode();
export default Code;