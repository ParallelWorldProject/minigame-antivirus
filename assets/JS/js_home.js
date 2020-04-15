//1: 加载所有游戏部件 与 动画
//2: 存储信息并进行前后端总体交互

const CardRegion = require('js_cardRegion');
const DataRegion = require('js_dataRegion');

cc.Class({
    extends: cc.Component,


    properties: {
        homeAnim: {  //动画
            default: null,
            type: cc.Animation
        },
        cardRegion: {  //卡片区域
            default: null,
            type: CardRegion
        },
        dataRegion: {  //数值区域
            default: null,
            type: DataRegion
        },
        backStage: { //后端
            default: null,
            type: cc.Node
        },
    },

     onLoad:function () {
        //储存游戏需要的信息
        this.information =
        {
            //和后端交互的信息
            gameInfo : {
                playerId:0,
                curCardId:0,
                storyId:0,
                sellected:'0',
            },
            //和数据区交互的信息
            dataInfo : {
                budget:0 ,
                resource:0 ,
                health: 0,
                popularity:0
            },
            //和卡牌区交互的信息
            cardInfo : {
                from:"0" ,
                name:"0",
                date:"0/00/0000",
                information:"000000000",
                picUrl:'000',
                optionA:{
                    change:[0,0,0,0]
                },
                optionB:{
                    change:[0,0,0,0]
                },
            }
        }  
        
     },

    start:function () {
        this.dataRegion.updateInfo(this.information.dataInfo);
        this.cardRegion.updateInfo(this.information.cardInfo);
    },



    acceptCheck : function(  ) {

        this.information.dataInfo.budget += 1;
        this.information.dataInfo.resource += 2;
        this.information.dataInfo.health += 3;
        this.information.dataInfo.popularity += 4;

       this.dataRegion.updateInfo(this.information.dataInfo);
    }
    
    
}
);
