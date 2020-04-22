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
        loadingPre: cc.Prefab
    },

     onLoad:function () {
        // 首次加载loading动画
        this.showMask()

        //请求后端加载
        this.scheduleOnce(function() {
            cc.log('计时器模拟请求时间')
            
        }, 2);

        //。。。
        //加载完成后得到  初始化的后台信息 和 初始化的3张卡牌 这里把3张卡片先都写出来，等后端接口完成再实现依次调用
        this.information = {
            dataInfo : {
                budget:4 ,
                resource:3 ,
                health: 2,
                popularity:1,
            },
            card_1:
                {
                id : 1,
                from:"1" ,
                name:"1",
                date:"11",
                information:"111",
                picUrl:'cardimg1',
                optionA:[1,1,1,1],
                optionB:[-1,-1,-1,-1] 
                },
            card_2:
            {
                id : 2,
                from:"2" ,
                name:"2",
                date:"22",
                information:"2222",
                picUrl:'cardimg2',
                optionA:[2,2,2,2],
                optionB:[-2,-2,-2,-2] 
                },
            card_3:
            {
                id : 3,
                from:"3" ,
                name:"3",
                date:"33",
                information:"3333",
                picUrl:'cardimg3',
                optionA:[3,3,3,3],
                optionB:[-3,-3,-3,-3] 
                },
        }
        

     },

    start:function () {
        //初始化两个区域
        this.dataRegion.init();
        this.cardRegion.init();

        //使用数据更新数据区域
        this.dataRegion.updateInfo(this.information.dataInfo);

        //往卡牌区域依次加入（一张）卡牌
        this.cardRegion.push(this.information.card_1);
        this.cardRegion.push(this.information.card_2);
        this.cardRegion.push(this.information.card_3);

        
        //显示数据和卡牌
        //this.dataRegion.show();
        this.cardRegion.show();


        
        //设置按键监听事件 //还不清楚这么用监听事件传递参数，只能这样写
        // this.node.on('SelectA', function (event) {
        //     console.log( 'button pressed A and i got it',event);  //1：ac 2：de
        //     this.updateData(1);//其他参数略 
        //     this.updateCard(1);//参数略
           
        // },this);

        // this.node.on('SelectB', function () {
        //     console.log( 'button pressed B and i got it' );  //1：ac 2：de
        //     this.updateData(0);//其他参数略 
        //     this.updateCard(0);//参数略
        // },this);

        
        // 监听双击、按住松开事件
        this.node.on('DoubleClick', function (event) {
            // cc.log( 'DoubleClick', event);

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
            //模拟获得新卡片后 push再次
            this.cardRegion.push(this.information.card_1);
            this.cardRegion.push(this.information.card_2);
            this.cardRegion.push(this.information.card_3);
            console.log( 'so now i  get  3 new cards' );
            
            this.cardRegion.show();

        },this);
        
    },


    updateData : function(select)
    {
       if ( select == 1 ) //select 影响计算
        {
            this.information.dataInfo.budget += 1;
            this.information.dataInfo.resource += 2;
            this.information.dataInfo.health += 3;
            this.information.dataInfo.popularity += 4;
        }
        else if ( select == 0 )
        {
            this.information.dataInfo.budget -= 1;
            this.information.dataInfo.resource -= 2;
            this.information.dataInfo.health -= 3;
            this.information.dataInfo.popularity -= 4;
        }
            
       
       this.dataRegion.updateInfo(this.information.dataInfo);  //计算完后更新数据
    },


    updateCard : function(select)
    {
        //现在只实现显示数组中其他卡牌
        this.cardRegion.getNextCard( select );
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
