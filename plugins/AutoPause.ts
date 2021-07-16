import MediaPlayer from "../src/MediaPlayer";

class AutoPause {
     private threshold: number;
     player: HTMLMediaElement 
    constructor(video: HTMLMediaElement) {
        this.threshold = 0.25;
        this.player = video
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
      }
    run(){
        const observer = new IntersectionObserver(this.handlerIntersection,{
            threshold: this.threshold,
        });

        observer.observe(this.player);

        document.addEventListener('visibilitychange',this.handlerVisibilityChange)
    }
    private handlerIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0];
        
        entry.isIntersecting ? this.player.play() : this.player.pause();

    }

    private handlerVisibilityChange(){
        const isVisibility = document.visibilityState === 'visible'

        isVisibility? this.player.play() : this.player.pause();
    }
}

export default AutoPause;

function video(video: any) {
    throw new Error("Function not implemented.");
}
