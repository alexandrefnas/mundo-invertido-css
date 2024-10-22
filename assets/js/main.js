let audioOn = false;

let buttonInverterWold = document.getElementById('switch-theme-button');

buttonInverterWold.addEventListener('click', switchTheme);

window.addEventListener('click', audioOnClick);

function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const theme = document.body.classList[0];
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('music');
    audio.src = `assets/musics/${music}`;
    audio.play();
    audio.volume = 0.2;
    console.log("cheguei");
}
  
function audioOnClick () {
    const audio = document.getElementById('music');
    if (!audioOn) {     
        audioOn = true;
        audio.play();
        audio.volume = 0.2;        
    } else {
        audioOn = false;
        audio.pause();
        audio.currentTime = 0;
    }
  }