
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

    init:function(){
        for( var i=0; i<this.dataItems.length; i++ )
        {
            let item = cc.instantiate(this.dataItemPerfab);
            this.node.addChild(item);  //创建新节点

            let data = this.dataItems[i];
            item.getComponent('js_dataTemplate').init(
                {
                    itemName : data.itemName,
                    itemValue : data.itemValue
                }
            );
        }
    },

    updateValue:function( info ){
        console.log("i am updateValue in js_datalist" + info);
        for( let i=0; i<=info.length ;i++ )
        {
            let item = this.node.children[i];
            item.getComponent('js_dataTemplate').updateValue(info[i-1]); //奇怪了
        }
    },
   
});
