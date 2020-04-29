
cc.Class({
    extends: cc.Component,

    properties: {
        itemName : cc.Label,
        itemValue : cc.Label,
        preview : cc.Label,
    },

    init : function( name)
    {
        this.itemName.string = name ;
    },

    updateValue : function( value )
    {
        this.itemValue.string = Math.round(value) + '%';
    },

    previewTheValue( preview )
    {
        if( preview == 1 ) this.preview.string = '↑' ;
        else if( preview == -1 ) this.preview.string = '↓';
        else if( preview == 0 ) this.preview.string ='-';
        else this.preview.string ='';
    } 
});
