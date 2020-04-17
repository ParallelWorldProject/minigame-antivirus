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
        //请求后端加载

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
                picUrl:'000',
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
                picUrl:'000',
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
                picUrl:'000',
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
        this.node.on('SelectA', function (event) {
            console.log( 'button pressed A and i got it');  //1：ac 2：de
            this.updateData(1);//其他参数略 
            this.updateCard(1);//参数略

            // let fromData = event.currentTarget.getChildByName("CardRegion").getComponent('js_cardList').topCard.getChildByName('infomation').getChildByName("from").getComponent(cc.Label).string
            // cc.log('fromData',fromData)
            // // 1.克隆卡牌
            // let currentCard = event.currentTarget.getChildByName("CardRegion").getComponent('js_cardList').topCard
            let currentCard = event.currentTarget.getChildByName("CardRegion").getChildByName("cardItem")
            let cloneCard =  this.cloneNode(currentCard)
            // 2.获取章，选择并盖章
            let cloneSeal = cloneCard.getChildByName("seal_wrap")
            this.moveSeal(cloneSeal,-166,-372,1.5)
            // 3.移走克隆的卡片
            setTimeout(() => {
                this.moveCard(cloneCard)
            }, 1000);
           
        },this);

        this.node.on('SelectB', function (event) {
            console.log( 'button pressed B and i got it' );  //1：ac 2：de
            this.updateData(0);//其他参数略 
            this.updateCard(0);//参数略

            // 1.克隆卡牌
            let currentCard = event.currentTarget.getChildByName("CardRegion").getChildByName("cardItem")
            let cloneCard =  this.cloneNode(currentCard)
            // 2.获取章，选择并盖章
            let cloneSeal = cloneCard.getChildByName("seal_wrap")
            this.moveSeal(cloneSeal,175,-372,1.5)
            // 3.移走克隆的卡片
            setTimeout(() => {
                this.moveCard(cloneCard)
            }, 1000);
        
        },this);


        //获得新卡牌
        this.node.on('getNewCard', function (  ) {
            
            
            //模拟获得新卡片后 push再次
            this.cardRegion.push(this.information.card_1);
            this.cardRegion.push(this.information.card_2);
            this.cardRegion.push(this.information.card_3);
            console.log( 'so now i  get new card' );  
            
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
        this.cardRegion.getNextCard();
    },

    // 克隆卡牌
    cloneNode(target) {
        // let scene = cc.director.getScene();
        let clone = cc.instantiate(target);
        clone.parent = this.node;
        clone.setPosition(0,-100.125);

        return clone
    },
    // 盖章动画
    moveSeal(target,positionX,positionY,scale) {
        cc.log(target,11111)
        cc.tween(target)
        .to(1, { position: cc.v2(positionX, positionY),scale})
        .call(() => {})
        .start()
    },
    // 移牌动画
    moveCard(target) {
        cc.tween(target)
        .to(1, { scale: 1.2 })
        .to(1, { position: cc.v2(-450, 175), scale: 0.5})
        .call(() => { 
            // 销毁节点
            target.destroy();
        })
        .start()
    },
}
);
