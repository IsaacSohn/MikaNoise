
// Play the audio corresponding to the random index
function playSelectedAudio() {
    index = Math.floor(Math.random() * (5-1)) + 1;
    const audio = document.getElementById(index.toString());

    audio.play();

    // When the audio ends, send a message to background.js
    audio.addEventListener('ended', () => {
        chrome.runtime.sendMessage('audioFinished');
    });
}

// Call playSelectedAudio when the script is loaded
playSelectedAudio();
