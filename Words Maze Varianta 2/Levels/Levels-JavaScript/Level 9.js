var sir = [];
var k = 0;
var key = ["F", "R", "A", "N", "C", "E"];
var word1 = "C,A,N,T,O,R";
var word2 = "C,A,R,T,E,L";
var word3 = "C,E,N,T,A,L";
var word4 = "C,O,N,F,E,R";
var word5 = "C,O,R,N,E,A";
var word6 = "E,T,A,L,O,N";
var word7 = "F,A,C,T,O,R";
var word8 = "F,A,L,C,O,N";
var word9 = "L,A,N,C,E,R";
var word10 = "L,E,C,T,O,R";
var word11 = "L,O,A,N,E,R";
var word12 = "N,E,C,T,A,R";
var word13 = "O,C,T,A,N,E";
var word14 = "O,R,A,C,L,E";
var word15 = "R,E,N,T,A,L";
var word16 = "T,E,F,L,O,N";
var word17 = "T,R,A,N,C,E";
var word18 = "L,O,C,A,T,E";
var nextlevelmodal = document.getElementById('modal');
var clap = document.getElementById('clap');
var fail = document.getElementById('fail');
var Ba_Dum_Tss = document.getElementById('Ba Dum Tss');
var score = document.getElementById('myscore').innerHTML;
document.getElementById('points').innerHTML = score;

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
function O() {
    document.getElementById('O').style.display = "none";
    let x = "O";
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
    if (k == 4)
        document.getElementById('letter-4').innerHTML = x;
    if (k == 5)
        document.getElementById('letter-5').innerHTML = x;
    if (k == 6)
        document.getElementById('letter-6').innerHTML = x;       
    verify();
}

function N() {
    document.getElementById('N').style.display = "none";
    let x = "N";
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
    if (k == 6)
        document.getElementById('letter-6').innerHTML = x;       
    verify();
} 

function backspace() {
    if (k > 0) {
        if (sir.slice(-1) == 'E')
        document.getElementById('E').style.display = "block";
        if (sir.slice(-1) == 'F')
        document.getElementById('F').style.display = "block";
        if (sir.slice(-1) == 'L')
        document.getElementById('L').style.display = "block";
        if (sir.slice(-1) == 'O')
        document.getElementById('O').style.display = "block";
        if (sir.slice(-1) == 'R')
        document.getElementById('R').style.display = "block";
        if (sir.slice(-1) == 'T')
        document.getElementById('T').style.display = "block";
        if (sir.slice(-1) == 'C')
        document.getElementById('C').style.display = "block";
        if (sir.slice(-1) == 'N')
        document.getElementById('N').style.display = "block";
        if (sir.slice(-1) == 'A')
        document.getElementById('A').style.display = "block";
        
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
            score = score + 100;
            document.getElementById('points').innerHTML = score;
            document.getElementById('myscore').innerHTML = score;
            clap.play();
            sir = [];
            k = 0;
        }

        else if (sir.toString() == word1 || sir.toString() == word2 || sir.toString() == word3 || sir.toString() == word4 || sir.toString() == word5 || sir.toString() == word6 || sir.toString() == word7 || sir.toString() == word8 || sir.toString() == word9 || sir.toString() == word10 || sir.toString() == word11 || sir.toString() == word12 || sir.toString() == word13 || sir.toString() == word14 || sir.toString() == word15 || sir.toString() == word16 || sir.toString() == word17 || sir.toString() == word18) {
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
            score = score + 50;
            document.getElementById('points').innerHTML = score;
            document.getElementById('myscore').innerHTML = score;
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
            score = score - 10;
            document.getElementById('points').innerHTML = score;
            document.getElementById('myscore').innerHTML = score;
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
    if (document.getElementById('E').style.display = "none")
        document.getElementById('E').style.display = "block";
    if (document.getElementById('F').style.display = "none")
        document.getElementById('F').style.display = "block";
    if (document.getElementById('L').style.display = "none")
        document.getElementById('L').style.display = "block";
    if (document.getElementById('O').style.display = "none")
        document.getElementById('O').style.display = "block";
    if (document.getElementById('R').style.display = "none")
        document.getElementById('R').style.display = "block";
    if (document.getElementById('T').style.display = "none")
        document.getElementById('T').style.display = "block";
    if (document.getElementById('C').style.display = "none")
        document.getElementById('C').style.display = "block";
    if (document.getElementById('N').style.display = "none")
        document.getElementById('N').style.display = "block";
    if (document.getElementById('A').style.display = "none")
        document.getElementById('A').style.display = "block";      

}
function gonext() {
    document.getElementById('nextlevel-modal-background').style.display = "none";
    location = '../Levels-HTML/Level 10.html';
    console.clear();
}

function myword() {
    sir = sir.toString();
    for (j = 0; j < sir.length; j++)
        sir = sir.replace(",", "");

    return sir;
}