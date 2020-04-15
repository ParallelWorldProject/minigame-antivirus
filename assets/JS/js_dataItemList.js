
var dataItem = cc.Class({
    name : 'dataItem',
    properties :{
        itemName: '',
        itemValue: 0,
    }
})

cc.Class({
    extends: cc.Component,

    properties: {
        dataItems:{
            default: [],
            type: dataItem
        },
        dataItemPerfab : cc.Prefab
    },

    onLoad:function(){
        for( var i=0; i<this.dataItems.length; i++ )
        {
            let item = cc.instantiate(this.dataItemPerfab);
            let data = this.dataItems[i];
            this.node.addChild(item);
            item.getComponent('js_dataItemTemplate').init(
                {
                    itemName : data.itemName,
                    itemValue : data.itemValue
                }
            );
        }
    }
    

    

   
});
