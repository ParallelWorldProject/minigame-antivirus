
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    init:function(){
        this.node.getComponent('js_dataList').init();
    },

    showData:function ( infomation ){
        
        info = [ 
             infomation.budget , infomation.resource ,
             infomation.health , infomation.popularity ];

        this.node.getComponent('js_dataList').updateValue(info);
            

    },


});
