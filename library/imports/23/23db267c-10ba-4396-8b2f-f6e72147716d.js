"use strict";
cc._RF.push(module, '23db2Z8ELpDlosv9uchR3Ft', 'js_cardList');
// JS/cardRegion/js_cardList.js

"use strict";

function CardList() {
  //定义一张卡牌 ， 内部储存信息
  var aCard = function aCard(cardInfo) {
    this.info = cardInfo;
    this.next = null;
  };

  var length = 0;
  var top = null,
      last = null;
  this.push = function (cardInfo) {
    var acard = new aCard(cardInfo);

    if (length == 0) {
      //第一次
      front = acard;
    } else {
      last.next = acard;
    }

    last = acard;
    length++;
    return true;
  }, this.pop = function () {
    var temp; //临时指针

    temp = front;
    front = front.next;
    length--; //delete temp;
  }, this.getLength = function () {
    return length;
  }, this.getTop = function () {
    return front;
  }, this.getLast = function () {
    return last;
  }, this.getCardInfo = function () {
    return front.info;
  },
  /*this.isEmpty = function(){
      if( this.getLength()  ) return false;
      else return true;
  },*/
  this.clear = function () {
    while (this.isEmpty() == false) {
      this.pop();
    }
  };
}

; //var CardList = require("Queue");

cc.Class({
  "extends": cc.Component,
  properties: {
    cardPerfab: cc.Prefab
  },
  init: function init() {
    /*//初始话时会初始化 多 张卡牌
    //和data区差不多，改变了函数名称  
    for( var i=0; i<this.cardItems.length; i++ )
    {
        let item = cc.instantiate(this.cardPerfab);
        this.node.addChild(item);  //创建新节点
         let data = this.cardItems[i];
        let isTopCard = 0;
        if(i==1) isTopCard = 1; //顶端卡牌才显示
        item.getComponent('js_cardTemplate').init(data,isTopCard);
    }*/
    //创建队列
    this.myCardList = new CardList();
    this.topCard = null;
  },
  push: function push(cardInfo) {
    this.myCardList.push(cardInfo);
    console.log(this.myCardList.getLength());
  },
  //只有再show的时候才创造新节点并放入topCard中
  show: function show() {
    var info = this.myCardList.getCardInfo();
    this.topCard = cc.instantiate(this.cardPerfab); //创建新节点

    this.node.addChild(this.topCard); //加入到子节点下

    console.log(info);
    this.topCard.getComponent('js_cardTemplate').init(info);
  },
  getNextCard: function getNextCard() {
    //这里应该是动画代码
    //完成动画后 先pop
    this.myCardList.pop();
    console.log(this.myCardList.getLength());
    this.topCard.destroy();

    if (this.myCardList.getLength() == 0) {
      //空了会要求页面重新提供新卡牌，应该可以使用事件传递机制；
      this.node.dispatchEvent(new cc.Event.EventCustom('getNewCard', 1));
    } else {
      //pop后可以直接show
      this.show();
    }
  }
  /*getNextCard:function(){
      for( var i=1; i<=this.cardItems.length; i++ )
      {
          let data = this.cardItems[i];  //这里存放的是数据
          let item = this.node.children[i]; //这里是节点
          if( item.active == true ) //找到顶端的牌
          {
             
              item.getComponent('js_cardTemplate').moveOff();
              let nextCard = (i+1)%this.cardItems.length ;
              if( nextCard == 0 ) nextCard = this.cardItems.length;
             
              //console.log("i am in js_cardlist , the top card is:" + i + " \n i will get next card!: " + nextCard );
               nextItem = this.node.children[nextCard];
              nextItem.getComponent('js_cardTemplate').moveUp();
              break;
          }
      }
  },*/

});

cc._RF.pop();