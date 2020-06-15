const JSData = require("./js_SubInfoList")

/*
class HiddenVar{
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

    calculateVal( tempGameInfo,durtion ){

        if( tempGameInfo.hoursCount==null ) tempGameInfo.hoursCount=0;

            tempGameInfo.hoursCount =  tempGameInfo.hoursCount +   durtion ;
            tempGameInfo.dayCount = Math.floor( tempGameInfo.hoursCount / 24) ;


            tempGameInfo.dailyRecovery=Math.ceil( tempGameInfo.infectedCount *  Math.pow( 1+tempGameInfo.recoveryRate,  durtion));

            tempGameInfo.dailyInfection=( tempGameInfo.infectedCount - 
                tempGameInfo.quarantineCount) * Math.pow( 1+tempGameInfo.infectionRate,  durtion);

            tempGameInfo.infectedCount= Math.max( tempGameInfo.infectedCount -  
                tempGameInfo.dailyRecovery +  tempGameInfo.dailyInfection, 0.1 );

            tempGameInfo.quarantineRate=Math.min(ConstVar.maxQuarantineRate,ConstVar.minQuarantineRate + 
                (100 -  tempGameInfo.health) * ConstVar.quarantineRateParameter);

            tempGameInfo.quarantineCount=Math.min( tempGameInfo.quarantineCapacity,
                tempGameInfo.infectedCount *  tempGameInfo.quarantineRate);

            tempGameInfo.resourceDailyChange= tempGameInfo.resourceProductivity- tempGameInfo.resourceConsumption;
            if ( tempGameInfo.dayCount < 12){
                tempGameInfo.approvalDailyChange=-0.1-0.05*(100- tempGameInfo.health);
            }else{
                tempGameInfo.approvalDailyChange=1-0.02*(100- tempGameInfo.health);
            }
            
            tempGameInfo.health=
                Math.floor( 100-(Math.log( tempGameInfo.infectedCount )-ConstVar.logInitialInfected)/ ConstVar.logMaxInfected );
            tempGameInfo.resource= Math.floor( tempGameInfo.resource +  tempGameInfo.resourceDailyChange ) ;
            tempGameInfo.budget= Math.floor( tempGameInfo.budget +  tempGameInfo.budgetDailyChange );
            tempGameInfo.approval= Math.floor(tempGameInfo.approval +  tempGameInfo.approvalDailyChange);
            
            cc.log("calculate over");
            return tempGameInfo;
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

module.exports.setMainDataList = function( arg )
{
    return new JSData.InfomationList({
        health:arg.health,
        budget:arg.budget,
        resource:arg.resource,
        approval:arg.approval
    });
} 

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