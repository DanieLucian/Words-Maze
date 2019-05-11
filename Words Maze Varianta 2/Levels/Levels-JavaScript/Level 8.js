var sir = [];
var k = 0;
var key = ["F", "L", "A", "I", "R"];
var word1 = "E,A,R,L,Y";
var word2 = "F,A,I,R,Y";
var word3 = "F,E,R,A,L";
var word4 = "F,I,E,R,Y";
var word5 = "F,L,A,R,E";
var word6 = "F,L,Y,E,R";
var word7 = "L,A,Y,E,R";
var word8 = "R,E,L,A,Y";
var word9 = "R,I,F,L,E";
var word10 = "L,I,F,E,R";
var word11 = "A,F,I,R,E";
var nextlevelmodal = document.getElementById('modal');
var clap = document.getElementById('clap');
var fail = document.getElementById('fail');
var SlowClap = document.getElementById('Slow-Clap');


function L() {
    document.getElementById('L').style.display = "none";
    let x = "L";
    sir.push(x);
    console.log(sir);
    k = k + 1;
    if (k == 1)
        document.getElementById('letter-1').innerHTML = x;
    if (k == 2)
        document.getElementById('letter-2').innerHTML = x;
    if (k == 3)
        document.getElementById('letter-3').innerHTML = x;
    if (k == 4)
        document.getElementById('letter-4').innerHTML = x;
    if (k == 5)
        document.getElementById('letter-5').innerHTML = x;
    verify();
}
function R() {
    document.getElementById('R').style.display = "none";
    let x = "R";
    sir.push(x);
    console.log(sir);
    k = k + 1;
    if (k == 1)
        document.getElementById('letter-1').innerHTML = x;
    if (k == 2)
        document.getElementById('letter-2').innerHTML = x;
    if (k == 3)
        document.getElementById('letter-3').innerHTML = x;
    if (k == 4)
        document.getElementById('letter-4').innerHTML = x;
    if (k == 5)
        document.getElementById('letter-5').innerHTML = x;
    verify();
}
function E() {
    document.getElementById('E').style.display = "none";
    let x = "E";
    sir.push(x);
    console.log(sir);
    k = k + 1;
    if (k == 1)
        document.getElementById('letter-1').innerHTML = x;
    if (k == 2)
        document.getElementById('letter-2').innerHTML = x;
    if (k == 3)
        document.getElementById('letter-3').innerHTML = x;
    if (k == 4)
        document.getElementById('letter-4').innerHTML = x;
    if (k == 5)
        document.getElementById('letter-5').innerHTML = x;
    verify();
}
function I() {
    document.getElementById('I').style.display = "none";
    let x = "I";
    sir.push(x);
    console.log(sir);
    k = k + 1;
    if (k == 1)
        document.getElementById('letter-1').innerHTML = x;
    if (k == 2)
        document.getElementById('letter-2').innerHTML = x;
    if (k == 3)
        document.getElementById('letter-3').innerHTML = x;
    if (k == 4)
        document.getElementById('letter-4').innerHTML = x;
    if (k == 5)
        document.getElementById('letter-5').innerHTML = x;
    verify();
}
function Y() {
    document.getElementById('Y').style.display = "none";
    let x = "Y";
    sir.push(x);
    console.log(sir);
    k = k + 1;
    if (k == 1)
        document.getElementById('letter-1').innerHTML = x;
    if (k == 2)
        document.getElementById('letter-2').innerHTML = x;
    if (k == 3)
        document.getElementById('letter-3').innerHTML = x;
    if (k == 4)
        document.getElementById('letter-4').innerHTML = x;
    if (k == 5)
        document.getElementById('letter-5').innerHTML = x;
    verify();
}
function A() {
    document.getElementById('A').style.display = "none";
    let x = "A";
    sir.push(x);
    console.log(sir);
    k = k + 1;
    if (k == 1)
        document.getElementById('letter-1').innerHTML = x;
    if (k == 2)
        document.getElementById('letter-2').innerHTML = x;
    if (k == 3)
        document.getElementById('letter-3').innerHTML = x;
    if (k == 4)
        document.getElementById('letter-4').innerHTML = x;
    if (k == 5)
        document.getElementById('letter-5').innerHTML = x;
    verify();
}
function F() {
    document.getElementById('F').style.display = "none";
    let x = "F";
    sir.push(x);
    console.log(sir);
    k = k + 1;
    if (k == 1)
        document.getElementById('letter-1').innerHTML = x;
    if (k == 2)
        document.getElementById('letter-2').innerHTML = x;
    if (k == 3)
        document.getElementById('letter-3').innerHTML = x;
    if (k == 4)
        document.getElementById('letter-4').innerHTML = x;
    if (k == 5)
        document.getElementById('letter-5').innerHTML = x;
    verify();
}

