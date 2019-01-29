function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!audio) return; //stop function from running
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return; //stop function if transition isn't transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
