
var audio = document.getElementById('background-music');
var word;
var levels_modal_button = document.getElementById('levels-modal-button');

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

// Aici am pus eu o functie pentru butonul de exit care sa arate un modal pe care scrie sa inchizi tab-ul din browser ca nu merge din aplicatie..
/*function exit() {
    document.getElementById('body').style.backgroundColor = "#00000034";
    document.getElementById('menu-page').style.display = "none";
    document.getElementById('exit-modal-bg').style.display = "flex"
}*/
// Aici am pus eu o functie pentru butonul de exit care sa arate un modal pe care scrie sa inchizi tab-ul de sus din browser ca nu merge din aplicatie.


function toMenu() {
    document.getElementById('menu-page').style.display = "block";
    document.getElementById('levels-page').style.display = "none";
    document.getElementById('howtoplay-page').style.display = "none";   
}

function closeLevelsModal() {
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('levels-modal-content-box').style.display = "none";
}

function UnlockRequest2() {
    document.getElementById('levels-modal').style.display = "block";
    document.getElementById('levels-modal-content-box').style.display = "flex";
    document.getElementById('levels-modal-content').style.display = "flex";
    document.getElementById('levels-modal-header-text').innerHTML = "Unlock Level 2";
    document.getElementById('levels-modal-body-text').innerHTML = "Insert The Key word from Level 1:";

levels_modal_button.addEventListener('click', CheckWord2)
function CheckWord2() {
    word = document.getElementById('insert-text').value;
    console.log(word);
    if (word == "ace"){
    document.getElementById('levels-modal-body-text').innerHTML = "You have unlocked level 2!";
    document.getElementById('insert-text').style.display = "none";
    document.getElementById('insert-text').value = "";
    document.getElementById('levels-modal-button').innerHTML = "OK";
    document.getElementById('lock2').style.display = "none";
    document.getElementById('levels-modal-button').removeEventListener('click', CheckWord2);
    document.getElementById('levels-modal-button').addEventListener('click', exitLevelsModal);

function exitLevelsModal() {
    document.getElementById('levels-modal-content-box').style.display = "none";
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('insert-text').style.display = "block";
    document.getElementById('levels-modal-button').innerHTML = "CHECK";
    document.getElementById('levels-modal-button').removeEventListener('click', exitLevelsModal);
}   
    document.getElementById('2').removeEventListener('click' ,UnlockRequest2)
    document.getElementById('2').addEventListener('click' ,toLevel2);
function toLevel2() {
    location = 'Levels/Levels-HTML/Level 2.html';
    }
}   else {
    document.getElementById('levels-modal-body-text').innerHTML = "That's the wrong word. Try Again!";
    document.getElementById('levels-modal-body-text').style.animation = "wrong 1.5s";
    document.getElementById('insert-text').value = "";
    }
}
}

function UnlockRequest3() {
    document.getElementById('levels-modal').style.display = "block";
    document.getElementById('levels-modal-content-box').style.display = "flex";
    document.getElementById('levels-modal-content').style.display = "flex";
    document.getElementById('levels-modal-header-text').innerHTML = "Unlock Level 3";
    document.getElementById('levels-modal-body-text').innerHTML = "Insert The Key word from Level 2:";


levels_modal_button.addEventListener('click', CheckWord3)
function CheckWord3() {
    word = document.getElementById('insert-text').value;
    console.log(word);
    if (word == "pact"){
    document.getElementById('levels-modal-body-text').innerHTML = "You have unlocked level 3!";
    document.getElementById('insert-text').style.display = "none";
    document.getElementById('insert-text').value = "";
    document.getElementById('levels-modal-button').innerHTML = "OK";
    document.getElementById('lock3').style.display = "none";
    document.getElementById('levels-modal-button').removeEventListener('click', CheckWord3);
    document.getElementById('levels-modal-button').addEventListener('click', exitLevelsModal);

function exitLevelsModal() {
    document.getElementById('levels-modal-content-box').style.display = "none";
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('insert-text').style.display = "block";
    document.getElementById('levels-modal-button').innerHTML = "CHECK";
    document.getElementById('levels-modal-button').removeEventListener('click', exitLevelsModal);
}   
    document.getElementById('3').removeEventListener('click' ,UnlockRequest3)
    document.getElementById('3').addEventListener('click' ,toLevel3);

function toLevel3() {
    location = 'Levels/Levels-HTML/Level 3.html';
    }
}    else {
    document.getElementById('levels-modal-body-text').innerHTML = "That's the wrong word. Try Again!";
    document.getElementById('insert-text').value = "";
    }
}
}

