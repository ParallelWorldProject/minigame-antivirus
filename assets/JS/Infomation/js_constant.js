

module.exports = {
    
    maxInfected:1000000,          //失败感染人数
    initialInfected:100,          //起始感染人数
    minQuarantineRate:0.15000,    //最小隔离率
    maxQuarantineRate:0.6000,     //最大隔离率
    quarantineRateParameter:0.0500, //隔离率系数

    logMaxInfected:Math.log(1000000), //maxInfected=10000
    logInitialInfected:Math.log(100), //initialInfected=100
};