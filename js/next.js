var songs = ['Abandoned.mp3', 'Existence.mp3', 'anxiety.mp3', 
             'Echoes.mp3', 'Horror Show.mp3', 'Insanity.mp3',
             '[insert genre here].mp3','Shell.mp3', 'SlyphStorm.mp3'               
]
var names = ['Abandoned', 'Existence', 'Anxiety', 
'Echos', 'Horror Show', 'Insanity', 
'[insert genre here]', 'Shell', 'Pegasus Device']

var art = [
'By DMDC', 'By DMDC', 'By Groundbreaking', 
'By Groundbreaking', 'CG5 Remix', 'Dolvondo - Insanity', 
'By Groundbreaking', 'By Groundbreaking', 'By SlyphStorm'
]
var a = 0
var x = document.getElementById("player").ended;

var end = document.getElementById("player").duration
var audio = document.getElementById("player").currentTime


function next() {

     a = a + 1;
     if (a === 9) {
          a = 0;
     }
     console.log(a)
     document.getElementById("player").pause();
     document.getElementById("player").setAttribute('src', songs[a]);
     document.getElementById("song-name").innerHTML = names[a];
     document.getElementById("artist").innerHTML = art[a];
     document.getElementById("player").load();
     document.getElementById("player").play();
     
}

function back(music) {

     a = a - 1;
     if (a === -1) {
          a = 8;
     }
     console.log(a)
     document.getElementById("player").pause();
     document.getElementById("player").setAttribute('src', songs[a]);
     document.getElementById("song-name").innerHTML = names[a];
     document.getElementById("artist").innerHTML = art[a];
     document.getElementById("player").load();
     document.getElementById("player").play();
}
