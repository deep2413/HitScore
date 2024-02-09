var clutter = "";
var score = 0;
var timer = 20;
var hitrn = "";


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
};

function makeBubble(){

    for( var i = 1 ; i <=126 ; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble col-md-4 " style="width: 45px;">
        ${rn}
   </div> `;
    }
    document.querySelector("#pbtom").innerHTML = clutter;
};

function runTimer(){
    var timerint = setInterval( function(){
        if (timer > 0 ){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtom").innerHTML = `<img src="https://pbs.twimg.com/media/Fr-RVDuWwAAaH7I.jpg" height = "400px" class="col-md-12 img-fluid w-50 "> <br> <h1 class="d-flex justify-content-center ">Your Score ${score}</h1`
        }
    }, 1000)
};

function getNewHit(){
   hitrn = Math.floor(Math.random()*10);

    document.querySelector("#hitval").textContent = hitrn
};

document.querySelector("#pbtom").addEventListener("click", function (dets) {
    var clicknumber = (Number(dets.target.textContent));
    if(clicknumber === hitrn){
        increaseScore();
        getNewHit();
    }
});


makeBubble();
runTimer();
getNewHit();
