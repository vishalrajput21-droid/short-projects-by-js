
const count=document.querySelector('p');
const btn1=document.querySelector('.increase');
const btn2=document.querySelector('.reset');
const btn3=document.querySelector('.decrease');
let num=0;
btn1.addEventListener('click',function(){
    num++;
    count.textContent=num;
});

btn2.addEventListener('click',function(){
    num=0;
    count.textContent=num;
});
btn3.addEventListener('click',()=>{
    if(num > 0){
        num--;
        count.textContent=num;
    }
});