function UnlockRequest4() {
    document.getElementById('levels-modal').style.display = "block";
    document.getElementById('levels-modal-content-box').style.display = "flex";
    document.getElementById('levels-modal-content').style.display = "flex";
    document.getElementById('levels-modal-header-text').innerHTML = "Unlock Level 4";
    document.getElementById('levels-modal-body-text').innerHTML = "Insert The Key word from Level 3:";


levels_modal_button.addEventListener('click', CheckWord4)
function CheckWord4() {
    word = document.getElementById('insert-text').value;
    console.log(word);
    if (word == "zap"){
    document.getElementById('levels-modal-body-text').innerHTML = "You have unlocked level 4!";
    document.getElementById('insert-text').style.display = "none";
    document.getElementById('insert-text').value = "";
    document.getElementById('levels-modal-button').innerHTML = "OK";
    document.getElementById('lock4').style.display = "none";
    document.getElementById('levels-modal-button').removeEventListener('click', CheckWord4);
    document.getElementById('levels-modal-button').addEventListener('click', exitLevelsModal);

function exitLevelsModal() {
    document.getElementById('levels-modal-content-box').style.display = "none";
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('insert-text').style.display = "block";
    document.getElementById('levels-modal-button').innerHTML = "CHECK";
    document.getElementById('levels-modal-button').removeEventListener('click', exitLevelsModal);
}   
    document.getElementById('4').removeEventListener('click' ,UnlockRequest4)
    document.getElementById('4').addEventListener('click' ,toLevel4);
function toLevel4() {
    location = 'Levels/Levels-HTML/Level 4.html';
    }
}    else {
    document.getElementById('levels-modal-body-text').innerHTML = "That's the wrong word. Try Again!";
    document.getElementById('insert-text').value = "";
    }
}
}

function UnlockRequest5() {
    document.getElementById('levels-modal').style.display = "block";
    document.getElementById('levels-modal-content-box').style.display = "flex";
    document.getElementById('levels-modal-content').style.display = "flex";
    document.getElementById('levels-modal-header-text').innerHTML = "Unlock Level 5";
    document.getElementById('levels-modal-body-text').innerHTML = "Insert The Key word from Level 4:";

levels_modal_button.addEventListener('click', CheckWord5)
function CheckWord5() {
    word = document.getElementById('insert-text').value;
    console.log(word);
    if (word == "crave"){
    document.getElementById('levels-modal-body-text').innerHTML = "You have unlocked level 5!";
    document.getElementById('insert-text').style.display = "none";
    document.getElementById('insert-text').value = "";
    document.getElementById('levels-modal-button').innerHTML = "OK";
    document.getElementById('lock5').style.display = "none";
    document.getElementById('levels-modal-button').removeEventListener('click', CheckWord5);
    document.getElementById('levels-modal-button').addEventListener('click', exitLevelsModal);

function exitLevelsModal() {
    document.getElementById('levels-modal-content-box').style.display = "none";
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('insert-text').style.display = "block";
    document.getElementById('levels-modal-button').innerHTML = "CHECK";
    document.getElementById('levels-modal-button').removeEventListener('click', exitLevelsModal);
}   
    document.getElementById('5').removeEventListener('click' ,UnlockRequest5)
    document.getElementById('5').addEventListener('click' ,toLevel5);
function toLevel5() {
    location = 'Levels/Levels-HTML/Level 5.html';
    }
}    else {
    document.getElementById('levels-modal-body-text').innerHTML = "That's the wrong word. Try Again!";
    document.getElementById('insert-text').value = "";
    }
}
}

