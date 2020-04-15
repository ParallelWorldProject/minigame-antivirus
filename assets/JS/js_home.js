//home
//1：接受 后端信息  传递 信息给子区域
//2：收获 子区域信息 传递 信息给后端
//3: 加载 页面动画  


//获得两个区域，等下准备给他们传消息
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
        // 发送请求
        HttpHelper.httpPost('/test','',data=>{
            cc.log('data',data)
        })
        
         //may play animation ？
         //this.homeAnim.play('？启动动画？');

         //信息
        /*this.information ={
            curCardId:0,
            storyId:0,
            nextCardId:9,
            sellected:0,
            message:'this is a message!this is a message!this is a message!this is a message!',
            picUrl:'null',
            name:'myname',
            from:'CN',
            date:'04/14/2020',

            optionA:{
            desc:"this is a A desc",
            imgUrl:'null',
            change:[5, 0, -10, 20]
            },
            optionB:{
            desc:"this is a B desc",
            imgUrl:'null',
            change:[0, 0, 10, 15]
            }
        }*/
    
        this.dataInfo = {
            budget:50 ,
            resource:50 ,
            health: 50,
            popularity:50
        }
        this.cardInfo = {
            from:"CN" ,
            name:"Tony",
            date:"4/14/2014",
            information:"this is a message!this is a message!this is a message!this is a message!"
        }
        //console.log(this.dataInfo.budget);
        /*
        //当得到后台的信息输入时  处理信息 并 传递信息给子区域
        this.node.on("getBackStageInformation",
        function( msg ){
            //dataRegion.update(msg);
            //cardRegion.update(msg);
        }
        ,this
        )

        //当得到后台的信息输入时  传递信息给子区域
        this.node.on("update",
        function( msg ){
            //通知后台处理
        }
        ,this
        )
        */
     },

    start:function () {
        this.dataRegion.init(this.dataInfo);
        this.cardRegion.init(this);
    },

    updateInfo : function( dataInfo )
    {
        this.dataRegion.updateInfo(dataInfo);
        //this.cardRegion.update(this,this.cardInfo);
    }
   

}
);
