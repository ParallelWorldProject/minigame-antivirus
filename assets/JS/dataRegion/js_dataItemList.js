
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
            this.node.addChild(item);  //创建新节点

            let data = this.dataItems[i];
            item.getComponent('js_dataItemTemplate').init(
                {
                    itemName : data.itemName,
                    itemValue : data.itemValue
                }
            );
        }
    },

    updateValue:function( info ){
        for( let i=0; i<=info.length ;i++ )
        {
            let item = this.node.children[i];
            item.getComponent('js_dataItemTemplate').updateValue(info[i-1]); //奇怪了
        }
    },
   
});
