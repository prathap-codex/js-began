var input = document.getElementById("input");
var btn = document.getElementById("btn");
var result = document.getElementById("result");
var guessCount = document.getElementById("guessCount")

var guesses = 3;


//CREATING RANDOM NUMBER
var randomnumber = Math.floor(Math.random()*10)+1;
if(randomnumber>5){
    randomnumber = randomnumber-5
};

//OVER ALL EXECUTION
function checking(){
    if(input.value == randomnumber){
        alert("congralations Your are right")
        result.textContent = "You are right!"
    }

    else{
        guesses = guesses-1
        if(guesses == 0){
            alert("you are lost"+randomnumber)
        }
        guessCount.textContent = "Available guess:"+guesses
        result.textContent = "You are wrong!"
        
    }
}