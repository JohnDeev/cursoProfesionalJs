class AutoPause {
    constructor(video) {
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
    handlerIntersection(entries){
        const entry = entries[0];

        console.log(entry);

        entry.isIntersecting ? this.player.play() : this.player.pause();

    }

    handlerVisibilityChange(){
        const isVisibility = document.visibilityState === 'visible'

        isVisibility? this.player.play() : this.player.pause();
    }
}

export default AutoPause;