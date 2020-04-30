
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
            case "health": name = "市民健康"; break;
            case "budget": name = "政府财政";   break;
            case "resource": name = "医疗资源"; break;
            case "approval": name = "政府声望"; break;
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
