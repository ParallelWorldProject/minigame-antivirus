

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onload : function(){
        
       
    },

    init : function(  ){
        
        this.node.getComponent('js_cardList').init();
    },

    getNextCard : function( )
    {
        this.node.getComponent('js_cardList').getNextCard();
    }
    

});
