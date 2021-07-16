import MediaPlayer from "../src/MediaPlayer";

class AutoPlay {
    constructor() { }
    run(player: MediaPlayer) {
      player.video.muted = true
      player.play()
    }
  }


export default AutoPlay;