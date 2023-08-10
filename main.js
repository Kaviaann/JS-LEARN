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
    dNumber.innerHTML = Math.floor(Math.random() * 11);

    switch(dNumber.value){
        case "0":
            roleD.innerHTML = "Doctor";
            break;

        case "1":
            roleD.innerHTML = "Detective";
            break;

        case "2":
            roleD.innerHTML = "Doctor";
            break;

        case "3":
            roleD.innerHTML = "Detective";
            break;

        case "4":
            roleD.innerHTML = "Mafia";
            break;

        case "5":
            roleD.innerHTML = "Mafia";
            break;

        case "6":
            roleD.innerHTML = "Innocent";
            break;

        case "7":
            roleD.innerHTML = "Innocent";
            break;

        case "8":
            roleD.innerHTML = "Innocent";
            break;

        case "9":
            roleD.innerHTML = "Innocent";
            break;

        case "10":
            roleD.innerHTML = "Innocent";
            break;

        


    }
})