function UnlockRequest6() {
    document.getElementById('levels-modal').style.display = "block";
    document.getElementById('levels-modal-content-box').style.display = "flex";
    document.getElementById('levels-modal-content').style.display = "flex";
    document.getElementById('levels-modal-header-text').innerHTML = "Unlock Level 6";
    document.getElementById('levels-modal-body-text').innerHTML = "Insert The Key word from Level 5:";


levels_modal_button.addEventListener('click', CheckWord6)
function CheckWord6() {
    word = document.getElementById('insert-text').value;
    console.log(word);
    if (word == "article"){
    document.getElementById('levels-modal-body-text').innerHTML = "You have unlocked level 6!";
    document.getElementById('insert-text').style.display = "none";
    document.getElementById('insert-text').value = "";
    document.getElementById('levels-modal-button').innerHTML = "OK";
    document.getElementById('lock6').style.display = "none";
    document.getElementById('levels-modal-button').removeEventListener('click', CheckWord6);
    document.getElementById('levels-modal-button').addEventListener('click', exitLevelsModal);

function exitLevelsModal() {
    document.getElementById('levels-modal-content-box').style.display = "none";
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('insert-text').style.display = "block";
    document.getElementById('levels-modal-button').innerHTML = "CHECK";
    document.getElementById('levels-modal-button').removeEventListener('click', exitLevelsModal);
}   
    document.getElementById('6').removeEventListener('click' ,UnlockRequest6)
    document.getElementById('6').addEventListener('click' ,toLevel6);
function toLevel6() {
    location = 'Levels/Levels-HTML/Level 6.html';
    }
}    else {
    document.getElementById('levels-modal-body-text').innerHTML = "That's the wrong word. Try Again!";
    document.getElementById('insert-text').value = "";
    }
}
}

function UnlockRequest7() {
    document.getElementById('levels-modal').style.display = "block";
    document.getElementById('levels-modal-content-box').style.display = "flex";
    document.getElementById('levels-modal-content').style.display = "flex";
    document.getElementById('levels-modal-header-text').innerHTML = "Unlock Level 7";
    document.getElementById('levels-modal-body-text').innerHTML = "Insert The Key word from Level 6:";


levels_modal_button.addEventListener('click', CheckWord7)
function CheckWord7() {
    word = document.getElementById('insert-text').value;
    console.log(word);
    if (word == "simple"){
    document.getElementById('levels-modal-body-text').innerHTML = "You have unlocked level 7!";
    document.getElementById('insert-text').style.display = "none";
    document.getElementById('insert-text').value = "";
    document.getElementById('levels-modal-button').innerHTML = "OK";
    document.getElementById('lock7').style.display = "none";
    document.getElementById('levels-modal-button').removeEventListener('click', CheckWord7);
    document.getElementById('levels-modal-button').addEventListener('click', exitLevelsModal);

function exitLevelsModal() {
    document.getElementById('levels-modal-content-box').style.display = "none";
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('insert-text').style.display = "block";
    document.getElementById('levels-modal-button').innerHTML = "CHECK";
    document.getElementById('levels-modal-button').removeEventListener('click', exitLevelsModal);
}   
    document.getElementById('7').removeEventListener('click' ,UnlockRequest7)
    document.getElementById('7').addEventListener('click' ,toLevel7);
function toLevel7() {
    location = 'Levels/Levels-HTML/Level 7.html';
    }
}    else {
    document.getElementById('levels-modal-body-text').innerHTML = "That's the wrong word. Try Again!";
    document.getElementById('insert-text').value = "";
    }
}
}

