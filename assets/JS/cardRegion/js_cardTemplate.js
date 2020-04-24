
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

        this.date.string  = this.addDate(  "1/1/2020" , info.day ) ;


        console.log("info day"+ info.day)
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
    

    // 日期，在原有日期基础上，增加days天数，默认增加1天
    addDate: function (date, days) {
        if (days == undefined || days == '' || days=='0') {
            days = 0;
        }
        var date = new Date(date);
        date.setDate(date.getDate() + days);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return  this.getFormatDate(month) + '/' + this.getFormatDate(day) +'/' + date.getFullYear()  ;
    },

    // 日期月份/天的显示，如果是1位数，则在前面加上'0'
    getFormatDate:function (arg) {
        if (arg == undefined || arg == '') {
            return '';
        }

        var re = arg + '';
        if (re.length < 2) {
            re = '0' + re;
        }

        return re;
    },

    //远程加载  
    loadImg: function(container,url){
        cc.loader.load(url, function (err, texture) {
            var sprite  = new cc.SpriteFrame(texture);
            container.spriteFrame = sprite;
        });
    } ,
   
});
