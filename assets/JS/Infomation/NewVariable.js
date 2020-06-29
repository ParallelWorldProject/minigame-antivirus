const ConstVar = require("./js_constant");

class GameVarible
{
    constructor()
    {
        this.N = 100000 //initial population
        this.beta = 0.3  // virus's inherent infection rate
        this.gamma = 0.07 // virus's inherent recovery rate

        //initial conditions: 100 infected, no death,  rest susceptible
        this.I0 = 100
        this.S0 = this.N-this.I0
        this.R0 = 0  
        this.D0 = 0 

        //failure condition: 70% of the population is infected
        this.If = 0.7 * this.N

        //initial death rate
        this.dDdt = 0.001

        //initial Health
        this.Health = 100

        //initial Resource
        this.Resources = 50

        //initial Financials
        this.Financials = 50

        //initial Support
        this.Support = 50

        //initial quarantine region
        this.qc = 500 //quanrantine capacity
        this.qr = 0.05 //quarantine rate
        this.qn = Math.min(this.qc, this.qr*this.I0) //number of ppl in quarantine

        //initial resource output productivty
        this.prod = 1

        //initial supprt rate change
        this.dsup = 0.3

        //initial daily resource consumption 
        this.redaily = 1

        //initial daily financals consumption
        this.findaily = 0

        this.setCurr()

    }
    
    setCurr()
    {
        //initial state vector
        this.curr = 
            [this.Health, this.Resources, this.Financials, this.Support, this.beta, this.gamma, 
                this.S0, this.I0, this.R0, this.qc, this.qr, this.qn, this.D0, this.dDdt, this.prod, 
                this.dsup, this.N, this.redaily, this.findaily]
    }

    calculateGameVar(  ){

        this.updateSIR()
        this.updateND()
        this.updateHealth()
        this.updateResources()
        this.updateFinancials()
        this.updateSupport()
        this.updateQuarantine()
        this.setCurr()
    }
    
    captureCardChangedVal( cardChangedVal )
    {
     
        //a = [0,0.5];
        for( let v in cardChangedVal ) 
        {
            if( cardChangedVal[v][0] != 0 ){
                this[v.toString()] += cardChangedVal[v][0];
            }
            else{
                this[v.toString()] = cardChangedVal[v][1];
            }

            console.log( "V:" + v + " [0]: " + cardChangedVal[v][0]+
                            " [1]: " + cardChangedVal[v][1] + "--" +
                            this[v.toString()]);
        }
    }

    getMainData () {
        return {
            'health':this.Health,
            'budget':this.Financials,
            'resource':this.Resources,
            'approval':this.Support,
        };
    }

    getAssistParameter(){
        /*return {
            'dayCount':0, //当前天数
            'hoursCount':0, //小时数
        
            'infectedCount':0, //当前感染人数 
            'infectionRate':0, //感染率
            'dailyInfection':0,  //日感染人数
            
            'recoveryRate': 0,  //治愈率
            'resourceProductivity':0, //？
            'resourceConsumption':0, //？
            'resourceDailyChange':0, //资源日增减
        
            'dailyRecovery':0,   //日治愈人数
        
            'quarantineCapacity':0,    //隔离区容量
            'quarantineRate':0,  //隔离率
            'quarantineCount':0, //隔离人数
            
            'budgetDailyChange':0,   //财政日增减
            'approvalDailyChange':0,//支持率日增减
            'shutdown':0,    //封城 是1否0
        }*/
        return this.curr; 
    }

    updatedD() 
    {
    // Assume the medical resources can support 5% of the population, if we go beyond that threshold, the death rate goes up 0.001 per percentage point
    // This condition is arbitrary.
    if ((this.I/this.N) > 0.05)
        this.dDdt += 0.001 * ((this.I/this.N) - 0.05);
    }

    updateND()
    {
        this.dDdt = this.updatedD()
        this.D = this.I * this.dDdt
        this.N = this.N - this.D
    }

    deriv()
    {
        this.dSdt = -this.beta * this.S * this.I / this.N
        this.dIdt = this.beta * this.S * this.I / this.N - this.gamma * this.I
        this.dRdt = this.gamma * this.I
    }

    updateSIR()
    {
    
    this.deriv()
    
    // delta t = 1
    S = this.dSdt + this.S0
    I = this.dIdt + this.I0
    R = this.dRdt + this.R0
   
    }

    updateHealth(){
    if (this.I >= 1)
        this.Health = 100 - Math.max((Math.log2(this.I) - Math.log2(this.I0))/
                        (Math.log2(this.If)- Math.log2(this.I0))*100, 1)
    else   this.Health = 99
    }

    updatedsup()
    {
    if ((this.I/this.N)< 0.1)
        this.dsup = 0.3;
    else
        this.dsup = -1;
  
    }

    updateSupport()
    {
        this.Support = this.Support + this.dsup
    
    }

    updateFinancials()
    {
        this.Financials = this.Financials + this.findaily
    //return Financials
    }

    updateResources()
    {
        this.Resources = this.Resources - this.redaily + this.prod
    //return Resources
    }

    updateQuarantine()
    {
        this.qn = Math.min(this.qc, (this.qr * this.I))
    //return qc, qr, qn
    }

    getGameVaribleAllNumber(){
        return Object.assign(getAssistParameter() ,getMainData());
    }
}


module.exports = 
{
    GameVarible 
}





