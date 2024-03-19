// to numbers show in display

const showDisplay = (content) =>{
    display.value += content
    
    //showDisplay(content) in html funtion it will convert to 1 , 2, 3 or respective function 
}

// clear content

const clearDisplay = () => {
    display.value = ""
}

// evaluation

const showResult = () => {

    try{
      
        console.log(`try`);
        display.value = eval(display.value)

    }catch{

        console.log(`catch`);
        display.value  = ""
        display.placeholder = "Invalid input!!"
    }

}

// remove values

const removeValues = () =>{
    display.value = display.value.slice(0,-1)
}