import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';

const video = document.querySelector('video');
const button = document.querySelector('button');
const buttonMute = document.getElementById('mute-unmute');

const player = new MediaPlayer({ el:video, plugins: [ /*new AutoPlay(video)  */]})
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toogleMuteUnMute();