function UnlockRequest8() {
    document.getElementById('levels-modal').style.display = "block";
    document.getElementById('levels-modal-content-box').style.display = "flex";
    document.getElementById('levels-modal-content').style.display = "flex";
    document.getElementById('levels-modal-header-text').innerHTML = "Unlock Level 8";
    document.getElementById('levels-modal-body-text').innerHTML = "Insert The Key word from Level 7:";

levels_modal_button.addEventListener('click', CheckWord8)
function CheckWord8() {
    word = document.getElementById('insert-text').value;
    console.log(word);
    if (word == "toad"){
    document.getElementById('levels-modal-body-text').innerHTML = "You have unlocked level 8!";
    document.getElementById('insert-text').style.display = "none";
    document.getElementById('insert-text').value = "";
    document.getElementById('levels-modal-button').innerHTML = "OK";
    document.getElementById('lock8').style.display = "none";
    document.getElementById('levels-modal-button').removeEventListener('click', CheckWord8);
    document.getElementById('levels-modal-button').addEventListener('click', exitLevelsModal);


function exitLevelsModal() {
    document.getElementById('levels-modal-content-box').style.display = "none";
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('insert-text').style.display = "block";
    document.getElementById('levels-modal-button').innerHTML = "CHECK";
    document.getElementById('levels-modal-button').removeEventListener('click', exitLevelsModal);
}   
    document.getElementById('8').removeEventListener('click' ,UnlockRequest8)
    document.getElementById('8').addEventListener('click' ,toLevel8);
function toLevel8() {
    location = 'Levels/Levels-HTML/Level 8.html';
    }
}    else {
    document.getElementById('levels-modal-body-text').innerHTML = "That's the wrong word. Try Again!";
    document.getElementById('insert-text').value = "";
    }
}
}

function UnlockRequest9() {
    document.getElementById('levels-modal').style.display = "block";
    document.getElementById('levels-modal-content-box').style.display = "flex";
    document.getElementById('levels-modal-content').style.display = "flex";
    document.getElementById('levels-modal-header-text').innerHTML = "Unlock Level 9";
    document.getElementById('levels-modal-body-text').innerHTML = "Insert The Key word from Level 8:";

levels_modal_button.addEventListener('click', CheckWord9)
function CheckWord9() {
    word = document.getElementById('insert-text').value;
    console.log(word);
    if (word == "flair"){
    document.getElementById('levels-modal-body-text').innerHTML = "You have unlocked level 9!";
    document.getElementById('insert-text').style.display = "none";
    document.getElementById('insert-text').value = "";
    document.getElementById('levels-modal-button').innerHTML = "OK";
    document.getElementById('lock9').style.display = "none";
    document.getElementById('levels-modal-button').removeEventListener('click', CheckWord9);                                    
    document.getElementById('levels-modal-button').addEventListener('click', exitLevelsModal);

function exitLevelsModal() {
    document.getElementById('levels-modal-content-box').style.display = "none";
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('insert-text').style.display = "block";
    document.getElementById('levels-modal-button').innerHTML = "CHECK";
    document.getElementById('levels-modal-button').removeEventListener('click', exitLevelsModal);
}   
    document.getElementById('9').removeEventListener('click' ,UnlockRequest9)
    document.getElementById('9').addEventListener('click' ,toLevel9);
function toLevel9() {
    location = 'Levels/Levels-HTML/Level 9.html';
    }
}    else {
    document.getElementById('levels-modal-body-text').innerHTML = "That's the wrong word. Try Again!";
    document.getElementById('insert-text').value = "";
    }
}
}

function UnlockRequest10() {
    document.getElementById('levels-modal').style.display = "block";
    document.getElementById('levels-modal-content-box').style.display = "flex";
    document.getElementById('levels-modal-content').style.display = "flex";
    document.getElementById('levels-modal-header-text').innerHTML = "Unlock Level 10";
    document.getElementById('levels-modal-body-text').innerHTML = "Insert The Key word from Level 9:";


levels_modal_button.addEventListener('click', CheckWord10)
function CheckWord10() {
    word = document.getElementById('insert-text').value;
    console.log(word);
    if (word == "france"){
    document.getElementById('levels-modal-body-text').innerHTML = "You have unlocked level 10!";
    document.getElementById('insert-text').style.display = "none";
    document.getElementById('insert-text').value = "";
    document.getElementById('levels-modal-button').innerHTML = "OK";
    document.getElementById('lock10').style.display = "none";
    document.getElementById('levels-modal-button').removeEventListener('click', CheckWord10);
    document.getElementById('levels-modal-button').addEventListener('click', exitLevelsModal);

function exitLevelsModal() {
    document.getElementById('levels-modal-content-box').style.display = "none";
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('insert-text').style.display = "block";
    document.getElementById('levels-modal-button').innerHTML = "CHECK";
    document.getElementById('levels-modal-button').removeEventListener('click', exitLevelsModal);
}   
    document.getElementById('10').removeEventListener('click' ,UnlockRequest10)
    document.getElementById('10').addEventListener('click' ,toLevel10);
function toLevel10() {
    location = 'Levels/Levels-HTML/Level 10.html';
    }
}    else {
    document.getElementById('levels-modal-body-text').innerHTML = "That's the wrong word. Try Again!";
    document.getElementById('insert-text').value = "";
    }
}
}

