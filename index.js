    //this variable keeps track of the current interval id.
    //we are storing this so that we can stop the image from moving.
    let intervalID = 0;

    //create a function to generate a random number
    function getRandomNumber(){
        //call a random number and output it
        //math.floor rounds our output number down, so that we get a whole number
        return Math.floor(Math.random() * 800);
    }

    //this will make the image begin to move
    function startMove(){
        //creating a shortcut to refer to our meme image
        let imgMeme = document.getElementById("memeImage");

        intervalID = setInterval(function(){
            //these variables give the image a new location
            let newTop = getRandomNumber();
            let newLeft = getRandomNumber();

            //we are changing the css properties of the image
            //this is what moves our image based on the previous variables
            imgMeme.style.top = newTop + "px";
            imgMeme.style.left = newLeft + "px";

            console.log("Left=" + newLeft +"px")
            console.log("Top=" + newTop +"px")
        }, 1200); //1000 milliseconds is 1 second

        //set it up so we cant click on the start button
        document.getElementById("btnStart").disabled = true;
        //set it up so we can click on the stop button
        document.getElementById("btnStop").disabled = false;
    }
    //to stop our image from moving
    function stopMove(){
        //this stops running the code by clearing our interval ID
        clearInterval(intervalID);

        //set it up so we can click on the start button
        document.getElementById("btnStart").disabled = false;
        //set it up so we cant click on the stop button
        document.getElementById("btnStop").disabled = true;
    }