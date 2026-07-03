const sounds = [

    "274445__creeper_ciller78__grunt1.wav",
    "661242__deqsterslab__swing-grunt.mp3",
    "freesound_community-vargan-00-20-74013.mp3"
    "Scale in C Step 4.wav"
    "Scale in C Step 3.wav"
    "Scale in C Step 2.wav"
    "Scale in C Step 1.wav"

];

document.addEventListener("click", () => {

    const random = Math.floor(Math.random() * sounds.length);

    const audio = new Audio(sounds[random]);

    audio.play();

});
