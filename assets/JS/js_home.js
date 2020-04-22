function gameInformationList(){

    //游戏常量不用从后台获得 ？？
    this.maxInfected=1000000; //失败感染人数
    this.initialInfected=100;  //起始感染人数
    this.minQuarantineRate=0.15;    //最小隔离率
    this.maxQuarantineRate=0.6;     //最大隔离率
    this.quarantineRateParameter=0.05; //隔离率系数

    //this.logMaxInfected=Math.Log(maxInfected); 
    //this.logInitialInfected=Math.log(initialInfected);

    this.dayCount=0; //当前天数
    this.infectedCount=100; //当前感染人数 
    this.infectionRate=0.3; //感染率
    this.dailyInfection=0;  //日感染人数
    this.recoveryRate=0.2;  //治愈率
    this.dailyRecovery=0;   //日治愈人数
    this.quarantineCapacity=500;    //隔离区容量
    this.quarantineRate=0;  //隔离率
    this.quarantineCount=0; //隔离人数
    this.resourceDailyChange=0; //资源日增减
    this.budgetDailyChange=0;   //财政日增减
    this.approvalDailyChange=0; //支持率日增减
    this.shutdown=0;    //封城 是1否0

   
   //数组区相关信息
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

    //卡牌区相关信息
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


    //计算呢这里
    this.calculateAndUpdataData = function( select ){
          
        
        let it = 0;
        for( prop in this.getDataInfo()  )
        {
            console.log("prop:"+prop+"===datainfo:"+ this.dataInfo[prop]);
            console.log("select:"+select+"===it:"+it+"====op:"+this.getTopCardInfo().option[select][it]);
            this.dataInfo[prop] += this.getTopCardInfo().option[select][it];
            it++;
        }
           
        /*for( prop in this.gameInformation. )
        {
            console.log( prop + " : " + this.gameInformation.dataInfo[prop] );
        }  */      
        
        //this.setDataInfo( )
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
        this.showMask();
        //请求后端加载
        this.scheduleOnce(function() {
            cc.log('计时器模拟请求时间')
        }, 2);

        //模拟从后台获得的数据
        this.information = {
            cards:[{
                id : 1,
                from:"1" ,
                name:"1",
                date:"11",
                information:"111",
                picUrl:'cardimg1',
                option:{
                    A:[1,1,1,1],
                    B:[-1,-1,-1,-1]
                }
                },{
                    id : 2,
                    from:"2" ,
                    name:"2",
                    date:"22",
                    information:"2222",
                    picUrl:'cardimg2',
                    option:{
                        A:[2,2,2,2],
                        B:[-2,-2,-2,-2]
                     }
                }, {
                id : 3,
                from:"3" ,
                name:"3",
                date:"33",
                information:"3333",
                picUrl:'cardimg3',
                option:{
                    A:[3,3,3,3],
                    B:[-3,-3,-3,-3]
                }
               
                },
            ]
        }

        


        this.gameInformation = new gameInformationList();
        //this.gameInformation.setDataInfo(); datainfo固定为50 50 50 100
        this.gameInformation.setManyNewCardsInfo(this.information.cards)
        

        console.log("前台存放数据:" + this.gameInformation.dataInfo)
        for( prop in this.gameInformation.getDataInfo() )
        {
            console.log( prop + " : " + this.gameInformation.dataInfo[prop] );
        }
     },

    start:function () {
        //初始化两个区域
        this.dataRegion.init(this.gameInformation.getDataInfo());
        this.cardRegion.init(this.gameInformation.getTopCardInfo());

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
    }
   
}
);
