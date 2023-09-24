// 反轉陣列
const list = new Array(11,22,33,44,55);
for(let start=0, end=list.length-1; start < end; start++, end--){
    [list[start],list[end]] = [list[end],list[start]];
}
console.log(list);

