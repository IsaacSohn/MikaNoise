// Play the audio
function playAudio() {
    console.log('audio played');
    const audio = new Audio();
    audio.src = chrome.extension.getURL("audio.mp3");
    audio.play();
}
  
// Set a random interval for this
function setRandomInterval() {
    // rn its between 10-5 seconds
    const randomInterval = Math.random() * (5 - 1) + 1;
    console.log(randomInterval);
    // dk man it makes an alarm source: my ass
    chrome.alarms.create('playAudio', { delayInMinutes: randomInterval});
}
  
// this TRIGGERS the alarm that we made previously
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'playAudio'){
    chrome.offscreen.createDocument({
        url: chrome.runtime.getURL('audio.html'),
        reasons: ['AUDIO_PLAYBACK'],
        justification: 'notification',
      });
    }
});
//see if audio finished playing
chrome.runtime.onMessage.addListener((message) => {
    if (message == 'audioFinished') {
        chrome.offscreen.closeDocument(() => {
            setRandomInterval();
        });
    }
});

// Inital interval for when u start this damn thing
chrome.runtime.onInstalled.addListener(() => {
    setRandomInterval();
});
  