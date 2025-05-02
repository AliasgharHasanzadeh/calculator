const io = document.getElementById('io')
const btns = document.querySelectorAll('button');
let op = null
btns.forEach((btn)=>{
   btn.addEventListener('click',()=>{
    const lastChar = io.innerText.slice(-1);
    const isOperator = ['+', '-', '*', '÷'].includes(lastChar);
    
    if(btn.value>-1||btn.value<10){
        io.innerText = io.innerText + btn.value
    }else if(btn.value =='ac'){
        io.innerHTML=''
    }else if(btn.value =='+'){
        if (!isOperator) {
            io.innerText = io.innerText + btn.value
            op = '+'
            console.log(op);
        }
    }else if(btn.value =='-'){
        if (!isOperator) {
            io.innerText = io.innerText + btn.value
            op = '-'
            console.log(op);
        }
    }else if(btn.value =='*'){
        if (!isOperator) {
            io.innerText = io.innerText + btn.value
            op = '*'
            console.log(op)   
        }
    }
    else if(btn.value =='/'){
        if (!isOperator) {
            io.innerText = io.innerText + btn.innerText
            op = '/'
            console.log(op)   
        }
    }
    else if(btn.value =='clr'){
        const length = io.innerText.length
        io.innerText = io.innerText.substring(0,length-1)
    }
    else if(btn.value =='='){
        if(op =='+') {
            const nums = io.innerHTML.split('+')
            console.log(nums);
            const res = Number(nums[0]) + Number(nums[1])
            console.log(res);
            io.innerText = res
            op = ''
        }else if(op =='-') {
            const nums = io.innerHTML.split('-')
            console.log(nums);
            const res = Number(nums[0]) - Number(nums[1])
            console.log(res);
            io.innerText = res
            op = ''
        }else if(op =='*') {
            const nums = io.innerHTML.split('*')
            console.log(nums);
            const res = Number(nums[0]) * Number(nums[1])
            console.log(res);
            io.innerText = res
            op = ''
        }else if(op =='/') {
            const nums = io.innerHTML.split('÷')
            console.log(nums);
            const res = Number(nums[0]) / Number(nums[1])
            console.log(res);
            io.innerText = res
            op = ''
        }
        else{

        }
    }
   })
})