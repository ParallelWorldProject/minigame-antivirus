
cc.Class({
    extends: cc.Component,

    properties: {
        itemName : cc.Label,
        itemValue : cc.Label,
    },

    init : function( data )
    {
        this.itemName.string = data.itemName;
        this.itemValue.string = data.itemValue;
    },

    updateValue : function( value )
    {
        this.itemName = value;
    }
});
