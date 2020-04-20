


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
        let temp ; //临时指针
        temp = front;
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
        while( this.isEmpty() == false )
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
        console.log( this.myCardList.getLength() );
    },

     //只有再show的时候才创造新节点并放入topCard中
    show: function( ) {
        let info = this.myCardList.getCardInfo();

        this.topCard = cc.instantiate(this.cardPerfab); //创建新节点
        this.node.addChild(this.topCard);    //加入到子节点下

        console.log(info);

        this.topCard.getComponent('js_cardTemplate').init(info);
    },


    getNextCard : function( select  ){

        //这里应该是动画代码
        this.moveOldCard( select );
        //完成动画后 先pop
        this.myCardList.pop();
        console.log( this.myCardList.getLength() );
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
        
    },

    //   移动旧卡牌
    moveOldCard : function( select ){

        //let currentCard = event.currentTarget.getChildByName("CardRegion").getChildByName("cardItem")
        let cloneCard =  this.cloneNode(this.topCard);
        cloneCard.zIndex = 9
        // 2.获取章，选择并盖章
        let cloneSeal = cloneCard.getChildByName("seal_wrap")

        let sealPos ; 
        if( select == 1 ){
            sealPos = [ -166,-372 ]
        }
        else {
            sealPos = [ 175,-372]
        }
        this.moveSeal(cloneSeal,sealPos[0],sealPos[1],1.5);

        // 3.移走克隆的卡片
        setTimeout(() => {
            this.moveCard(cloneCard)
        }, 1000);

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
    // 盖章动画
    moveSeal(target,positionX,positionY,scale) {
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

});
