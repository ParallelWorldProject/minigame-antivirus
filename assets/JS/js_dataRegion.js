
cc.Class({
    extends: cc.Component,

    properties: {
        labelBudget: {
            default: null,
            type: cc.Label
        },
        labelResource: {
            default: null,
            type: cc.Label
        },
        labelHealth: {
            default: null,
            type: cc.Label
        },
        labelPopularity: {
            default: null,
            type: cc.Label
        }

    },

   

    updateInfo:function ( infomation ){
        this.infomation = infomation
        this.show()
    },

    show : function( )
    {
        this.labelBudget.string = this.infomation.budget + '%';
        this.labelResource.string = this.infomation.resource + '%';
        this.labelHealth.string = this.infomation.health + '%';
        this.labelPopularity.string = this.infomation.popularity + '%';
    } 

    

});
