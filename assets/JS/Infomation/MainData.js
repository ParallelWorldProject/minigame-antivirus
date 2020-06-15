
let mainData = {
    health : 100,
    budget : 50,
    resource : 50,
    approval : 100,
}


module.exports.setData = function( arg )
{
    mainData = {
        health:arg.health,
        budget:arg.budget,
        resource:arg.resource,
        approval:arg.approval
    }
} 

module.exports.getData = function () {
    return mainData;
}
