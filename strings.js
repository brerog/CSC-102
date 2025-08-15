    // creating a function to validate form inputs
        function validateForm(){

            //create nicknames for user inputs
            let firstName = document.getElementById("txtFirstName").value;
            let lastName = document.getElementById("txtLastName").value;
            let zip = document.getElementById("zipCode").value;

            //input to console for debugging-- good habit.
            console.log("firstName= " + firstName);
            console.log("lastName= " + lastName);
            console.log("zip= " + zip);

            //creating a variable for the full name, along with a console output
            let fullName = firstName + " " + lastName;
            console.log("fullName= " + fullName);

            //error message if full name is too long or too short 
            if (fullName.length <= 1 || fullName.length > 20){

                //user sees this error message
                divMessage.innerHTML = "Invalid name entered. Please try again."
            }
            
            //if zipcode is not 5 digits, give the user an error message
            else if (zip.length != 5){
                divMessage.innerHTML = "Invalid zip code entered. Please try again."
            }

            //if we get to this 'else' statement, it means all the other inputs were successfully validated.
            else{
                divMessage.innerHTML = "Congratulations, " + fullName + "! The secret word is mayonnaise!"
            }

            //this will prevent the form from submitting to server side code that we don't have/own lol
            return false;
        }