
cc.Class({
    extends: cc.Component,

    properties: {
        itemName : cc.Label,
        itemValue : cc.Label,
    },

    init : function( data )
    {
        this.itemName.string = data.itemName ;
        this.itemValue.string = data.itemValue + "%" ;
        //set font 
    },

    updateValue : function( value )
    {
        this.itemValue.string = value + '%';
    }
});
