export class MyModal {
    constructor(text) {
        // 創造背景
        this.background = this.createBackground();
        // 創造彈窗主體
        this.modalBase = this.createModalBase(this.background);
        // 創造彈窗內容
        this.modalContent = this.createModalContent(text);
        // 關閉事件
        this.background.addEventListener('click',(event)=>{
            if(event.target === this.background){
                this.background.classList.add('MyModalRemove');
                setTimeout(() => this.background.remove(), 500);
            }
        });
    }
    createBackground() {
        const background = document.createElement('div');
        background.classList.add('MyModal');
        document.body.appendChild(background);
        return background;
    }
    createModalBase(background){
        const base = document.createElement('div');
        base.classList.add('MyBase');
        background.appendChild(base);
        return base;
    }
    createModalContent(replace) {
        const content = document.createElement('div');
        content.classList.add('MyContent');
        const text = document.createElement('p');
        text.textContent = replace || "這是一個測試用的彈窗!";
        content.appendChild(text);
    
        this.modalBase.appendChild(content);
        return content;
    }
}