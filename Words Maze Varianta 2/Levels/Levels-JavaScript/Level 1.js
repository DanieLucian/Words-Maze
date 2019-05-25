var sir = [];
var k = 0;
var key = ["A", "C", "E"];
var word1 = "C,A,R";
var word2 = "E,A,R";
var word3 = "R,E,D";
var word4 = "E,R,A";
var word5 = "C,A,D";
var word6 = "A,R,C";
var word7 = "A,R,E";
var nextlevelmodal = document.getElementById('modal');
var clap = document.getElementById('clap');
var fail = document.getElementById('fail');
var Ba_Dum_Tss = document.getElementById('Ba Dum Tss');

function C() {
    document.getElementById('C').style.display = "none";
    let x = "C";
    sir.push(x);
    console.log(sir);
    k = k + 1;
    if (k == 1)
        document.getElementById('letter-1').innerHTML = x;
    if (k == 2)
        document.getElementById('letter-2').innerHTML = x;
    if (k == 3)
        document.getElementById('letter-3').innerHTML = x;
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
    verify();
}

function D() {
    document.getElementById('D').style.display = "none";
    let x = "D";
    sir.push(x);
    console.log(sir);
    k = k + 1;
    if (k == 1)
        document.getElementById('letter-1').innerHTML = x;
    if (k == 2)
        document.getElementById('letter-2').innerHTML = x;
    if (k == 3)
        document.getElementById('letter-3').innerHTML = x;
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
    verify();
}

function backspace() {
    if (k > 0) {
        if (sir.slice(-1) == 'C')
        document.getElementById('C').style.display = "block";
        if (sir.slice(-1) == 'A')
        document.getElementById('A').style.display = "block";
        if (sir.slice(-1) == 'R')
        document.getElementById('R').style.display = "block";
        if (sir.slice(-1) == 'D')
        document.getElementById('D').style.display = "block";
        if (sir.slice(-1) == 'E')
        document.getElementById('E').style.display = "block";
        
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
        
    }
}

function verify() {
    if (k == 3) {
        if (sir.toString() == key) {
            sir = myword();
            document.getElementById('nextlevel-modal-background').style.display = "block";
            document.getElementById('fiveletterbox').style.filter = "blur(4px)";
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

        else if (sir.toString() == word1 || sir.toString() == word2 || sir.toString() == word3 || sir.toString() == word4 || sir.toString() == word5 || sir.toString() == word6 || sir.toString() == word7) {
            sir = myword();
            document.getElementById('nextlevel-modal-background').style.display = "block";
            document.getElementById('fiveletterbox').style.filter = "blur(4px)";
            document.getElementById('level1-letter-container').style.filter = "blur(4px)";
            document.getElementById('modal-word').innerHTML = sir;
            document.getElementById('modal-header-text').innerHTML = "Cool!";
            document.getElementById('modal-body-text').innerHTML = "You have found a word, but not the keyword:";
            document.getElementById('modalbutton').innerHTML = "Keep Trying!";
            document.getElementById('modalbutton').addEventListener('click', closemodal);
            nextlevelmodal.style.display = "flex";
            Ba_Dum_Tss.play();
            sir = [];
            k = 0;
        }

        else {
            sir = myword();
            document.getElementById('nextlevel-modal-background').style.display = "block";
            document.getElementById('fiveletterbox').style.filter = "blur(4px)";
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
    document.getElementById('nextlevel-modal-background').style.display = "none";
    console.clear();
    document.getElementById('fiveletterbox').style.filter = "blur(0px)";
    document.getElementById('level1-letter-container').style.filter = "blur(0px)";
    modal.style.display = "none";
    document.getElementById('letter-1').innerHTML = "_";
    document.getElementById('letter-2').innerHTML = "_";
    document.getElementById('letter-3').innerHTML = "_";
    if (document.getElementById('C').style.display = "none")
        document.getElementById('C').style.display = "block";
    if (document.getElementById('A').style.display = "none")
        document.getElementById('A').style.display = "block";
    if (document.getElementById('R').style.display = "none")
        document.getElementById('R').style.display = "block";
    if (document.getElementById('D').style.display = "none")
        document.getElementById('D').style.display = "block";
    if (document.getElementById('E').style.display = "none")
        document.getElementById('E').style.display = "block";
}
function gonext() {
    document.getElementById('nextlevel-modal-background').style.display = "none";
    location = '../Levels-HTML/Level 2.html';
    console.clear();
}

function myword() {
    sir = sir.toString();
    for (j = 0; j < sir.length; j++)
        sir = sir.replace(",", "");

    return sir;
}