function backspace() {
    if (k > 0) {
        if (sir.slice(-1) == 'L')
        document.getElementById('L').style.display = "block";
        if (sir.slice(-1) == 'R')
        document.getElementById('R').style.display = "block";
        if (sir.slice(-1) == 'E')
        document.getElementById('E').style.display = "block";
        if (sir.slice(-1) == 'I')
        document.getElementById('I').style.display = "block";
        if (sir.slice(-1) == 'Y')
        document.getElementById('Y').style.display = "block";
        if (sir.slice(-1) == 'A')
        document.getElementById('A').style.display = "block";
        if (sir.slice(-1) == 'F')
        document.getElementById('F').style.display = "block";

        sir.pop();
        console.log(sir);
        if (k == 1) {
            document.getElementById('letter-1').innerHTML = "_";
            k = k - 1;
        }
        if (k == 2) {
            document.getElementById('letter-2').innerHTML = "_";
            k = k - 1;
        }
        if (k == 3) {
            document.getElementById('letter-3').innerHTML = "_";
            k = k - 1;
        }
        if (k == 4) {
            document.getElementById('letter-4').innerHTML = "_";
            k = k - 1;
        }
    }
}

function verify() {
    if (k == 5) {
        if (sir.toString() == key) {
            sir = myword();
            document.getElementById('body').style.backgroundColor = "#00000034";
            document.getElementById('eightletterbox').style.filter = "blur(4px)";
            document.getElementById('level1-letter-container').style.filter = "blur(4px)";
            document.getElementById('modal-word').innerHTML = sir;
            document.getElementById('modal-header-text').innerHTML = "Congratulations!";
            document.getElementById('modal-body-text').innerHTML = "You have found the keyword:";
            document.getElementById('modalbutton').innerHTML = "Go Next!";
            document.getElementById('modalbutton').addEventListener('click', gonext);
            nextlevelmodal.style.display = "flex";
            clap.play();
            sir = [];
            k = 0;
        }

        else if (sir.toString() == word1 || sir.toString() == word2 || sir.toString() == word3 || sir.toString() == word4 || sir.toString() == word5 || sir.toString() == word6 || sir.toString() == word7 || sir.toString() == word8 || sir.toString() == word9 || sir.toString() == word10 || sir.toString() == word11) {
            sir = myword();
            document.getElementById('body').style.backgroundColor = "#00000034";
            document.getElementById('eightletterbox').style.filter = "blur(4px)";
            document.getElementById('level1-letter-container').style.filter = "blur(4px)";
            document.getElementById('modal-word').innerHTML = sir;
            document.getElementById('modal-header-text').innerHTML = "Cool!";
            document.getElementById('modal-body-text').innerHTML = "You have found a word, but not the keyword:";
            document.getElementById('modalbutton').innerHTML = "Keep Trying!";
            document.getElementById('modalbutton').addEventListener('click', closemodal);
            nextlevelmodal.style.display = "flex";
            SlowClap.play();
            sir = [];
            k = 0;
        }

        else {
            sir = myword();
            document.getElementById('body').style.backgroundColor = "#00000034";
            document.getElementById('eightletterbox').style.filter = "blur(4px)";
            document.getElementById('level1-letter-container').style.filter = "blur(4px)";
            document.getElementById('modal-word').innerHTML = sir;
            document.getElementById('modal-header-text').innerHTML = "Sorry!";
            document.getElementById('modal-body-text').innerHTML = "Didn't heard of this:";
            document.getElementById('modalbutton').innerHTML = "Try Again!";
            document.getElementById('modalbutton').addEventListener('click', closemodal);
            nextlevelmodal.style.display = "flex";
            fail.play();
            sir = [];
            k = 0;
        }
    }
}

function closemodal() {
    document.getElementById('body').style.backgroundColor = "#ffffff33";
    console.clear();
    document.getElementById('eightletterbox').style.filter = "blur(0px)";
    document.getElementById('level1-letter-container').style.filter = "blur(0px)";
    modal.style.display = "none";
    document.getElementById('letter-1').innerHTML = "_";
    document.getElementById('letter-2').innerHTML = "_";
    document.getElementById('letter-3').innerHTML = "_";
    document.getElementById('letter-4').innerHTML = "_";
    document.getElementById('letter-5').innerHTML = "_";
    if (document.getElementById('L').style.display = "none")
        document.getElementById('L').style.display = "block";
    if (document.getElementById('R').style.display = "none")
        document.getElementById('R').style.display = "block";
    if (document.getElementById('E').style.display = "none")
        document.getElementById('E').style.display = "block";
    if (document.getElementById('I').style.display = "none")
        document.getElementById('I').style.display = "block";
    if (document.getElementById('Y').style.display = "none")
        document.getElementById('Y').style.display = "block";
    if (document.getElementById('A').style.display = "none")
        document.getElementById('A').style.display = "block";
    if (document.getElementById('F').style.display = "none")
        document.getElementById('F').style.display = "block";
}
function gonext() {
    document.getElementById('body').style.backgroundColor = "#ffffff33";
    location = '../Levels-HTML/Level 9.html';
    console.clear();
}

function myword() {
    sir = sir.toString();
    for (j = 0; j < sir.length; j++)
        sir = sir.replace(",", "");

    return sir;
}