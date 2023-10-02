import { CodePicture } from "./checkcode.js"
import { MyModal } from "./MyModal.js";

const check_el = CodePicture;
check_el.createPicture('.check');
const check = check_el.randomCode;

const checkInput_el = document.getElementById('checkInput');
const submit_el = document.getElementById('submit');
const result_el = document.getElementById('result');
submit_el.addEventListener('click', () => {
    let inputValue = checkInput_el.value;
    if (inputValue == check) {
        result_el.innerHTML = '驗證成功!';
    } else {
        result_el.innerHTML = '驗證失敗!';
    }
});


const show = document.getElementById('target1');
show.addEventListener('click',()=>{
    const modal = new MyModal('JavaScript 啟動!');
});