

cc.Class({
    extends: cc.Component,

    init : function(  ){
        
        this.node.getComponent('js_cardList').init();
    },

    getNextCard : function( select  )
    {
        this.node.getComponent('js_cardList').getNextCard( select );
    },

    push : function( cardInfo )
    {
        this.node.getComponent('js_cardList').push(cardInfo);
    },

    show : function( )
    {
        this.node.getComponent('js_cardList').show();
    },
    

});
