const ConstVar = require("./js_constant");
const correspondTable = require("./correspondTable");


class GameVarible
{
    constructor()
    {
        dayCount=0; //当前天数
        hoursCount=0; //小时数

        infectedCount=100; //当前感染人数 
        infectionRate=0.3000; //感染率
        dailyInfection=0;  //日感染人数
        
        recoveryRate = 0.0700;  //治愈率
        resourceProductivity=1; //？
        resourceConsumption=1; //？
        resourceDailyChange=0; //资源日增减

        dailyRecovery=0;   //日治愈人数

        quarantineCapacity=500;    //隔离区容量
        quarantineRate=0;  //隔离率
        quarantineCount=0;//隔离人数
        
        budgetDailyChange=0;   //财政日增减
        approvalDailyChange=0;//支持率日增减
        shutdown=0;    //封城 是1否0

        health=100;
        budget=50;
        resource=50;
        approval=100;
    }

    calculateGameVar( durtion ){

        //cc.log( durtion )
        //cc.log( durtion + 1 )

        if( hoursCount==null ) hoursCount=0;
    
        hoursCount =  hoursCount +   durtion ;
        dayCount = Math.floor( hoursCount / 24) ;
    
    
        dailyRecovery=
        Math.ceil( infectedCount *  Math.pow( 1+recoveryRate,  durtion));
    
        dailyInfection=( infectedCount - 
            quarantineCount) * Math.pow( 1+infectionRate,  durtion);
    
        infectedCount= Math.max( infectedCount -  
            dailyRecovery +  dailyInfection, 0.1 );
    
        quarantineRate=Math.min(ConstVar.maxQuarantineRate,ConstVar.minQuarantineRate + 
            (100 -  health) * ConstVar.quarantineRateParameter);
    
        quarantineCount=Math.min( quarantineCapacity,
            infectedCount *  quarantineRate);
    
        resourceDailyChange= resourceProductivity- resourceConsumption;
        if ( dayCount < 12){
            approvalDailyChange=-0.1-0.05*(100- health);
        }else{
            approvalDailyChange=1-0.02*(100- health);
        }
        
        health=
            Math.floor( 100-(Math.log( infectedCount )-ConstVar.logInitialInfected)/ ConstVar.logMaxInfected );
        resource= Math.floor( resource +  resourceDailyChange ) ;
        budget= Math.floor( budget +  budgetDailyChange );
        approval= Math.floor(approval +  approvalDailyChange);
        
        cc.log("calculate over");
    }
    
    captureCardChangedVal( cardChangedVal )
    {
        //cardChangedVal = correspondTable.getCorrespond(cardChangedVal);
        //a = [0,0.5];

        //cc.log("sdasd###########");

        for( let v in cardChangedVal ) 
        {
            if( cardChangedVal[v][0] != 0 ){
                this[v.toString()] += cardChangedVal[v][0];
            }
            else{
                this[v.toString()] = cardChangedVal[v][1];
            }

            /*console.log( "V:" + v + " [0]: " + cardChangedVal[v][0]+
                            " [1]: " + cardChangedVal[v][1] + "--" +
                            this[v.toString()]);*/
        }
    }

    getMainData () {
        return {
            'health':this.health,
            'budget':this.budget,
            'resource':this.resource,
            'approval':this.approval
        };
    }

    getAssistParameter(){
        return {
            'dayCount':dayCount, //当前天数
            'hoursCount':hoursCount, //小时数
        
            'infectedCount':infectedCount, //当前感染人数 
            'infectionRate':infectionRate, //感染率
            'dailyInfection':dailyInfection,  //日感染人数
            
            'recoveryRate': recoveryRate,  //治愈率
            'resourceProductivity':resourceProductivity, //？
            'resourceConsumption':resourceConsumption, //？
            'resourceDailyChange':resourceDailyChange, //资源日增减
        
            'dailyRecovery':dailyRecovery,   //日治愈人数
        
            'quarantineCapacity':quarantineCapacity,    //隔离区容量
            'quarantineRate':quarantineRate,  //隔离率
            'quarantineCount':quarantineCount, //隔离人数
            
            'budgetDailyChange':budgetDailyChange,   //财政日增减
            'approvalDailyChange':approvalDailyChange,//支持率日增减
            'shutdown':shutdown,    //封城 是1否0
        }
    }

    get dayCount(){
        return dayCount;
    };
    get hoursCount(){
        return hoursCount;
    };
    get infectedCount()
    {
        return infectedCount;
    }
   
    get infectionRate(){
        return infectionRate;
    }; 
    get dailyInfection(){
        return dailyInfection;
    }; 
    get recoveryRate(){
        return recoveryRate;
    }; 
    get resourceProductivity(){
        return resourceProductivity;
    }; 
   
    get  resourceConsumption(){
        return  resourceConsumption;
    };  
    get resourceDailyChange(){
        return resourceDailyChange;
    };
    get dailyRecovery(){
        return dailyRecovery;
    };  
    get quarantineCapacity(){
        return quarantineCapacity;
    }; 
    get quarantineRate(){
        return quarantineRate;
    }; 
    get quarantineCount(){
        return quarantineCount;
    }; 
    get budgetDailyChange(){
        return budgetDailyChange;
    }; 
    get approvalDailyChange(){
        return approvalDailyChange;
    }; 
    get shutdown(){
        return shutdown;
    }; 
    get health(){
        return health;
    }; 
    get budget(){
        return budget;
    }; 
    get resource(){
        return resource;
    }; 
    get approval(){
        return approval;
    }; 


    //set
    set dayCount( arg ){
        dayCount = arg;
    };
    set hoursCount( arg){
        hoursCount = arg;
    };
    set infectedCount( arg)
    {
         infectedCount = arg;
    }
    
    set infectionRate(arg){
         infectionRate = arg;
    }; 
    set dailyInfection(arg){
         dailyInfection = arg;
    }; 
    set recoveryRate(arg){
        recoveryRate = arg;
    }; 
    set resourceProductivity(arg){
         resourceProductivity = arg;
    }; 
   
    set  resourceConsumption(arg){
         resourceConsumption = arg;
    };  
    set resourceDailyChange(arg){
         resourceDailyChange = arg;
    };
    set dailyRecovery(arg){
       dailyRecovery = arg;
    };  
    set quarantineCapacity(arg){
         quarantineCapacity = arg ;
    }; 
    set quarantineRate(arg){
        quarantineRate = arg;
    }; 
    set quarantineCount(arg){
         quarantineCount = arg;
    }; 
    set budgetDailyChange(arg){
         budgetDailyChange = arg;
    }; 
    set approvalDailyChange(arg){
         approvalDailyChange = arg;
    }; 
    set shutdown(arg){
       shutdown= arg;
    }; 
    set health(arg){
         health= arg;
    }; 
    set budget(arg){
        budget= arg;
    }; 
    set resource(arg){
         resource= arg;
    }; 
    set approval(arg){
        approval= arg;
    }; 

    getGameVaribleAllNumber(){
        return Object.assign(getAssistParameter() ,getMainData());
    }
}


module.exports = 
{
    GameVarible 
}


/*export function setGameVarible(data){
    gameVarible = data;
}*/



