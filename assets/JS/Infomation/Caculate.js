/*module.exports={
    calculateVal = function( tempGameInfo,durtion ){

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
}  */