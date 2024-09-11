// Listen for messages from the service worker
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "playAudio") {
        console.log("Playing audio in content script...");
        const audio = new Audio(chrome.runtime.getURL('audio.mp3'));
        audio.play();
    }
});
