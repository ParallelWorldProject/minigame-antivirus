
let mainData = {
    health : 100,
    budget : 50,
    resource : 50,
    approval : 100,
}


export function setMainData( arg )
{
    mainData = {
        health:arg.health,
        budget:arg.budget,
        resource:arg.resource,
        approval:arg.approval
    }
} 

export function getMainData () {
    return mainData;
}
