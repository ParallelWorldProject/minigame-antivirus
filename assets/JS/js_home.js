//1: 加载所有游戏部件 与 动画
//2: 存储信息并进行前后端总体交互
const GameInfo = require("js_gameInformation");
const CardRegion = require('js_cardRegion');
const DataRegion = require('js_dataRegion');

cc.Class({
    extends: cc.Component,
    properties: {
        cardRegion: {  //卡片区域
            default: null,
            type: CardRegion
        },
        dataRegion: {  //数值区域
            default: null,
            type: DataRegion
        },
        loadingPre: cc.Prefab
    },

     onLoad:function () {
        // 首次加载loading动画
        // this.showMask();
       
        //模拟从后台获得的数据
        this.information = {
            cards:
            [   
                {//卡1
                errorcode:0,
                message:"游戏开始",
                
                id : 1,
                from:"1" ,
                name:"1",
                date:"11", //?
                durtion : 1,
                weight : 1000 ,
                information:"1111", //?
                picUrl:'cardimg1',

                option:{
                    A:{
                       desc : "ok",
                       valChanged :{
                        "infectedCount" : [5,0],
                        "dailyRecovery" : [0,5]
                       } ,
                       weigthChanged: null,
                       nextCard: 0,

                    },
                    B:{
                        desc : "ok",
                        valChanged :{
                         "infectedCount" : [5,0],
                         "dailyRecovery" : [0,5]
                        } ,
                        weigthChanged: null,
                        nextCard: 0,

                     },
                    },
                },
                {//卡2
                    errorcode:0,
                    message:"游戏开始",
                    
                    id : 2,
                    from:"2" ,
                    name:"2",
                    date:"22", //?
                    durtion : 2,
                    weight : 1000 ,
                    information:"2222", //?
                    picUrl:'cardimg2',

                    option:{
                        A:{
                           desc : "ok",
                           valChanged :{
                            "infectedCount" : [5,0],
                            "dailyRecovery" : [0,5]
                           } ,
                           weigthChanged: null,
                           nextCard: 0,

                        },
                        B:{
                            desc : "ok",
                            valChanged :{
                             "infectedCount" : [-5,0],
                             "dailyRecovery" : [0,-5]
                            } ,
                            weigthChanged: null,
                            nextCard: 0,
 
                         },
                    }
                },
                {///卡3
                    errorcode:0,
                    message:"游戏开始",
                    
                    id : 3,
                    from:"3" ,
                    name:"3",
                    date:"33", //?
                    durtion : 3,
                    weight : 1000 ,
                    information:"3333", //?
                    picUrl:'cardimg3',
    
                    option:{
                        A:{
                           desc : "ok",
                           valChanged :{
                            "infectedCount" : [5,0],
                            "dailyRecovery" : [0,5]
                           } ,
                           weigthChanged: null,
                           nextCard: 0,
    
                        },
                        B:{
                            desc : "ok",
                            valChanged :{
                             "infectedCount" : [-5,0],
                             "dailyRecovery" : [0,-5]
                            } ,
                            weigthChanged: null,
                            nextCard: 0,
    
                         },
                        },
                 },
            ]
        }
        
        this.gameInformation = new GameInfo.gameInformationList();

        // 从后端 获取卡牌
        var storyid = localStorage.getItem('storyid')
        let params = {
            handcardid: 1,  //当前卡id
            storyid,
            day: 1
        }

        HttpHelper.httpPost('/getnextcard',params, (data) =>  {
            if(data.errorcode === 0) {

                let cardInfo =  new CardInfo(data.content)
                cc.log('cardInfo',cardInfo)

                //this.gameInformation.setDataInfo(); datainfo固定为50 50 50 100
                this.gameInformation.setNewCardInfo(cardInfo);
        
                console.log("前台存放数据:" , this.gameInformation.dataInfo)
                for( prop in this.gameInformation.getDataInfo() ) {
                    console.log( prop + " : " + this.gameInformation.dataInfo[prop] );
                }

                //初始化两个区域
                this.dataRegion.init(this.gameInformation.getDataInfo());
                this.cardRegion.init(this.gameInformation.getTopCardInfo());
            }
        })
       

     },

    start:function () {

        // 监听双击、按住松开事件
        this.node.on('DoubleClick', function (event) {
            let select ;
            if (event.SelectBtn === 'AC_DoubleClick') {
                select = 'A';
            } else if (event.SelectBtn === 'DE_DoubleClick') {
                select = 'B';
            }
            cc.log('click ' + select)
            this.updateHome(select)

            // event.stopPropagation();
            // event.bubbles = false
        },this);

        /*
        this.node.on('HoldStart', function (event) {
            cc.log( 'HoldStart');
            // 触摸 计算变量 提示数值可能的变化
            // ....

        },this);

        this.node.on('HoldEnd', function (event) {
            cc.log( 'HoldEnd');
            // 松手 关掉提示
            // ....

        },this);
        */
    },


    updateHome : function(select)
    {
        //按照选项就行计算
        this.gameInformation.calculateAndUpdataData(select);

        //传递数据给后台

        //依照具体情况获取新卡牌
        

        if( this.gameInformation.getCardListLength() <= 1) //如果只剩一张牌了，记得添加
        {
            this.gameInformation.setManyNewCardsInfo(this.information.cards)
        }

        //获取完后更新区域
        this.dataRegion.show(this.gameInformation.dataInfo);  //计算完后更新数据
        this.cardRegion.getNextCard( select , this.gameInformation.getAndPopTopCard() );

        
    },

    
    //必需在showmask后面才能行动
    showMask() {
        if(this.loadingMask == null) {
            this.loadingMask = cc.instantiate(this.loadingPre)
            this.node.parent.addChild(this.loadingMask)
            let loadingBar = this.loadingMask.getChildByName("bar").getComponent(cc.Sprite)

            cc.tween(loadingBar)
            .to(2, { fillRange: 1})
            .call(() => {
                this.loadingMask.getComponent(cc.Animation).play('scaleHide')
                // this.loadingMask.active = false
            })
            .start()
        }
    },
    
});

class CardInfo {
    constructor(data) {
        this.errorcode = 0
        this.message= data.message;
        this.id = data.cardid;
        this.from= data.cfrom ;
        this.name= data.cname;
        this.date= data.durtion;
        this.durtion = data.durtion;
        this.weight = data.weight ;
        this.information= data.message;
        this.picUrl=data.imgurl;

        this.option = {
            A: {
                desc: data.optionOneDesc,
                valChanged: data.optionOneValueChange ? JSON.parse(data.optionOneValueChange) : data.optionOneValueChange ,
                weigthChanged: data.optionOneWeightChange ,
                nextCard: data.optionOneNextCard
            },
            B: {
                desc: data.optionTwoDesc,
                valChanged: data.optionTwoValueChange ? JSON.parse(data.optionTwoValueChange): data.optionTwoValueChange,
                weigthChanged: data.optionTwoWeightChange,
                nextCard: data.optionTwoNextCard
            }
        }
    }
}

