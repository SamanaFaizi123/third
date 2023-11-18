"use strict"

// document.querySelector(".number").textContent = 18;

// document.querySelector(".guess").value;
let secretNumber =Math.trunc((Math.random()*20)+1)
let score=20;
document.querySelector(".score").textContent = score;
let highScore =0;
// document.querySelector(".number").textContent=secretNumber;
document.querySelector(".check").addEventListener("click",function x(){
    const guessnumber = Number(document.querySelector(".guess").value);
    if(!guessnumber){
        document.querySelector(".message").textContent="No Number😑😑";
    }
    
    else if(secretNumber>guessnumber){
        if(score>1){
            document.querySelector(".message").textContent="low😣😣";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent="you lose the game😞😞";
            score=0;
            document.querySelector(".score").textContent = score;
        }
        
    }else if(secretNumber<guessnumber){
        if(score>1){
            document.querySelector(".message").textContent="High😲😲";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent="you lose the game😔😔";
            score=0;
            document.querySelector(".score").textContent = score;
        }
        
    }else if(secretNumber===guessnumber){
        document.querySelector(".message").textContent="Corect Guess🏆🏆";
        document.querySelector("body").style.backgroundColor ="green";
        document.querySelector(".number").style.width ='28rem';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore
        }
    }
});
document.querySelector(".agian").addEventListener("click",function(){
     secretNumber =Math.trunc((Math.random()*20)+1)
score=20;
document.querySelector(".score").textContent = score;
document.querySelector(".message").textContent="Start Guessing...";
document.querySelector("body").style.backgroundColor ="#222";
        document.querySelector(".number").style.width ="15rem";
        document.querySelector(".guess").value="";

});


