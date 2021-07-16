import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';
import AutoPause from '../plugins/AutoPause.js';

const video = document.querySelector('video');
const button = document.querySelector('button');
const buttonMute = document.getElementById('mute-unmute');

const player = new MediaPlayer({
     el:video, 
     plugins: [ new AutoPlay(video), new AutoPause(video) ],
    });
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toogleMuteUnMute();



if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch(error=> {
        console.log(error.message);
    });
}