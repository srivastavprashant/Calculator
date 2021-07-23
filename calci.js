let total=0
let buffer="0"
let previous_operator
const screen = document.querySelector(".screen");

function button_click(value){
    
    if(isNaN(parseInt(value))){
        handle_symbol(value)
    }
    else{
        handle_number(value)
    }
    rerender()
}
function rerender(){
    screen.innerText=buffer
}
function handle_symbol(value){
    switch(value){
        case "C":
            buffer='0'
            total=0
            break
        case "←":
            if(buffer.length===1){
                buffer='0'
            }
            else{
                buffer=buffer.substring(0,buffer.length-1)
            }
            break
        case "=":
            if (previous_operator === null){
                return
            }
            flushoperation(parseInt(buffer))
            previousOperator=null
            buffer=""+total
            total=0
            break
        
        default:
        maths_solver(value)
        
    }

}
function maths_solver(value){
    const intBuffer=parseInt(buffer);
    if(total===0){
        total=intBuffer
    }
    else{
        flushoperation(intBuffer);
    }
    previous_operator=value
    buffer='0'

}
function flushoperation(intBuffer){
    if(previous_operator==="+"){
        total+=intBuffer
    }
    else if (previous_operator==="-"){
        total-=intBuffer
    }
    else if(previous_operator==="x"){
        total*=intBuffer
    }
    else{
        total/=intBuffer

    }
}
function handle_number(value){
    if(buffer==='0'){
        buffer=value
    }
    else{
    buffer=buffer+value
}
}
function init(){
    document.querySelector(".calc_buttons").addEventListener('click',function(event){
        button_click(event.target.innerText)
    })
}
init()

