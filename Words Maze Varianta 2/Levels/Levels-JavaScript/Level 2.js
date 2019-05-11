var sir = [];
var k = 0;
var key = ["P", "A", "C", "T"];
var word1 = "C,A,P,E";
var word2 = "P,A,C,E";
var word3 = "P,A,T,E";
var word4 = "P,E,A,T";
var word5 = "T,A,P,E";
var nextlevelmodal = document.getElementById('modal');
var clap = document.getElementById('clap');
var fail = document.getElementById('fail');
var SlowClap = document.getElementById('Slow-Clap');

function P(){
    document.getElementById('P').style.display = "none";
    let x = "P";
    sir.push(x);
    console.log(sir);
    k= k+1;
    if ( k==1 )
    document.getElementById('letter-1').innerHTML= x;
    if ( k==2 )
    document.getElementById('letter-2').innerHTML= x;
    if ( k==3 )
    document.getElementById('letter-3').innerHTML= x;
    if ( k==4 )
    document.getElementById('letter-4').innerHTML= x;
    verify();
}

function A(){
    document.getElementById('A').style.display = "none";
    let x = "A";
    sir.push(x);
    console.log(sir);
    k= k+1;
    if ( k==1 )
    document.getElementById('letter-1').innerHTML= x;
    if ( k==2 )
    document.getElementById('letter-2').innerHTML= x;
    if ( k==3 )
    document.getElementById('letter-3').innerHTML= x;
    if ( k==4 )
    document.getElementById('letter-4').innerHTML= x;
    verify();
}

function C(){
    document.getElementById('C').style.display = "none";
    let x = "C";
    sir.push(x);
    console.log(sir);
    k= k+1;
    if ( k==1 )
    document.getElementById('letter-1').innerHTML= x;
    if ( k==2 )
    document.getElementById('letter-2').innerHTML= x;
    if ( k==3 )
    document.getElementById('letter-3').innerHTML= x;
    if ( k==4 )
    document.getElementById('letter-4').innerHTML= x;
    verify();
}

function E(){
    document.getElementById('E').style.display = "none";
    let x = "E";
    sir.push(x);
    console.log(sir);
    k= k+1;
    if ( k==1 )
    document.getElementById('letter-1').innerHTML= x;
    if ( k==2 )
    document.getElementById('letter-2').innerHTML= x;
    if ( k==3 )
    document.getElementById('letter-3').innerHTML= x;
    if ( k==4 )
    document.getElementById('letter-4').innerHTML= x;
    verify();
}

function T(){
    document.getElementById('T').style.display = "none";
    let x = "T";
    sir.push(x);
    console.log(sir);
    k= k+1;
    if ( k==1 )
    document.getElementById('letter-1').innerHTML= x;
    if ( k==2 )
    document.getElementById('letter-2').innerHTML= x;
    if ( k==3 )
    document.getElementById('letter-3').innerHTML= x;
    if ( k==4 )
    document.getElementById('letter-4').innerHTML= x;
    verify();
}

function backspace(){
    if ( k>0 ){
    if (sir.slice(-1) == "P")
    document.getElementById('P').style.display = "block";
    if (sir.slice(-1) == "A")
    document.getElementById('A').style.display = "block";
    if (sir.slice(-1) == "C")
    document.getElementById('C').style.display = "block";
    if (sir.slice(-1) == "E")
    document.getElementById('E').style.display = "block";
    if (sir.slice(-1) == "T")
    document.getElementById('T').style.display = "block";
        
    sir.pop();
    console.log(sir);
    if ( k == 1 ){
    document.getElementById('letter-1').innerHTML= "_";
    k = k-1;
    }
    if ( k == 2 ){
    document.getElementById('letter-2').innerHTML= "_";
    k = k-1;
    }
    if ( k == 3 ){
    document.getElementById('letter-3').innerHTML= "_";
    k = k-1;
    }
}
}

function verify(){
    if (k == 4){
    if (sir.toString() == key){
        sir = myword();
        document.getElementById('body').style.backgroundColor = "#000000ef";
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
        k= 0 ;
}

    else if(sir.toString() == word1 || sir.toString() == word2 || sir.toString() == word3 || sir.toString() == word4 || sir.toString() == word5){
        sir = myword();
        document.getElementById('body').style.backgroundColor = "#000000ef";
        document.getElementById('fiveletterbox').style.filter = "blur(4px)";
        document.getElementById('level1-letter-container').style.filter = "blur(4px)";
        document.getElementById('modal-word').innerHTML = sir;
        document.getElementById('modal-header-text').innerHTML = "Cool!";
        document.getElementById('modal-body-text').innerHTML = "You have found a word, but not the keyword:";
        document.getElementById('modalbutton').innerHTML = "Keep Trying!";
        document.getElementById('modalbutton').addEventListener('click' , closemodal);
        nextlevelmodal.style.display = "flex";
        SlowClap.play();
        sir = [];
        k = 0 ;
}

    else {
        sir = myword(); 
        document.getElementById('body').style.backgroundColor = "#000000ef";
        document.getElementById('fiveletterbox').style.filter = "blur(4px)";
        document.getElementById('level1-letter-container').style.filter = "blur(4px)";
        document.getElementById('modal-word').innerHTML = sir;
        document.getElementById('modal-header-text').innerHTML = "Sorry!";
        document.getElementById('modal-body-text').innerHTML = "Didn't heard of this:";
        document.getElementById('modalbutton').innerHTML = "Try Again!";
        document.getElementById('modalbutton').addEventListener('click' , closemodal);
        nextlevelmodal.style.display = "flex";
        fail.play();
        sir = [];
        k= 0;
        }
}
}  

function closemodal(){
    document.getElementById('body').style.backgroundColor = "#ffffff33";
    console.clear();
    document.getElementById('fiveletterbox').style.filter = "blur(0px)";
    document.getElementById('level1-letter-container').style.filter = "blur(0px)";
    modal.style.display= "none";
    document.getElementById('letter-1').innerHTML= "_";
    document.getElementById('letter-2').innerHTML= "_";
    document.getElementById('letter-3').innerHTML= "_";
    document.getElementById('letter-4').innerHTML= "_";
    if(document.getElementById('P').style.display = "none")
    document.getElementById('P').style.display = "block";
    if(document.getElementById('A').style.display = "none")
    document.getElementById('A').style.display = "block";
    if(document.getElementById('C').style.display = "none")
    document.getElementById('C').style.display = "block";
    if(document.getElementById('E').style.display = "none")
    document.getElementById('E').style.display = "block";
    if(document.getElementById('T').style.display = "none")
    document.getElementById('T').style.display = "block";
}
function gonext() {
    document.getElementById('body').style.backgroundColor = "#ffffff33";
    location = '../Levels-HTML/Level 3.html';
    console.clear();
}

function myword(){
    sir = sir.toString();
    for(j=0;j<sir.length;j++)
    sir = sir.replace("," , "");

    return sir;
}