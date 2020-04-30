
cc.Class({
    extends: cc.Component,

    properties: {
        itemName : cc.Label,
        itemValue : cc.Label,
        preview : cc.Label,
    },

    init : function( name)
    {
        switch( name )
        {
            case "health": name = "健康"; break;
            case "budget": name = "财政";   break;
            case "resource": name = "医疗"; break;
            case "approval": name = "声望"; break;
            default : name = name;
        }
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
