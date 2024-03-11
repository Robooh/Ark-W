const playBtn = document.getElementById('play')
const audio = document.getElementById('audio')

playBtn.addEventListener('click', () => {
        if(audio.paused) {
            audio.play();
            playBtn.classList.remove('fa-play');
            playBtn.classList.add('fa-pause');
        } else {
            audio.pause();
            playBtn.classList.remove('fa-pause');
            playBtn.classList.add('fa-play');
        }
})