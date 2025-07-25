        //single line comment//
        /*multi line comment*/

        //mimicking our D&D death saving throws -- tracking our success rolls and failure rolls
        //i had to learn this the hard way-- these "let" statements come before the function because otherwise it will NOT COUNT the "successes" and "failures" through multiple rolls
        let successes = 0;
        let failures = 0;

        //this function will initiate the game
        function rollDice(){
        //we are displaying this message to the console to help see how the program is running
        console.log("rollDice function called");

        //setting up variables for our required dice rolls
        let die1=playDie();

        //setting up console logs for our said dice rolls for troubleshooting reasons
        console.log("die1=" + die1);

        //defining the sum variable, which is the result of our roll
        let sum = die1;
        
        //these variables create nicknames to help us create visual text for our game in our html
        let divSucceeds = document.getElementById("divSucceeds");
        let divFails = document.getElementById("divFails");
        let divDie = document.getElementById("divDie");
        let divResult = document.getElementById("divResult");

        //reset text after win or loss to avoid user confusion
        divResult.textContent = "Game Result"

        //= changes value, == checks for equality, === for STRICT equality (data type also, not just value)
        //if user rolls a 1, critical fail and they instantly lose. this will set the "failures" variable to 3
        if (sum == 1){
        failures += 3;
        console.log("Critical fail! You lose consciousness!")
        }

        //if user rolls a 20, they instantly win. this will set the successes variable to 3.
        else if (sum == 20){
        successes += 3;
        console.log("Critical success! Your condition stabilizes!")
        }

        //if user rolls less than 10, they accumulate a failure
        else if(sum < 10){
        failures += 1;
        console.log("Roll failed. You're one step closer to death...")
        }

        //if user rolls more than or equal to 10, they accumulate a success
        else if(sum >= 10){
            successes += 1;
            console.log("Roll success! You're fine... For now.")
        }

        //if user loses, game resets to 0. announces game result
        if (failures >= 3){
            console.log("You failed. You lose consciousness.")
            failures = 0
            successes = 0
            divResult.textContent = "You lose! You lose consciousness."
        }

        //if user wins, game resets to 0. announces game result.
        else if (successes >= 3){
            console.log("You succeeded. Your condition stabilizes.")
            successes = 0
            failures = 0
            divResult.textContent = "You win! Your condition stabilizes."
        }

        //did I correctly comprehend "else if" statements? I'm struggling with those specifically-- I feel like I don't know when to use them.

        //changing the text in our HTML elements
        divSucceeds.textContent = "Successes: " + successes;
        divFails.textContent = "Failures: " + failures;
        divDie.textContent = "Dice roll: " + die1;
        }
        
        //this function will simulate our dice roll
        function playDie(){
        //math.random picks a random number between 0 and 1, then we multiply by 20 for our game, a D20
        let randomNumber = Math.random() * 20;
        //rounds the result to the next whole number (1-6 instead of 0-5)
        randomNumber = Math.ceil(randomNumber);
        //output our dice roll
        return randomNumber;

        /*I didn't initially know how to make this DnD game by myself. I used chatgpt to educate myself and learn. I did not copy chatgpt code. 
        
        Here is the link to the conversation I had with the AI, for proof that this is my code and I did not copy/paste. 
        
        I just want to be 100% honest with you that I do use AI-- but I NEVER copy/paste from it. For me, it is a powerful tutor and learning tool! :)

        https://chatgpt.com/share/6879c6da-e84c-800b-91bc-cad9e0145ebe
        */
        }