
cc.Class({
    extends: cc.Component,

    properties: {
        itemName : cc.Label,
        itemValue : cc.Label,
    },

    init : function( name)
    {
        this.itemName.string = name ;
    },

    updateValue : function( value )
    {
        this.itemValue.string = Math.round(value) + '%';
    }
});
