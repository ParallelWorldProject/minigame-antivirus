
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

    init : function( msg ){
        
        this.labelBudget.string = msg.budget + '%';
        this.labelResource.string = msg.resource + '%';
        this.labelHealth.string = msg.health + '%';
        this.labelPopularity.string = msg.popularity + '%';
        //console.log(this.labelBudget.string);
    },


    updateInfo : function( msg )
    {
        this.labelBudget.string = msg.budget + '%';
        this.labelResource.string = msg.resource + '%';
        this.labelHealth.string = msg.health + '%';
        this.labelPopularity.string = msg.popularity + '%';
    } 

});
