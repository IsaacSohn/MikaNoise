const audio = document.getElementById('okay');
audio.addEventListener('ended', () => {
chrome.runtime.sendMessage('audioFinished');
});