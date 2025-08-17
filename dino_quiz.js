  // using a const here instead of 'let' because our arrays with the questions and answers will NOT change
        // each item in our array is an object (curly braces)
        // 1 object = 1 question
        const quizData = [

        //i feel these next JS lines are pretty easy to read even for non-coders, so i didn't comment them
        //i'm looking forward to python where that becomes even more true (NOT to downplay the importance of having good comments, though)
    {
        question: "What does the name 'dinosaur' mean?",
        options: ["Terrible Lizard", "Big Reptile", "Ancient Beast", "Giant Bird"],
        answer: "Terrible Lizard"
    },
    {
        question: "Which dinosaur is known for its three horns and large frill?",
        options: ["Stegosaurus", "Velociraptor", "Triceratops", "Ankylosaurus"],
        answer: "Triceratops"
    },
    {
        question: "In which geological period did the Tyrannosaurus Rex live?",
        options: ["Jurassic", "Triassic", "Cretaceous", "Paleogene"],
        answer: "Cretaceous"
    },
    {
        question: "What is the study of fossils called?",
        options: ["Biology", "Geology", "Archaeology", "Paleontology"],
        answer: "Paleontology"
    }

    //questions and their answers are AI generated, but human-verified for accuracy :)
];
    // give our questions container a variable
    let questionsContainer = document.getElementById('questions-container');

    // function to start displaying our quiz
    function displayQuiz() {
        // for loop continues looping our quiz until i is less than the number of questions in our array
        for (let i = 0; i < quizData.length; i++) {
        // 'questionData' will refer to the current question object the loop is working on
        let questionData = quizData[i];

        // creating a new div element in memory for the question block
        let questionBlock = document.createElement('div');
        // adding a CSS class to that new div so it can be styled
        questionBlock.className = 'question-block';

        // creating a new paragraph element in memory for the question text
        let questionText = document.createElement('p');
        // setting the content of the paragraph to the question number and text
        questionText.innerHTML = (i + 1) + '. ' + questionData.question;
        // adding a CSS class to the paragraph for styling
        questionText.className = 'question-text';

        // creating a new div in memory to hold all the answer options
        let optionsDiv = document.createElement('div');
        // adding a CSS class to this div for styling
        optionsDiv.className = 'options';

        // creating another 'for' loop to go through the options of the current question
        for (let j = 0; j < questionData.options.length; j++) {
            // get the current option text (e.g., "Terrible Lizard")
            let option = questionData.options[j];
            // create the HTML for a label and a radio button input
            // using '+=' to add each new option to the optionsDiv
            optionsDiv.innerHTML += '<label class="option-label">' +
                '<input type="radio" name="question' + i + '" value="' + option + '" required>' +
                ' ' + option +
                '</label>';
        }

        // now we need to put the pieces together
        // first, add the question text paragraph into our question block div
        questionBlock.appendChild(questionText);
        // second, add the div containing all the options into our question block div
        questionBlock.appendChild(optionsDiv);
        // finally, add the completed question block to the main questions container on the webpage
        questionsContainer.appendChild(questionBlock);
    }
}

// this function will be called when the form is submitted
function checkAnswers() {
    // create a variable to keep track of the user's score, starting at 0
    let score = 0;
    // get a reference to the div where we will show the results
    let resultsContainer = document.getElementById('results');

    // loop through each question one more time to check the answers
    for (let i = 0; i < quizData.length; i++) {
        // find which radio button the user selected for the current question
        let selectedOption = document.querySelector('input[name="question' + i + '"]:checked');

        // this 'if' statement checks to make sure the user actually selected an answer
        if (selectedOption) {
        // this 'if' statement compares the value of the selected answer with the correct answer from our data
        if (selectedOption.value === quizData[i].answer) {
        // if they match, increase the score by 1
        score++;
            }
        }
    }

        // after the loop is done, display the final score in the results container
        resultsContainer.innerHTML = 'You scored ' + score + ' out of ' + quizData.length + '!';

        // 'return false' is very important here! It prevents the page from reloading when you submit the form.
        return false;
    }

    // this line makes the quiz appear on the page as soon as the script loads
    displayQuiz();
