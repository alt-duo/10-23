
let y = Math.floor(Math.random() * 10 + 1);
let guess = 0;
let good = false;
document.getElementById("submitguess").onclick = function () {
    let x = document.getElementById("guessField").value;
    while(!(good)){ 
        if(guess != 0){
            x = prompt("WRONG! ENTER ANOTHER NUMBER");
        }
        guess++;
        if (x == y) {
            document.getElementById("custom-div").innerHTML = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESSES ";
            good = true;
        }

        else if (x > y) {
            guess++;
            document.getElementById("custom-div").innerHTML = "try a smaller number bruh";
        }
        else {
            guess++;
            document.getElementById("custom-div").innerHTML = "try a greater number bruh";
            
        }
    }
}
