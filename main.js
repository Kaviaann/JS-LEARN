// Music Controls

let music = document.getElementById("music");
let musicBtn = document.querySelectorAll(".musicBtn");


function mute(){
    if(music.muted==true){
        music.muted = false;
        musicBtn[0].style.color = "white";
    }

    else{
        music.muted = true;
        musicBtn[0].style.color = "lightgreen";
    }
}

function loop(){
    if(music.loop==true){
        music.loop = false;
        musicBtn[1].style.color = "white";
    }

    else{
        music.loop = true;
        musicBtn[1].style.color = "lightgreen";
    }
}

function stop(){
    music.pause();
    musicBtn[3].style.color = "red";
    musicBtn[4].style.color = "white";
}


function play(){
    music.play();
    musicBtn[4].style.color = "red";
    musicBtn[3].style.color = "white";
}

function reset(){
    music.currentTime = 0;
    musicBtn[0].style.color = "white";
    musicBtn[1].style.color = "white";
    musicBtn[2].style.color = "white";
    musicBtn[3].style.color = "white";
    musicBtn[4].style.color = "white";
}

music.addEventListener("ended", function(){
    this.currentTime = 0;
    musicBtn[3].style.color = "white";
},false);





//dicegame

let dNumber = document.getElementById("numberDice");
let rDice = document.getElementById("rDice");
let roleD = document.getElementById("role");


rDice.addEventListener("click", function(){
    let nDice = Math.floor(Math.random() * 11);

    rDice.style.display = "none";

    dNumber.innerHTML = nDice;

    let myVar = setInterval(myTimer, 1000);

    function myTimer() {
    const d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
    
    }

    switch(nDice){
        
        case 0 :
            roleD.innerHTML = "you are a doctor <br><br> u need to choose someone to save at <b>night time</b>";
            break;

        case 1 :
            roleD.innerHTML = "you are a doctor <br><br> u need to choose someone to save at <b>night time</b>";
            break;

        case 2 :
            roleD.innerHTML = "you are a detective <br><br> u need to choose someone that u suspect will be a mafia at <b>night time</b>";
            break;

        case 3 :
            roleD.innerHTML = "you are a detective <br><br> u need to choose someone that u suspect will be a mafia at <b>night time</b>";
            break;

        case 4 :
            roleD.innerHTML = "you are a mafia <br><br> u need to choose someone to kill at <b>night time</b>";
            break;

        case 5 :
            roleD.innerHTML = "you are a mafia <br><br> u need to choose someone to kill at <b>night time</b>";
            break;

        case 6 :
            roleD.innerHTML = "you are an innocent <br><br> u have to survive through night time and vote someone that suspicious";
            break;
            
        case 7 :
            roleD.innerHTML = "you are an innocent <br><br> u have to survive through night time and vote someone that suspicious";
            break;
            
        case 8 :
            roleD.innerHTML = "you are an innocent <br><br> u have to survive through night time and vote someone that suspicious";
            break;
    
        case 9 :
            roleD.innerHTML = "you are an innocent <br><br> u have to survive through night time and vote someone that suspicious";
            break;

        case 10 :
            roleD.innerHTML = "you are an innocent <br><br> u have to survive through night time and vote someone that suspicious";
            break;


    }

})


