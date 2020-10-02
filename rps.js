var uRock= document.getElementById("uRock");
var uPaper= document.getElementById("uPaper");
var uScissors= document.getElementById("uScissors");
var score= document.getElementById("scr");
var result= document.getElementById("result");
var uScore=0;
var cScore=0;

function compInput(){
    var index= Math.floor(Math.random()*3);
    var l=["r","p","s"];
    return l[index];
}

function game(val){
    var compVal=compInput();
    if(compVal==val){
        result.innerHTML="Try again... :|"
    }
    if(val=="r" && compVal=="s"){
        result.innerHTML="Rock crushes Scissors :)";
        uScore+=1;
    }
    if(val=="p" && compVal=="r"){
        result.innerHTML="Paper covers Rock :)";
        uScore+=1;
    }
    if(val=="s" && compVal=="p"){
        result.innerHTML="Scissors cuts Paper :)";
        uScore+=1;
    }
    if(val=="r" && compVal=="p"){
        result.innerHTML="Paper covers Rock :(";
        cScore+=1;
    }
    if(val=="p" && compVal=="s"){
        result.innerHTML="Scissors cuts Paper :(";
        cScore+=1;
    }
    if(val=="s" && compVal=="r"){
        result.innerHTML="Rock crushes Scissors :(";
        cScore+=1;
    }

    score.innerHTML=uScore+" : "+cScore;

    if(uScore==10){
        result.innerHTML="<h1>You Win :)</h1>";
        uScore=0;
        cScore=0;
    }
    else if(cScore==10){
        result.innerHTML="<h1>You Lose :(</h1>";
        uScore=0;
        cScore=0;
    }
}

uRock.addEventListener('click',function(){
    game("r");
})
uPaper.addEventListener('click',function(){
    game("p");
})
uScissors.addEventListener('click',function(){
    game("s");
})