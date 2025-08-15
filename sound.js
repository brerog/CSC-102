    // function to add audio elements and show our play/pause buttons
    function addSound(src = "Awooga.mp3") {
        // define play button
        let btnPlay = document.getElementById("btnPlay");

        // define pause button
        let btnPause = document.getElementById("btnPause");

        // create the audio element
        let aud = document.createElement("audio");

        // add the controls attribute
        aud.setAttribute("controls", "controls");

        // give the audio element an id
        aud.setAttribute("id", "audio");

        // set up the source for the audio file
        aud.setAttribute("src", src);

        // add the audio element to the page
        document.querySelector("main").appendChild(aud);

        // unhide play/pause buttons
        btnPlay.hidden = false;
        btnPause.hidden = false;
    }

    function playSound() {
    // get the audio element
    let audio = document.getElementById("audio");

    // make sure the audio element exists
    if (audio) {
        // use the built-in play method to start playback
        audio.play();
    }
}

    function pauseSound() {
    // get the audio element
    let audio = document.getElementById("audio");

    // make sure the audio element exists
    if (audio) {
        // use the built-in pause method to stop playback
        audio.pause();
    }
}