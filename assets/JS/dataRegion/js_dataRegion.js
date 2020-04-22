

cc.Class({
    extends: cc.Component,

    properties: {
        dataItemPerfab : cc.Prefab
    },

    init:function( info ){

        for( p in info ) //set 属性名
        {
            let item = cc.instantiate(this.dataItemPerfab);
            this.node.addChild(item);  //创建新节点
            item.getComponent('js_dataTemplate').init(p);
        }
        this.show(info);
    },

    show:function( info ){
        let it = 1;
        for( p in info )
        {
            let item = this.node.children[it];
            item.getComponent('js_dataTemplate').updateValue(info[p]); 
            it++;
        }
    },
   
});
