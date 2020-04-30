

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
        cc.audioEngine.play(this.soundSeal, false, 1);
    },
    playPageSound() {
        cc.audioEngine.play(this.soundPage, false, 1);
    },
    // playBgSound() {
    //     cc.audioEngine.play(this.soundBg, false, 1);
    // },

    // update (dt) {},
});
