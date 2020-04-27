//1: 加载所有游戏部件 与 动画
//2: 存储信息并进行前后端总体交互
const GameManager = require("./utils/gameManager")
const GameInfo = require("js_gameInformation");
const GMIF = require("js_GameInfo");

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
        loadingPre: cc.Prefab,
        maskLayer: cc.Node
    },

     onLoad () {},

    start () {
        this.showMask()

        let params = {
            handcardid: 1,  //当前卡id
            storyid: cc.sys.localStorage.getItem('storyid'),
            day: 1,
        }

        //this.gameInformation = new GameInfo.gameInformationList();
        this.gameInformation = new GMIF.gameInformationList();
        
        HttpHelper.httpPost('/getnextcard',params, (data) =>  {
            if(data.errorcode === 0) {

                let cardInfo =  new CardInfo(data.content)
                cc.log('cardInfo',cardInfo)

                //this.gameInformation.setNewCardInfo(cardInfo);
                this.gameInformation.SolveCapturedCardInfo(cardInfo);
        
                //初始化两个区域
                //this.dataRegion.init(this.gameInformation.getDataInfo());
                //this.cardRegion.init(this.gameInformation.getTopCardInfo());

                this.dataRegion.init(this.gameInformation.getDataRegionInfo());
                this.cardRegion.init(this.gameInformation.getCardRegionInfo());
            }
        })


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
        //this.gameInformation.calculateAndUpdataData(select);
        this.gameInformation.calculateBySelect(select);
        
        // 盖章动画
        let cloneCard = this.cardRegion.sealAnimation( select );
        // this.scheduleOnce(()=>{
        //     this.maskLayer.active = true
        // },1)

        //判定是否结束游戏
        if (this.checkGameOver() ) {return}
        
        //获取新params请求
        //let params = this.gameInformation.getUserInfo(select);
        let params = this.gameInformation.getUserInfo();
        
        HttpHelper.httpPost('/getnextcard',params, (data) =>  {  //根据新params请求
            if(data.errorcode === 0) {

                let cardInfo =  new CardInfo(data.content)
                cc.log('请求成功',cardInfo)

                //这里更新卡牌信息
                //this.gameInformation.setNewCardInfo(cardInfo);

                this.gameInformation.SolveCapturedCardInfo(cardInfo);

                // 移走卡牌
                this.scheduleOnce(()=>{
                    this.maskLayer.active = false
                    this.cardRegion.moveCard(cloneCard)
                },1.7)

                //this.dataRegion.updateData(this.gameInformation.getDataInfo());
                //this.cardRegion.getNextCard(this.gameInformation.getTopCardInfo());

                this.dataRegion.updateData(this.gameInformation.getDataRegionInfo());
                this.cardRegion.getNextCard(this.gameInformation.getCardRegionInfo());
            }
        })
        
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

    checkGameOver() {
        let endingid;
        let day = this.gameInformation.getCardRegionInfo().day;
        let d_info = this.gameInformation.getDataRegionInfo();
        if( day < 7 ) //测试7天结束
        {
            let i = 1;
            for( var di in d_info )
            {
                if( d_info[di] == 0 ) { endingid=i; break;}
                i++;
            }
        }
        else endingid=0;
        
        if( endingid!=null) { 
            GameManager.endingid = endingid
            GameManager.endingday = day
            this.scheduleOnce(()=>{
                GameManager.changeGameScence('gameEnd'); return true
            },1.8)
        }
        
    }
    
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
                weigthChanged: data.optionOneWeightChange ? JSON.parse(data.optionOneWeightChange) : data.optionOneWeightChange,
                nextCard: data.optionOneNextCard
            },
            B: {
                desc: data.optionTwoDesc,
                valChanged: data.optionTwoValueChange ? JSON.parse(data.optionTwoValueChange): data.optionTwoValueChange,
                weigthChanged: data.optionTwoWeightChange ? JSON.parse(data.optionTwoWeightChange) : data.optionTwoWeightChange,
                nextCard: data.optionTwoNextCard
            }
        }
    }
}

