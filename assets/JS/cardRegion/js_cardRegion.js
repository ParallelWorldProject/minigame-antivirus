

cc.Class({
    extends: cc.Component,

    init : function(  ){
        
        this.node.getComponent('js_cardList').init();
    },

    getNextCard : function( )
    {
        this.node.getComponent('js_cardList').getNextCard();
    },

    push : function( cardInfo )
    {
        this.node.getComponent('js_cardList').push(cardInfo);
    },

    show : function( )
    {
        this.node.getComponent('js_cardList').show();
    }
    

});
