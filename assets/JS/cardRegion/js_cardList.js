var cardItem = cc.Class({
    name : 'cardItem',
    properties:{
        id : 0,
        from:"0" ,
        name:"0",
        date:"0/00/0000",
        information:"000000000",
        picUrl:'000',
        optionA:[0,0,0,0],
        optionB:[0,0,0,0],
    },
})

cc.Class({
    extends: cc.Component,

    properties: {
        cardItems:{
            default: [],
            type: cardItem
        },
        cardPerfab: cc.Prefab
    },

    init:function () {  
        //初始话时会初始化 多 张卡牌
        //和data区差不多，改变了函数名称  
        for( var i=0; i<this.cardItems.length; i++ )
        {
            let item = cc.instantiate(this.cardPerfab);
            this.node.addChild(item);  //创建新节点

            let data = this.cardItems[i];
            let isTopCard = 0;
            if(i==1) isTopCard = 1; //顶端卡牌才显示
            item.getComponent('js_cardTemplate').init(data,isTopCard);
        }

    },

    getNextCard:function(){
       
        
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
    }

});
