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
        //加载完成后得到
        this.information = {
            dataInfo : {
                budget:4 ,
                resource:3 ,
                health: 2,
                popularity:1,
            }
        }


        

     },

    start:function () {
        //this.dataRegion.updateInfo(this.information.dataInfo);
        this.dataRegion.init();
        this.cardRegion.init();
        this.dataRegion.updateInfo(this.information.dataInfo);

        //设置监听事件
        this.node.on('SelectA', function (  ) {
            console.log( 'button pressed A and i got it' );  //1：ac 2：de
            this.updateData(1);//其他参数略 
            this.updateCard(1);//参数略
           
          },this);

        this.node.on('SelectB', function (  ) {
        console.log( 'button pressed B and i got it' );  //1：ac 2：de
        this.updateData(0);//其他参数略 
        this.updateCard(0);//参数略
        
        },this);
        //还不清楚这么用监听事件传递参数，只能这样写
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
    }


}
);
