function gameInformationList(){

{  //游戏常量不用从后台获得 ？？
    this.maxInfected=1000000; //失败感染人数
    this.initialInfected=100;  //起始感染人数
    this.minQuarantineRate=0.15;    //最小隔离率
    this.maxQuarantineRate=0.6;     //最大隔离率
    this.quarantineRateParameter=0.05; //隔离率系数

    this.logMaxInfected=Math.log(1000000); //maxInfected
    this.logInitialInfected=Math.log(100); // initialInfected
}
{ //暗变量
    this.darkVar = {
    dayCount:0, //当前天数
    infectedCount:100, //当前感染人数 
    infectionRate:0.3, //感染率
    dailyInfection:0,  //日感染人数
    recoveryRate:0.2,  //治愈率
    dailyRecovery:0,   //日治愈人数
    quarantineCapacity:500,    //隔离区容量
    quarantineRate:0,  //隔离率
    quarantineCount:0, //隔离人数
    resourceDailyChange:0, //资源日增减
    budgetDailyChange:0,   //财政日增减
    approvalDailyChange:0,//支持率日增减
    shutdown:0,    //封城 是1否0
    }
    
} 
{   //数组区相关信息 或者说 明变量
    this.dataInfo = {
        health : 100,
        budget : 50 ,
        resource : 50 ,
        approval : 50,
    }
    this.setDataInfo = function( d_info ){
        for(  porp in d_info )
        {
             this.dataInfo[porp] = d_info[porp]
        }
    }
    this.updateDataInfo = function( d_info ){
        for(  porp in d_info )
        {
            this.dataInfo[porp] += d_info[porp]
        }
    }
    this.getDataInfo = function(){
        return this.dataInfo;
    }
}
{    //卡牌区相关信息
    function CardInfoList(){
  
        //定义一张卡牌 ， 内部储存信息
        var aCard = function( cardInfo ){
            this.info = cardInfo;
            this.next = null;
        }
    
        this.length = 0;
        front = null;
        last = null;
        //var top = null 
        //var last= null
    
        this.push = function( cardInfo ){
            let acard = new aCard(cardInfo);
            
    
            if( this.length == 0 ){ //第一次
                front = acard ;
            }else{
                last.next = acard;
            }
    
            last = acard;
            this.length++;
            return true;
        },
    
        this.pop = function(){
            front = front.next;
            this.length--;
        },
    
        this.getLength = function()
        {
            return this.length;
        },
       
        this.getCardInfo = function()
        {
            return front.info;
        },
    
        this.clear = function()
        {
            while( this.length > 0 )
            {
                this.pop();
            }
        }
    
    };

    this.cardInfoList = new CardInfoList();
    this.setNewCardInfo = function( c_info ) //设置新卡片信息
    {
        this.cardInfoList.push(c_info);
    }

    this.getTopCardInfo= function ( ) //得到头部卡牌信息
    {
        return this.cardInfoList.getCardInfo();
    }

    this.popTopCard= function( )  //弹出卡牌
    {
        this.cardInfoList.pop();
    }

    this.setManyNewCardsInfo = function( c_infos ){ //函数实现一次性设置多张卡牌
        for( i in c_infos)
        this.setNewCardInfo(c_infos[i]);
    }

    this.getAndPopTopCard = function()  //一次性实现弹出和获得下一张卡信息
    {
        this.popTopCard();
        return this.getTopCardInfo();
    }

    this.getCardListLength = function(){
        return this.cardInfoList.getLength();
    }

}
{    //计算呢这里
    this.calculateAndUpdataData = function( select ){
          
        /*let it = 0;
        for( prop in this.getDataInfo()  )
        {
            console.log("prop:"+prop+"===datainfo:"+ this.dataInfo[prop]);
            console.log("select:"+select+"===it:"+it+"====op:"+this.getTopCardInfo().option[select][it]);
            this.dataInfo[prop] += this.getTopCardInfo().option[select][it];
            it++;
        }*/

        //先计算卡牌改变的暗变量 
        console.log( "!!!!!!I am in Calculate And UpdataData !!!!!!")
        let theCard = this.getTopCardInfo();
        let valChanged = theCard.option[select].valChanged ;  //根据select获取卡牌中的暗变量
        for( v in valChanged )
        {
            if( this.darkVar[v] == null ) {
                console.log("不存在这样的变量");
            }

            if( valChanged[v][0] != 0 ) //如果第一个数0，说明是加减改变
            {
                this.darkVar[v]+=valChanged[v][0];
            }
            else //否则做赋值改变
            {
                this.darkVar[v]=valChanged[v][1];
            }
            /*console.log( "V is:" +v);
            console.log( "valChanged[v][0]:"+valChanged[v][0] );
            console.log( "this.darkVar[v]:"+this.darkVar[v]);*/
        }

       
        //在改变其他暗变量 
        this.darkVar.dayCount= this.darkVar.dayCount + theCard.durtion;

        this.darkVar.dailyRecovery=Math.ceil(this.darkVar.infectedCount * 
            Math.pow(this.darkVar.recoveryRate,theCard.durtion));

        this.darkVar.dailyInfection=(this.darkVar.infectedCount - 
            this.darkVar.quarantineCount) * Math.pow(this.darkVar.infectionRate,theCard.durtion);

        this.darkVar.infectedCount=this.darkVar.infectedCount - this.darkVar.dailyRecovery + this.darkVar.dailyInfection;

        this.darkVar.quarantineRate=Math.min(this.maxQuarantineRate,this.minQuarantineRate + 
            (100 - this.dataInfo.health) * this.quarantineRateParameter);

        this.darkVar.quarantineCount=Math.min(this.darkVar.quarantineCapacity,this.darkVar.infectedCount * 
            this.darkVar.quarantineRate);
        
        
        //再改变主变量
        this.dataInfo.health=100-(Math.log(this.darkVar.infectedCount)-this.logInitialInfected)/this.logMaxInfected;
        this.dataInfo.resource=this.dataInfo.resource + this.darkVar.resourceDailyChange;
        this.dataInfo.budget=this.dataInfo.budget + this.darkVar.budgetDailyChange;
        this.dataInfo.approval=this.dataInfo.approval + this.darkVar.approvalDailyChange;


        console.log( "durtion: " + theCard.durtion );    
        for( prop in this.darkVar )
        {
            console.log( prop + " : " + this.darkVar[prop] );
        }
        for( prop in this.dataInfo )
        {
            console.log( prop + " : " + this.dataInfo[prop] );
        }

        console.log( "------!!!!!OVER!!!!!!--------")
        
    }           
        
}

};


