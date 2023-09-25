# MyJavaScriptCode
## checkcode.js
使用以下語法引入:
import { CodePicture, Code } from "./your_path/checkcode.js"
### Code 生成亂數
提供一個方法
#### Code.create( number );
生成 a~z, A~Z, 0~9 的 number 位數字串
##### Example:
Code.create(5) // console.log() -> asf5q
### CodePicture  生成驗證碼圖片
提供3個方法 1個屬性
#### CodePicture.createPicture(width: number, height: number, backgroundColor: string, textColor: string);
預設生成一張 寬120 高40 有8位 a\~z, A\~Z, 0~9 隨機數 有5條寬度為5、顏色隨機的干擾線 的圖片
#### CodePicture.drawInterferenceLines(lineCount : number, lineWidth : number);
修改干擾線的數量與寬度
#### CodePicture.createPicture('querySelector');
要將生成的圖片掛載在哪裡 用法同 documunt.querySelector();
#### CodePicture.randomCode;
該張圖片的內容 方便後續操作
##### Example:
const a = CodePicture; // 採用預設 \n
a.drawInterferenceLines(10,1) // 生成 10 條 寬度為1 的干擾線 \n
a.creatPicture('#app'); // 在 id = app 的元素裡 生成一張 預設尺寸的圖片 \n
console.log(a.randomCode); // 印出該張圖片的字串 \n

