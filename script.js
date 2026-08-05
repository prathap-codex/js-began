//SELLECTING ELEMENTS

var inputbox = document.getElementById("inputbox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var numberofguess = 3
//GENERATE RANDOM NUMBER

var randomnumber = Math.floor(Math.random()*10)+1
if(randomnumber>5)
{
    randomnumber = randomnumber-5
}

//EVENT HANDLER FUNCTION

function checkthenumber()
{
    if(inputbox.value == randomnumber)
    {
        alert("your guess is correct ! ")
        result.textContent = "You are right!"
    }
    else{
        numberofguess = numberofguess-1
        if(numberofguess == 0)
        {
            alert("Guess limit is reached. num is: "+randomnumber)
        }

        guesscount.textContent = "Avilable guess:"+numberofguess
        result.textContent = "You are wrong!"
    }
}