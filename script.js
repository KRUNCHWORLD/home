const sounds = [

   "Scale in C Step 4.wav",
   "Scale in C Step 3.wav",
   "Scale in C Step 2.wav",
   "Scale in C Step 1.wav",
   "howmuch.wav"

];

document.addEventListener("click", () => {

    const random = Math.floor(Math.random() * sounds.length);

    const audio = new Audio(sounds[random]);

    audio.play();

});
