

cc.Class({
    extends: cc.Component,

    properties: {
        information :  {  
            default: null,
            type: cc.Node
        },
        image : cc.Node,
    },

    init : function( info ){
        

        //this.information = this.node.getChildByName("information");
        //现在只会这么写
        //修改information区
        this.from = this.information.getChildByName("from").getComponent(cc.Label);
        this.name = this.information.getChildByName("name").getComponent(cc.Label);
        this.date = this.information.getChildByName("date").getComponent(cc.Label);
        this.information = this.information.getChildByName("information").getComponent(cc.Label);

        this.from.string = info.from;
        this.name.string  = info.name;
        this.date.string  = info.date;
        this.information.string  = info.information;

  
        //修改img区域
        //本地加载
        // var picUrl = "cardimg/" + info.picUrl;
        // let self = this.image;
        // cc.loader.loadRes(picUrl, cc.SpriteFrame, function (err, spriteFrame) {
        //     self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        // });

        //远程加载  
        this.loadImg( this.image.getComponent(cc.Sprite) ,info.picUrl )
    },     
       
    moveOff : function()
    {
        this.node.active = false;
    },

    moveUp : function()
    {
        this.node.active = true;
    },
  

    //远程加载  
    loadImg: function(container,url){
        cc.loader.load(url, function (err, texture) {
            var sprite  = new cc.SpriteFrame(texture);
            container.spriteFrame = sprite;
        });
    } ,
   
});
