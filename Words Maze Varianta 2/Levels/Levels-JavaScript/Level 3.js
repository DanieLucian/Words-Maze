var sir = [];
var k = 0;
var key = ["Z", "A", "P"];
var word1 = "A,P,E";
var word2 = "P,E,A";
var word3 = "Z,E,P";
var nextlevelmodal = document.getElementById('modal');
var clap = document.getElementById('clap');
var fail = document.getElementById('fail');
var SlowClap = document.getElementById('Slow-Clap');

function Z(){
    document.getElementById('Z').style.display = "none";
    let x = "Z";
    sir.push(x);
    console.log(sir);
    k= k+1;
    if ( k==1 )
    document.getElementById('letter-1').innerHTML= x;
    if ( k==2 )
    document.getElementById('letter-2').innerHTML= x;
    if ( k==3 )
    document.getElementById('letter-3').innerHTML= x;
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
    verify();
}

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
    verify();
}

function backspace(){
    if ( k>0 ){
        if (sir.slice(-1) == 'Z')
        document.getElementById('Z').style.display = "block";
        if (sir.slice(-1) == 'P')
        document.getElementById('P').style.display = "block";
        if (sir.slice(-1) == 'A')
        document.getElementById('A').style.display = "block";
        if (sir.slice(-1) == 'E')
        document.getElementById('E').style.display = "block";
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
    if (sir.lastIndexOf('Z'))
    document.getElementById('Z').style.display = "block";
    if (sir.lastIndexOf('P'))
    document.getElementById('P').style.display = "block";
    if (sir.lastIndexOf('A'))
    document.getElementById('A').style.display = "block";
    if (sir.lastIndexOf('E'))
    document.getElementById('E').style.display = "block"; 
}
}

function verify(){
    if (k == 3){
    if (sir.toString() == key){
        sir = myword();
        document.getElementById('body').style.backgroundColor = "#00000034";
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

    else if(sir.toString() == word1 || sir.toString() == word2 || sir.toString() == word3 ){
        sir = myword();
        document.getElementById('body').style.backgroundColor = "#00000034";
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
        document.getElementById('body').style.backgroundColor = "#00000034";
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
    if(document.getElementById('Z').style.display = "none")
    document.getElementById('Z').style.display = "block";
    if(document.getElementById('P').style.display = "none")
    document.getElementById('P').style.display = "block";
    if(document.getElementById('A').style.display = "none")
    document.getElementById('A').style.display = "block";
    if(document.getElementById('E').style.display = "none")
    document.getElementById('E').style.display = "block";
}
function gonext() {
    document.getElementById('body').style.backgroundColor = "#ffffff33";
    location = '../Levels-HTML/Level 4.html';
    console.clear();
}

function myword(){
    sir = sir.toString();
    for(j=0;j<sir.length;j++)
    sir = sir.replace("," , "");

    return sir;
}