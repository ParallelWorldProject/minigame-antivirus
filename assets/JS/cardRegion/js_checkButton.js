

cc.Class({
    extends: cc.Component,

    properties: {
     
    },

    acceptCheck : function(  ) {
        //发射事件
        
        this.node.dispatchEvent( new cc.Event.EventCustom('SelectA',1) );
    },

    declineCheck : function(  ) {
    
        this.node.dispatchEvent( new cc.Event.EventCustom('SelectB',1) );
    },


   
    DoubleClickCallBack (data) {
        const e = new cc.Event.EventCustom('DoubleClick',true)

        switch (data) {
            case 'AC_DoubleClick':
                e.SelectBtn = 'AC_DoubleClick'
                this.node.dispatchEvent( e );
                break;
            case 'DE_DoubleClick':
                e.SelectBtn = 'DE_DoubleClick'
                this.node.dispatchEvent( e );
                break;
            default:
                break;
        }
    },
    HoldStartCallBack(data) {
        const e = new cc.Event.EventCustom('HoldStart',true)

        switch (data) {
            case 'AC_HoldStart':
                e.SelectBtn = 'AC_HoldStart'
                this.node.dispatchEvent( e );
                break;
            case 'DE_HoldStart':
                e.SelectBtn = 'DE_HoldStart'
                this.node.dispatchEvent( e );
                break;
            default:
                break;
        }
    },
    HoldEndCallBack(data) {
        const e = new cc.Event.EventCustom('HoldEnd',true)

        switch (data) {
            case 'AC_HoldEnd':
                e.SelectBtn = 'AC_HoldEnd'
                this.node.dispatchEvent( e );
                break;
            case 'DE_HoldEnd':
                e.SelectBtn = 'DE_HoldEnd'
                this.node.dispatchEvent( e );
                break;
            default:
                break;
        }
    },
    HoldCancelCallBack(data) {
        const e = new cc.Event.EventCustom('HoldCancel',true)
        this.node.dispatchEvent( e )
    }
});