function UnlockRequest11() {
    document.getElementById('levels-modal').style.display = "block";
    document.getElementById('levels-modal-content-box').style.display = "flex";
    document.getElementById('levels-modal-content').style.display = "flex";
    document.getElementById('levels-modal-header-text').innerHTML = "Unlock Level 11";
    document.getElementById('levels-modal-body-text').innerHTML = "Insert The Key word from Level 10:";

levels_modal_button.addEventListener('click', CheckWord11)
function CheckWord11() {
    word = document.getElementById('insert-text').value;
    console.log(word);
    if (word == "truancy"){
    document.getElementById('levels-modal-body-text').innerHTML = "You have unlocked level 11!";
    document.getElementById('insert-text').style.display = "none";
    document.getElementById('insert-text').value = "";
    document.getElementById('levels-modal-button').innerHTML = "OK";
    document.getElementById('lock11').style.display = "none";
    document.getElementById('levels-modal-button').removeEventListener('click', CheckWord11);
    document.getElementById('levels-modal-button').addEventListener('click', exitLevelsModal);

function exitLevelsModal() {
    document.getElementById('levels-modal-content-box').style.display = "none";
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('insert-text').style.display = "block";
    document.getElementById('levels-modal-button').innerHTML = "CHECK";
    document.getElementById('levels-modal-button').removeEventListener('click', exitLevelsModal);
}   
    document.getElementById('11').removeEventListener('click' ,UnlockRequest11)
    document.getElementById('11').addEventListener('click' ,toLevel11);
function toLevel11() {
    location = 'Levels/Levels-HTML/Level 11.html';
    }
}    else {
    document.getElementById('levels-modal-body-text').innerHTML = "That's the wrong word. Try Again!";
    document.getElementById('insert-text').value = "";
    }
}
}

function UnlockRequest12() {
    document.getElementById('levels-modal').style.display = "block";
    document.getElementById('levels-modal-content-box').style.display = "flex";
    document.getElementById('levels-modal-content').style.display = "flex";
    document.getElementById('levels-modal-header-text').innerHTML = "Unlock Level 12";
    document.getElementById('levels-modal-body-text').innerHTML = "Insert The Key word from Level 11:";

levels_modal_button.addEventListener('click', CheckWord12)
function CheckWord12() {
    word = document.getElementById('insert-text').value;
    console.log(word);
    if (word == "faith"){
    document.getElementById('levels-modal-body-text').innerHTML = "You have unlocked level 12!";
    document.getElementById('insert-text').style.display = "none";
    document.getElementById('insert-text').value = "";
    document.getElementById('levels-modal-button').innerHTML = "OK";
    document.getElementById('lock12').style.display = "none";
    document.getElementById('levels-modal-button').removeEventListener('click', CheckWord12);
    document.getElementById('levels-modal-button').addEventListener('click', exitLevelsModal);

function exitLevelsModal() {
    document.getElementById('levels-modal-content-box').style.display = "none";
    document.getElementById('levels-modal').style.display = "none";
    document.getElementById('insert-text').style.display = "block";
    document.getElementById('levels-modal-button').innerHTML = "CHECK";
    document.getElementById('levels-modal-button').removeEventListener('click', exitLevelsModal);
}   
    document.getElementById('12').removeEventListener('click' ,UnlockRequest12)
    document.getElementById('12').addEventListener('click' ,toLevel12);
function toLevel12() {
    location = 'Levels/Levels-HTML/Level 12.html';
    }
}    else {
    document.getElementById('levels-modal-body-text').innerHTML = "That's the wrong word. Try Again!";
    document.getElementById('insert-text').value = "";
    }
}
}
