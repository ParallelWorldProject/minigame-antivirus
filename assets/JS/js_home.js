//1: 加载所有游戏部件 与 动画
//2: 存储信息并进行前后端总体交互

const GMIF = require("js_GameInfo"); 
const CardRegion = require('js_cardRegion');
const DataRegion = require('js_dataRegion');
const GameManager = require("./utils/gameManager")
const LocalCard = require('../localCard/Cards');
//const { card01 } = require("../localCard/Cards");



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
        maskLayer: cc.Node,
        popoverPre: cc.Prefab,
    },
    ctor(){
        this.postIndex = 0
    },

    onLoad () {},

    start () {
        this.showMask()

        let params = {
            handcardid: 1,  //当前卡id
            storyid: cc.sys.localStorage.getItem('storyid'),
            day: 1,
        }
        HttpHelper.httpPost('/getnextcard',params, (data) =>  {
            if(data.errorcode === 0) {

                let cardInfo =  new CardInfo(data.content)
                cc.log('cardInfo',cardInfo)

                this.gameInformation.SolveCapturedCardInfo(cardInfo);

                this.dataRegion.init(this.gameInformation.getDataRegionInfo());
                this.cardRegion.init(this.gameInformation.getCardRegionInfo());
            }
        })
        this.gameInformation = new GMIF.gameInformationList();
            

        this.dataRegion.init(this.gameInformation.getDataRegionInfo());
        this.cardRegion.init(this.gameInformation.getCardRegionInfo());
    



        this.setClickEvevt();
    },

    /*randomLoadLocalCard:function(){
        //get random card name 
        var randomCardcnt = Math.floor((Math.random()*3)+1);
        var randomCardName =  "card0" + randomCardcnt.toString() ;

        let cardInfo =  new CardInfo(LocalCard[randomCardName.toString()])
        cc.log("randomCardName.toString()",randomCardName.toString());
        cc.log('cardInfo',cardInfo);
        return cardInfo ;
    },*/
    


    updateHome : function(select)
    {
        //按照选项就行计算
        this.gameInformation.confirmSelect(select);

        // 盖章动画
        let cloneCard = this.cardRegion.sealAnimation( select );

        this.dataRegion.turnDownPreview(  ); //防止预显示生效

        //判定是否结束游戏
        if (this.checkGameOver() ) {return}
        
        //获取新params请求
        let params = this.gameInformation.getUserInfo(select);

        
        // 数据上报
        GameManager.time_cardChoose = new Date()
        let second = (parseFloat((GameManager.time_cardChoose - GameManager.time_cardShow) / 1000)-1.7).toFixed(3);
        let par = {
            cardid: params.handcardid,
            choice: params.curcardoption,
            timecost: second
        }
        GameManager.dataReport(par)
        
        this.getNextCardFn(params,cloneCard)
        
    },
    getNextCardFn(params,cloneCard) {
        HttpHelper.httpPost('/getnextcard',params, (data) =>  {
            if(data.errorcode === 0) {
                this.postIndex = 0
                let cardInfo =  new CardInfo(data.content)
                cc.log('cardInfo',cardInfo)

                //这里更新卡牌信息
                this.gameInformation.SolveCapturedCardInfo(cardInfo);

                // 移走卡牌
                this.scheduleOnce(()=>{
                    this.cardRegion.moveCard(cloneCard)
                },1.7)

                this.dataRegion.updateData(this.gameInformation.getDataRegionInfo());
                this.cardRegion.getNextCard(this.gameInformation.getCardRegionInfo());

            } else if( data.errorcode === 1001 ) {
                this.postIndex +=1
                if(this.postIndex <= 3 ) {
                    cc.log(1001)
                    this.getNextCardFn(params)
                } else {
                    cc.log('重新开始')
                    let popover = cc.instantiate(this.popoverPre)
                    this.node.parent.addChild(popover)
                }
            }
        })
      

        this.scheduleOnce(()=>{
            this.cardRegion.moveCard(cloneCard)
        },1.7)

        
        
    },
    
    //必需在showmask后面才能行动
    showMask() {
        if(this.loadingMask == null) {
            this.loadingMask = cc.instantiate(this.loadingPre)
            this.node.parent.addChild(this.loadingMask)
            let loadingBar = this.loadingMask.getChildByName("bar").getComponent(cc.Sprite)

            cc.tween(loadingBar)
            .to(1.7, { fillRange: 1})
            .call(() => {
                this.loadingMask.getComponent(cc.Animation).play('scaleHide')
            })
            .start()
        }
    },

    checkGameOver() {
        let endingid ;
        let day = this.gameInformation.getCardRegionInfo().day;   //getUserInfo
        let c_id = this.gameInformation.getUserInfo().handcardid; 

        let d_info = this.gameInformation.getDataRegionInfo();

        //if( day < 100 ) //测试50天结束
        if( c_id != 53 )
        {
            let i = 1;
            for( var di in d_info )
            {
                if( d_info[di] <= 0 ) { endingid=i; break;}
                i++;
            }
        }
        else endingid=0;
        
        if( endingid!=null ) { 
            GameManager.endingid = endingid
            GameManager.endingday = day
            this.scheduleOnce(()=>{
                GameManager.changeGameScence('gameEnd'); 
            },1.8)
            return true
        }
        
    },

        setClickEvevt(){
        // 监听双击、按住松开事件
                this.node.on('DoubleClick', function (event) {
                    let select ;
                    if (event.SelectBtn === 'AC_DoubleClick') {
                        select = 'A';
                    } else if (event.SelectBtn === 'DE_DoubleClick') {
                        select = 'B';
                    }
                    // cc.log('click ' + select)
                    this.updateHome(select)
                },this);
        
                /*
                this.node.on('HoldStart', function (event) {
                    cc.log( 'HoldStart');
                    let select ;
                    // 触摸 计算变量 提示数值可能的变化
                    if (event.SelectBtn === 'AC_HoldStart') {
                        select = 'A';
                    } else if (event.SelectBtn === 'DE_HoldStart') {
                        select = 'B';
                    }
        
                    this.dataRegion.previewTheValue( this.gameInformation.getDataPreView(select) );
        
                },this);
        
                this.node.on('HoldEnd', function (event) {
                    cc.log( 'HoldEnd');
                    // 松手 关掉提示
                    this.dataRegion.turnDownPreview(  );
        
                },this);
        
                this.node.on('HoldCancel', function (event) {
                    cc.log('TOUCH_CANCEL');
                    this.dataRegion.turnDownPreview();
                }, this);
                */
            },
            
    
});



class CardInfo {
    constructor(data) {
        this.message= data.message;
        this.information= data.message;
        this.id = data.cardid;
        this.from= data.cfrom ;
        this.name= data.cname;
        this.date= data.durtion;
        this.durtion = data.durtion;
        this.picUrl=data.imgurl;

        this.option = {
            A: {
                desc: data.optionOneDesc,
                valChanged: data.optionOneValueChange ? JSON.parse(data.optionOneValueChange) : data.optionOneValueChange ,
                // weigthChanged: data.optionOneWeightChange ? JSON.parse(data.optionOneWeightChange) : data.optionOneWeightChange,
            },
            B: {
                desc: data.optionTwoDesc,
                valChanged: data.optionTwoValueChange ? JSON.parse(data.optionTwoValueChange): data.optionTwoValueChange,
                // weigthChanged: data.optionTwoWeightChange ? JSON.parse(data.optionTwoWeightChange) : data.optionTwoWeightChange,
            }
        }
    }
}

