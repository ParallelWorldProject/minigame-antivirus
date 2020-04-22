function CardList(){
  
    //定义一张卡牌 ， 内部储存信息
    var aCard = function( cardInfo ){
        this.info = cardInfo;
        this.next = null;
    }

    var length = 0
    var top = null 
    var last= null

    this.push = function( cardInfo ){
        let acard = new aCard(cardInfo);
        

        if( length == 0 ){ //第一次
            front = acard ;
        }else{
            last.next = acard;
        }

        last = acard;
        length++;
        return true;
    },

    this.pop = function(){
        //let temp ; //临时指针
        //temp = front;
        front = front.next;
        length--;
        //delete temp;
    },

    this.getLength = function()
    {
        return length;
    },

    this.getTop = function(){
        return front;
    },

    this.getLast = function(){
        return last;
    },

    this.getCardInfo = function()
    {
        return front.info;
    },

    /*this.isEmpty = function(){
        if( this.getLength()  ) return false;
        else return true;
    },*/

    this.clear = function()
    {
        while( length > 0 )
        {
            this.pop();
        }
    }

};

//var CardList = require("Queue");

cc.Class({
    extends: cc.Component,

    properties: {
        cardPerfab: cc.Prefab
    },

    init:function () {  
        //创建队列
        this.myCardList = new CardList();
        this.topCard = null;

    },

    push:function( cardInfo )
    {
        this.myCardList.push( cardInfo );
        //console.log( this.myCardList.getLength() );
    },

     //只有再show的时候才创造新节点并放入topCard中
    show: function( ) {
        let info = this.myCardList.getCardInfo();

        this.topCard = cc.instantiate(this.cardPerfab); //创建新节点
        this.node.addChild(this.topCard);    //加入到子节点下

        console.log("card info: " + info);

        this.topCard.getComponent('js_cardTemplate').init(info);
    },


    getNextCard : function( select  ){
        //这里应该是动画代码
        var getmove = this.moveOldCard( select );
        //完成动画后 先pop
        if( getmove )
        {
            this.myCardList.pop();
            //console.log( this.myCardList.getLength() );
            this.topCard.destroy();
            
            if( this.myCardList.getLength() == 0 )
            {
                //空了会要求页面重新提供新卡牌，应该可以使用事件传递机制；
                this.node.dispatchEvent( new cc.Event.EventCustom('getNewCard',1) );
            }
            else{
                //pop后可以直接show
                this.show();
            }

        }
    },

    //   移动旧卡牌
    moveOldCard : function( select ){
        // 1.克隆第一张
        let cloneCard =  this.cloneNode(this.topCard);
        cloneCard.zIndex = 9
        // 2.获取章戳，选择并盖章
        let seal = cloneCard.getChildByName("seal_wrap")
        let sealBox = cloneCard.getChildByName("seal_box")

        let sealBoxPos ; 
        if( select == 1 ){
            sealBox.x = -165
            sealBoxPos = [-165,-310]
        }
        else {
            sealBox.x = 165
            sealBoxPos = [ 150,-310]
        }
        sealBox.active = true
        this.moveSeal(sealBox,seal,sealBoxPos[0],sealBoxPos[1]);

        // 3.移走克隆的卡片
        setTimeout(() => {
            this.moveCard(cloneCard)
        }, 1500);

        return true;
    },

     // 克隆卡牌
    cloneNode(target) {
        // let scene = cc.director.getScene();
        let clone = cc.instantiate(target);
        clone.parent = this.node;
        clone.setPosition(0,0);

        return clone
    },
    // 向下盖章动画
    moveSeal(sealBox,seal,positionX,positionY) {
        cc.tween(sealBox)
        .to(0.5, { position: cc.v2(positionX, positionY)})
        .call(() => {
            // 显示印章
            seal.setPosition(positionX,positionY-60)
            seal.active = true
            cc.tween(sealBox)
            .to(0.5, { position: cc.v2(positionX, -280)})
            .call(() => {
                sealBox.active = false
            })
            .start()
        })
        .start()
    },
    // 移牌动画
    moveCard(target) {
        cc.tween(target)
        .to(0.5, { scale: 1.1 })
        .to(1, { position: cc.v2(-750, 25), scale: 0.9})
        .call(() => {
            target.destroy();
        })
        .start()
    },

});
