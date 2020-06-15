const JSData = require("./js_SubInfoList")

/*
class AssistVar{
    constructor(data)
    {
        //this.dayCount = data.dayCount;  //当前天数 
        this.dayCount = 0;
        //this.hoursCount = data.hoursCount; //小时数
        this.hoursCount = 0;
        this.infectedCount = 100, //当前感染人数 
        this.infectionRate=0.3000, //感染率
        this.dailyInfection=0,  //日感染人数
        this.recoveryRate= 0.0700,  //治愈率
        this.resourceProductivity=1, //？
        this.resourceConsumption=1, //？
        this.resourceDailyChange=0, //资源日增减
        this.dailyRecovery=0,   //日治愈人数
        this.quarantineCapacity=500,    //隔离区容量
        this.quarantineRate=0,  //隔离率
        this.quarantineCount=0, //隔离人数
        this.budgetDailyChange=0,   //财政日增减
        this.approvalDailyChange=0,//支持率日增减
        this.shutdown=0,    //封城 是1否0

        this.health=100,
        this.budget=50,
        this.resource=50,
        this.approval=100
    }

    calculateVal( durtion ){

        if( this.hoursCount==null ) this.hoursCount=0;

            this.hoursCount =  this.hoursCount +   durtion ;
            this.dayCount = Math.floor( this.hoursCount / 24) ;


            this.dailyRecovery=Math.ceil( this.infectedCount *  Math.pow( 1+this.recoveryRate,  durtion));

            this.dailyInfection=( this.infectedCount - 
                this.quarantineCount) * Math.pow( 1+this.infectionRate,  durtion);

            this.infectedCount= Math.max( this.infectedCount -  
                this.dailyRecovery +  this.dailyInfection, 0.1 );

            this.quarantineRate=Math.min(ConstVar.maxQuarantineRate,ConstVar.minQuarantineRate + 
                (100 -  this.health) * ConstVar.quarantineRateParameter);

            this.quarantineCount=Math.min( this.quarantineCapacity,
                this.infectedCount *  this.quarantineRate);

            this.resourceDailyChange= this.resourceProductivity- this.resourceConsumption;
            if ( this.dayCount < 12){
                this.approvalDailyChange=-0.1-0.05*(100- this.health);
            }else{
                this.approvalDailyChange=1-0.02*(100- this.health);
            }
            
            this.health=
                Math.floor( 100-(Math.log( this.infectedCount )-ConstVar.logInitialInfected)/ ConstVar.logMaxInfected );
            this.resource= Math.floor( this.resource +  this.resourceDailyChange ) ;
            this.budget= Math.floor( this.budget +  this.budgetDailyChange );
            this.approval= Math.floor(this.approval +  this.approvalDailyChange);
            
            cc.log("calculate over");
            return this;
    }
}
*/

var variable = {
    dayCount:0, //当前天数
    hoursCount:0, //小时数

    infectedCount:100, //当前感染人数 
    infectionRate:0.3000, //感染率
    dailyInfection:0,  //日感染人数
    
    recoveryRate: 0.0700,  //治愈率
    resourceProductivity:1, //？
    resourceConsumption:1, //？
    resourceDailyChange:0, //资源日增减

    dailyRecovery:0,   //日治愈人数

    quarantineCapacity:500,    //隔离区容量
    quarantineRate:0,  //隔离率
    quarantineCount:0, //隔离人数
    
    budgetDailyChange:0,   //财政日增减
    approvalDailyChange:0,//支持率日增减
    shutdown:0,    //封城 是1否0

    health:100,
    budget:50,
    resource:50,
    approval:100
}






module.exports.variable =  {
    dayCount:0, //当前天数
    hoursCount:0, //小时数

    infectedCount:100, //当前感染人数 
    infectionRate:0.3000, //感染率
    dailyInfection:0,  //日感染人数
    
    recoveryRate: 0.0700,  //治愈率
    resourceProductivity:1, //？
    resourceConsumption:1, //？
    resourceDailyChange:0, //资源日增减

    dailyRecovery:0,   //日治愈人数

    quarantineCapacity:500,    //隔离区容量
    quarantineRate:0,  //隔离率
    quarantineCount:0, //隔离人数
    
    budgetDailyChange:0,   //财政日增减
    approvalDailyChange:0,//支持率日增减
    shutdown:0,    //封城 是1否0

    health:100,
    budget:50,
    resource:50,
    approval:100

   
};




/*
module.exports.setMainDataList = function()
{
    return new JSData.InfomationList({
        health:variable.health,
        budget:variable.budget,
        resource:variable.resource,
        approval:variable.approval
    });
} 
*/