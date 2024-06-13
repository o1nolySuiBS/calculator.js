const displey = document.getElementById("display")

function appendToDisplay(input){
    displey.value += input
}

function clearDisplay(){
    displey.value =""
}

function calculate(){
    try{
    displey.value = eval(displey.value)
    }
    catch (error){
        displey.value = "Error"
    }
}

//done