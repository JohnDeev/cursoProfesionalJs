import MediaPlayer from './MediaPlayer';
import AutoPlay from '../plugins/AutoPlay';
import AutoPause from '../plugins/AutoPause';

const video = document.querySelector('video');
const button = document.querySelector('button');
const buttonMute = document.getElementById('mute-unmute');

const player = new MediaPlayer({
     el:video, 
     plugins: [ new AutoPlay(), new AutoPause(video) ],
    });
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toogleMuteUnMute();



if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch(error=> {
        console.log(error.message);
    });
}