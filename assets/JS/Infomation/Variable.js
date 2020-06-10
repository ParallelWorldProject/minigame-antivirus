module.exports = {
    
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


    health : 100, //健康
    budget : 50 , //财政
    resource : 50 , //资源
    approval : 50, //支持度
};