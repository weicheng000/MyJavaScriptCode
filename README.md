# MyJavaScriptCode
## checkcode.js
使用以下語法引入:
```javascript
import { CodePicture, Code } from "./your_path/checkcode.js"
```
### Code 生成亂數
提供一個方法:

#### Code.create(number);
生成包含 `number` 位 `az`、`AZ`、`09` 的字串。

```javascript
//Example
console.log(Code.create(5)) //-> asf5q 
```
### CodePicture 生成驗證碼圖片
提供3個方法和1個屬性：

#### CodePicture.createPicture(width: number, height: number, backgroundColor: string, textColor: string);
預設生成一張寬120、高40，包含8位 a~z、A~Z、0~9 隨機數和5條寬度為5、顏色隨機的干擾線的圖片。

#### CodePicture.drawInterferenceLines(lineCount: number, lineWidth: number);
修改干擾線的數量和寬度。

#### CodePicture.createPicture('querySelector');
指定生成的圖片要掛載在哪裡，用法同 `document.querySelector()`。

#### CodePicture.randomCode;
該張圖片的內容，方便後續操作。
```javascript
//Example:
const a = CodePicture; // 採用預設  
a.drawInterferenceLines(10, 1) // 生成10條寬度為1的干擾線  
a.createPicture('#app'); // 在id = app的元素中生成一張預設尺寸的圖片  
console.log(a.randomCode); // 印出該張圖片的字串
```
