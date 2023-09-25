import { CodePicture, Code } from "./checkcode.js"

const CheckCode = Code.create(8);
console.log(CheckCode);

const check_el = CodePicture;
check_el.createPicture('.check');
const check = check_el.randomCode;
console.log(check);

const checkInput_el = document.getElementById('checkInput');
const submit_el = document.getElementById('submit');
const result_el = document.getElementById('result');
submit_el.addEventListener('click',()=>{
    let inputValue = checkInput_el.value;
    if(inputValue == check){
        result_el.innerHTML = '驗證成功!';
    }else{
        result_el.innerHTML = '驗證失敗!';
    }
});