//1: 加载所有游戏部件 与 动画
//2: 存储信息并进行前后端总体交互
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
        //请求后端加载

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

        // 后端 获取卡牌
        let storyid = localStorage.getItem('storyid')
        let params = {
            handcardid: 1,  //当前卡id
            storyid,
            day: 1
        }
        HttpHelper.httpPost('/getnextcard',params, (data) =>  {
            if(data.errorcode === 0) {

                let cardInfo =  new CardInfo(data.content)
                cc.log('cardInfo',cardInfo)

                this.gameInformation = new gameInformationList();
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
            // 双击选择卡牌
            if (event.SelectBtn === 'AC_DoubleClick') {
                cc.log('click Accept')
                this.updateData('A')
                this.updateCard('A')

            } else if (event.SelectBtn === 'DE_DoubleClick') {
                cc.log('click Decline')
                this.updateData('B')
                this.updateCard('B')
            }
        },this);

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

        //获得新卡牌
        this.node.on('getNewCard', function (  ) {
            this.gameInformation.setManyNewCardsInfo(this.information.cards)
        },this);
        
    },


    updateData : function(select)
    {
        /*d_info.health=100-(Math.Log(infectedCount)-logInitialInfected)/logMaxInfected;
        d_info.resource=resource + resourceDailyChange;
        d_info.budget=budget + budgetDailyChange;
        d_info.approval=approval + approvalDailyChange;*/
        this.gameInformation.calculateAndUpdataData(select);
        //this.gameInformation.updateDataInfo(d_info);
        this.dataRegion.show(this.gameInformation.dataInfo);  //计算完后更新数据
    },


    updateCard : function(select)
    {
        //现在只实现显示数组中其他卡牌
        this.cardRegion.getNextCard( select , this.gameInformation.getAndPopTopCard() );

        if( this.gameInformation.getCardListLength() <= 1) //如果只剩一张牌了，记得添加
        {
            this.gameInformation.setManyNewCardsInfo(this.information.cards)
        }
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
    getcardData() {
        let storyid = localStorage.getItem('storyid')
        let params = {
            handcardid: 1,  //当前卡id
            storyid,
            day: 1
        }
        HttpHelper.httpPost('/getnextcard',params, (data) =>  {
            if(data.errorcode === 0) {
                let cardInfo =  new CardInfo(data.content)

                cc.log('cardInfo',cardInfo)
            }
            
        })
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

