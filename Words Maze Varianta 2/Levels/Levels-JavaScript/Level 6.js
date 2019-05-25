var sir = [];
var k = 0;
var key = ["S", "I", "M", "P", "L", "E"];
var word1 = "I,M,P,U,R,E";
var word2 = "M,I,S,T,E,R";
var word3 = "P,E,R,M,I,T";
var word4 = "P,R,I,E,S,T";
var word5 = "R,E,S,U,L,T";
var word6 = "S,P,R,I,T,E";
var word7 = "T,U,L,I,P,S";
var word8 = "T,R,I,P,L,E";
var nextlevelmodal = document.getElementById('modal');
var clap = document.getElementById('clap');
var fail = document.getElementById('fail');
var Ba_Dum_Tss = document.getElementById('Ba Dum Tss');

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
    if (k == 6)
        document.getElementById('letter-6').innerHTML = x;    
    verify();
}
function T() {
    document.getElementById('T').style.display = "none";
    let x = "T";
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
    if (k == 6)
        document.getElementById('letter-6').innerHTML = x;    
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
    if (k == 6)
        document.getElementById('letter-6').innerHTML = x;      
    verify();
}
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
    if (k == 6)
        document.getElementById('letter-6').innerHTML = x;       
    verify();
}
function M() {
    document.getElementById('M').style.display = "none";
    let x = "M";
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
    if (k == 6)
        document.getElementById('letter-6').innerHTML = x;       
    verify();
}
function P() {
    document.getElementById('P').style.display = "none";
    let x = "P";
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
    if (k == 6)
        document.getElementById('letter-6').innerHTML = x;       
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
    if (k == 6)
        document.getElementById('letter-6').innerHTML = x;       
    verify();
}

function U() {
    document.getElementById('U').style.display = "none";
    let x = "U";
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
    if (k == 6)
        document.getElementById('letter-6').innerHTML = x;       
    verify();
}
function S() {
    document.getElementById('S').style.display = "none";
    let x = "S";
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
    if (k == 6)
        document.getElementById('letter-6').innerHTML = x;       
    verify();
} 

function backspace() {
    if (k > 0) {
        if (sir.slice(-1) == 'I')
        document.getElementById('I').style.display = "block";
        if (sir.slice(-1) == 'T')
        document.getElementById('T').style.display = "block";
        if (sir.slice(-1) == 'R')
        document.getElementById('R').style.display = "block";
        if (sir.slice(-1) == 'L')
        document.getElementById('L').style.display = "block";
        if (sir.slice(-1) == 'M')
        document.getElementById('M').style.display = "block";
        if (sir.slice(-1) == 'P')
        document.getElementById('P').style.display = "block";
        if (sir.slice(-1) == 'E')
        document.getElementById('E').style.display = "block";
        if (sir.slice(-1) == 'U')
        document.getElementById('U').style.display = "block";
        if (sir.slice(-1) == 'S')
        document.getElementById('S').style.display = "block";
        
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
        if (k == 5) {
            document.getElementById('letter-5').innerHTML = "_";
            k = k - 1;
       }
    }
}

function verify() {
    if (k == 6) {
        if (sir.toString() == key) {
            sir = myword();
            document.getElementById('nextlevel-modal-background').style.display = "block";
            document.getElementById('nineletterbox').style.filter = "blur(4px)";
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

        else if (sir.toString() == word1 || sir.toString() == word2 || sir.toString() == word3 || sir.toString() == word4 || sir.toString() == word5 || sir.toString() == word6 || sir.toString() == word7 || sir.toString() == word8) {
            sir = myword();
            document.getElementById('nextlevel-modal-background').style.display = "block";
            document.getElementById('nineletterbox').style.filter = "blur(4px)";
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
            document.getElementById('nineletterbox').style.filter = "blur(4px)";
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
    document.getElementById('nineletterbox').style.filter = "blur(0px)";
    document.getElementById('level1-letter-container').style.filter = "blur(0px)";
    modal.style.display = "none";
    document.getElementById('letter-1').innerHTML = "_";
    document.getElementById('letter-2').innerHTML = "_";
    document.getElementById('letter-3').innerHTML = "_";
    document.getElementById('letter-4').innerHTML = "_";
    document.getElementById('letter-5').innerHTML = "_";
    document.getElementById('letter-6').innerHTML = "_";
    if (document.getElementById('I').style.display = "none")
        document.getElementById('I').style.display = "block";
    if (document.getElementById('T').style.display = "none")
        document.getElementById('T').style.display = "block";
    if (document.getElementById('R').style.display = "none")
        document.getElementById('R').style.display = "block";
    if (document.getElementById('L').style.display = "none")
        document.getElementById('L').style.display = "block";
    if (document.getElementById('M').style.display = "none")
        document.getElementById('M').style.display = "block";
    if (document.getElementById('P').style.display = "none")
        document.getElementById('P').style.display = "block";
    if (document.getElementById('E').style.display = "none")
        document.getElementById('E').style.display = "block";
    if (document.getElementById('U').style.display = "none")
        document.getElementById('U').style.display = "block";
    if (document.getElementById('S').style.display = "none")
        document.getElementById('S').style.display = "block";      

}
function gonext() {
    document.getElementById('nextlevel-modal-background').style.display = "none";
    location = '../Levels-HTML/Level 7.html';
    console.clear();
}

function myword() {
    sir = sir.toString();
    for (j = 0; j < sir.length; j++)
        sir = sir.replace(",", "");

    return sir;
}