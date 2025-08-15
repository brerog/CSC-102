    //handles the user input
    function checkPdrome(event) {
        //prevent form from submitting for testing purposes
        event.preventDefault();

        //create shortcut to the txtWord input
        let userString = document.getElementById("txtWord").value;
        let divPdromeResults = document.getElementById("divPdromeResults");

        // compare if our tested string matches the user's initial input
        if (isPdrome(userString)){
            divPdromeResults.textContent = userString + " is a palindrome!";
        } 
        // if string is not a palindrome, output this
        else{
            divPdromeResults.textContent = userString + " is not a palindrome!";
        }
    }

    function isPdrome(userString) {
        // make it lowercase so case doesn't matter
        userString = userString.toLowerCase();
        
        // split text into an array: r | a | c | e | c | a | r
        // reverse text, then join back into a string
        let stringReverse = userString.split("").reverse().join("");

        return userString == stringReverse;
    }

    // quick console tests
    console.log("racecar=", isPdrome("racecar")); // true
    console.log("test=", isPdrome("test"));       // false
    console.log("Mom=", isPdrome("Mom"));         // true