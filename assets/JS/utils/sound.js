

cc.Class({
    extends: cc.Component,

    properties: {
        soundSeal: {
            default: null,
            type: cc.AudioClip
        },
        soundPage: {
            default: null,
            type: cc.AudioClip
        },
        // soundBg: {
        //     default: null,
        //     type: cc.AudioClip
        // },
    },


    // onLoad () {},

    start () {

    },
    playSealSound() {
        cc.audioEngine.play(this.soundSeal, false, 0.8);
    },
    playPageSound() {
        cc.audioEngine.play(this.soundPage, false, 0.8);
    },
    // playBgSound() {
    //     cc.audioEngine.play(this.soundBg, false, 1);
    // },

    // update (dt) {},
});
