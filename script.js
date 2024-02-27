const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    // if(display.value=""){
    //     #c.innertext = "AC"
    // }
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error";
    }


    

}
