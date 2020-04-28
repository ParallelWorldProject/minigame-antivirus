

cc.Class({
    extends: cc.Component,

    properties: {
        dataItemPerfab : cc.Prefab
    },

    init:function( info ){
        this.infoLength = info.length;

        for( var p in info ) //set 属性名
        {
            let item = cc.instantiate(this.dataItemPerfab);
            this.node.addChild(item);  //创建新节点
            item.getComponent('js_dataTemplate').init(p);
        }
        this.updateData(info);
    },

    updateData:function( info ){
        let it = 1;
        for( var p in info )
        {
            let item = this.node.children[it];
            item.getComponent('js_dataTemplate').updateValue(info[p]); 
            it++;
        }
    },

    previewTheValue( pre_info )
    {
        
        let it = 1;
        for( var p in pre_info )
        {
            let item = this.node.children[it];
            item.getComponent('js_dataTemplate').previewTheValue(pre_info[p]);
            it++;
        }
       
    },

    clearPreview( )
    {
        for( let i in this.infoLength )
        {
            let item = this.node.children[i];
            item.getComponent('js_dataTemplate').previewTheValue(0);
        }
    }
   
});
