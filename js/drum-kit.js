function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    
}

function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
keys.forEach(key => key.addEventListener("click",playSoundOnClick));

function playSoundOnClick(e){
    console.log(e);
     const audio = document.querySelector(`audio[data-key="${e.path[1].attributes[0].nodeValue}"]`);
     const key = document.querySelector(`.key[data-key="${e.path[1].attributes[0].nodeValue}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
     
     if(e.path[1].attributes[0].name === "class"){

        console.log(e.path[0].attributes[0].nodeValue);
     }

     else console.log(e.path[1].attributes[0].nodeValue);
    
}