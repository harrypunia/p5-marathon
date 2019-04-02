class MP3 {
    constructor() {
        this.amp = new p5.Amplitude();
        this.smoothVol = 0.0;
    }
    update(smoothness = 0.05) {
        this.vol = this.amp.getLevel();
        this.smoothVol = lerp(this.smoothVol, this.vol, smoothness);
    }
}
