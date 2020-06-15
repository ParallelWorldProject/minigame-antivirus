//用于更换中英文
//如 "感染率":[-0.1,0] , 将被替换位 infectionRate:[-0.1,0]

var correspondTable =
{
    "感染率" 	:"infectionRate",
    "新增感染"	:"dailyInfection",
    "治愈率" :	"recoveryRate",
    "治愈"	:"dailyRecovery",
    "隔离区容量"	: "quarantineCapacity",
    "隔离率"	:"quarantineRate",
    "隔离区人数"	: "quarantineCount",
    "资源生产力"	:"resourceProductivity",
    "资源日耗"	:"resourceConsumption",
    "日财政出入"	:"budgetDailyChange",
    "支持率变化"	:"approvalDailyChange",
    "封城"	:"shutdown",
    "健康" :"health",
    "资源" :"resource",
    "财政":	"budget",
    "支持率":	"approval",
}


module.exports.getCorrespond = function( arg ){
    let result = { }
    for( let key in arg )
    {
        result[correspondTable[key]] = arg[key];
    }
    return result;
};