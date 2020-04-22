function gameInformationList(){

   //数组区相关信息
    this.dataInfo = {
        budget : 50 ,
        resource : 50 ,
        health : 100,
        popularity : 50,
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
            dataInfo : {
                budget:4 ,
                resource:3 ,
                health: 2,
                popularity:1,
            },
            cards:[{
                id : 1,
                from:"1" ,
                name:"1",
                date:"11",
                information:"111",
                picUrl:'cardimg1',
                optionA:[1,1,1,1],
                optionB:[-1,-1,-1,-1] 
                },{
                    id : 2,
                    from:"2" ,
                    name:"2",
                    date:"22",
                    information:"2222",
                    picUrl:'cardimg2',
                    optionA:[2,2,2,2],
                    optionB:[-2,-2,-2,-2] 
                }, {
                id : 3,
                from:"3" ,
                name:"3",
                date:"33",
                information:"3333",
                picUrl:'cardimg3',
                optionA:[3,3,3,3],
                optionB:[-3,-3,-3,-3] 
                },
            ]
        }

        
        this.gameInformation = new gameInformationList();
        //将后台数据存入
        this.gameInformation.setDataInfo(this.information.dataInfo);
        this.gameInformation.setManyNewCardsInfo(this.information.cards)
        

        /*console.log("前台存放数据:" + this.gameInformation.dataInfo)
        for( prop in this.gameInformation.dataInfo )
        {
            console.log( prop + " : " + this.gameInformation.dataInfo[prop] );
        }*/
     },

    start:function () {
        //初始化两个区域
        this.dataRegion.init();
        this.cardRegion.init();

        //使用数据更新数据区域
        this.dataRegion.showData(this.gameInformation.getDataInfo());
        this.cardRegion.showTopCard(this.gameInformation.getTopCardInfo());

        // 监听双击、按住松开事件
        this.node.on('DoubleClick', function (event) {
            // 双击选择卡牌
            if (event.SelectBtn === 'AC_DoubleClick') {
                cc.log('click Accept')
                this.updateData(1)
                this.updateCard(1)

            } else if (event.SelectBtn === 'DE_DoubleClick') {
                cc.log('click Decline')
                this.updateData(0)
                this.updateCard(0)
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
        var d_info = {
        budget:0 ,
        resource:0 ,
        health: 0,
        popularity:0,
        };
       if ( select == 1 ) //select 影响计算
        {
            d_info.budget = 1
            d_info.resource = 2
            d_info.health =3
            d_info.popularity = 4
        }
        else if ( select == 0 )
        {
            d_info.budget = -1
            d_info.resource = -2
            d_info.health =-3
            d_info.popularity = -4
        }
        this.gameInformation.updateDataInfo(d_info);
       
        this.dataRegion.showData(this.gameInformation.dataInfo);  //计算完后更新数据
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
