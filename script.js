const sounds = [

    "assets/274445__creeper_ciller78__grunt1.wav",
    "assets/661242__deqsterslab__swing-grunt.mp3",
    "freesound_community-vargan-00-20-74013.mp3"

];

document.addEventListener("click", () => {

    const random = Math.floor(Math.random() * sounds.length);

    const audio = new Audio(sounds[random]);

    audio.play();

});
