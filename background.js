// Play the audio
function playAudio() {
    const audio = new Audio(chrome.runtime.getURL('audio.mp3'));
    audio.play();
}
  
// Set a random interval for this
function setRandomInterval() {
    // rn its between 1-5 mins
    const randomInterval = Math.random() * (300000 - 60000) + 60000;
  
    // dk man it makes an alarm source: my ass
    chrome.alarms.create('playAudio', { delayInMinutes: randomInterval / 60000 });
}
  
// this TRIGGERS the alarm that we made previously
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'playAudio') {
      playAudio();
      setRandomInterval(); // Set the next random interval
    }
});
  
// Inital interval for when u start this damn thing
chrome.runtime.onInstalled.addListener(() => {
    setRandomInterval();
});
  