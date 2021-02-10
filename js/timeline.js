function timeline(event) {
    document.getElementById('bar').value = Math.floor(event.currentTime); document.getElementById('bar').max = Math.floor(event.duration);
}


// https://stackoverflow.com/questions/4993097/html5-display-audio-currenttime
