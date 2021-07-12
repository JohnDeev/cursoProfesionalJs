class MediaPlayer {
    constructor(config) {
        this.video = config.el;
        this.plugins = config.plugins || [];

        this._initPlugins();
    }
    _initPlugins() {
        this.plugins.forEach(plugins => {
            plugins.run();
        })
    }

    play(){
        this.video.play();
    }
    pause(){
        this.video.pause();
    }
    togglePlay(){
        
        if(this.video.paused){
            this.video.play();
        } else {
            this.video.pause();
        }
    }
    mute(){
        this.video.muted = true;
    }
    unMute(){
        this.video.muted = false;
    }
    toogleMuteUnMute() {
        debugger
        if(this.video.muted){
            this.unMute();
        } else {
            this.mute();
        }
      }

    

}

export default MediaPlayer;
