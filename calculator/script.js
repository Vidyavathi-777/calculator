let display = document.getElementById("display")

function appendToDisplay(value){
    if(value === "%"){
        display.value=eval(display.value) / 100
    }
    display.value += value
}

function clearDisplay (){
    display.value=""
}

function calculateResult(){
    try{
        display.value = eval(display.value)
    }catch{
        display.value='error'
    }
}

function deleteoneEle (){
    display.value = display.value.slice(0,-1)
}