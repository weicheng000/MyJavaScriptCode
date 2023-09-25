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
    create(length=5) {
        return this.checkCodeMaker.generate(length);
    }
}

class CodePictureMaker {
    constructor(width = 120, height = 40, backgroundColor = '#efefef', textColor = '#333333') {
        // 本體建構區
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        // #文字區
        // ##啟動繪圖
        this.ctx = this.canvas.getContext('2d');
        // ##先畫背景
        this.ctx.fillStyle = backgroundColor; //要可以改
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // ##再畫文字
        this.ctx.font = '200% Arial'; //要弄清楚這個屬性的結構，然後創造setter讓他可控
        this.ctx.fillStyle = textColor; //字體顏色區
        this.randomCode = Code.create(8); // 填充文字區，由checkcode.js生成，設計上只有create()一個接口
        // 文字變形
        this.ctx.transform(0.8, 0, 0.3, 1, 0, 0);
        // 文字位置區
        this.textWidth = this.ctx.measureText(this.randomCode).width; //計算文字寬度
        this.ctx.textBaseline = 'middle'; //文字水平置中
        // 計算繪圖位置 使之居中
        const x = (this.canvas.width - this.textWidth) / 2;
        const y = this.canvas.height / 2;
        this.ctx.fillText(this.randomCode, x, y);
        
        // 干擾線
        this.drawInterferenceLines();        
    }
    drawInterferenceLines(lineCount = 5, lineWidth = 5) {
        // 繪製干擾線的程式碼
        const randomColor = () => Math.floor(Math.random() * 256);
        const numLines = lineCount; //干擾線數量，要可以改
        for (let i = 0; i < numLines; i++) {
            const startX = Math.random() * this.canvas.width;
            const startY = Math.random() * this.canvas.height;
            const endX = Math.random() * this.canvas.width;
            const endY = Math.random() * this.canvas.height;
        
            this.ctx.strokeStyle = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, .5)`;
            this.ctx.lineWidth = lineWidth; // 線條寬度
            this.ctx.beginPath();
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(endX, endY);
            this.ctx.stroke();
        }
    }
    createPicture(element = 'body') {
        const target = document.querySelector(element);
        target.appendChild(this.canvas);
    }
}

export const Code = new CheckCode();
export const CodePicture = new CodePictureMaker();