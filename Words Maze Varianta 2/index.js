
var audio = document.getElementById('background-music');

function playOrPause(){
    if(audio.paused){
    audio.play();
    document.getElementById('cross').style.display = "none";
    }    
    else {
    audio.pause();
    document.getElementById('cross').style.display = "block";
    }
}

function start() {
    document.getElementById('menu-page').style.display = "none";
    document.getElementById('howtoplay-page').style.display= "block";
}

function toLevels() {
    document.getElementById('menu-page').style.display = "none";
    document.getElementById('levels-page').style.display = "block";
}

function exit() {
    document.getElementById('body').style.backgroundColor = "#00000034";
    document.getElementById('menu-page').style.display = "none";
    document.getElementById('exit-modal-bg').style.display = "flex";
}

function toMenu() {
    document.getElementById('menu-page').style.display = "block";
    document.getElementById('levels-page').style.display = "none";
    document.getElementById('howtoplay-page').style.display = "none";   
}

