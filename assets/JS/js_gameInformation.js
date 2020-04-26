
module.exports =
{ 




    gameInformationList : function (){

    
    {  //游戏常量不用从后台获得 ？？
        this.maxInfected=1000000; //失败感染人数
        this.initialInfected=100;  //起始感染人数
        this.minQuarantineRate=0.15;    //最小隔离率
        this.maxQuarantineRate=0.6;     //最大隔离率
        this.quarantineRateParameter=0.05; //隔离率系数
    
        this.logMaxInfected=Math.log(1000000); //maxInfected
        this.logInitialInfected=Math.log(100); // initialInfected
    }
    { //变量
        this.darkVar = {
        dayCount:0, //当前天数
        hoursCount:0,
        infectedCount:100, //当前感染人数 
        infectionRate:0.3, //感染率
        dailyInfection:0,  //日感染人数
        recoveryRate:0.2,  //治愈率
        dailyRecovery:0,   //日治愈人数
        quarantineCapacity:500,    //隔离区容量
        quarantineRate:0,  //隔离率
        quarantineCount:0, //隔离人数
        resourceDailyChange:0, //资源日增减
        budgetDailyChange:0,   //财政日增减
        approvalDailyChange:0,//支持率日增减
        shutdown:0,    //封城 是1否0

        /*health : 100,
        budget : 50 ,
        resource : 50 ,
        approval : 50,*/
        }
        //新设对应表格
        this.correspondTable = {
            "隔离区容量"  :  "quarantineCapacity",
            "感染率" : "infectionRate",
            "财政" : "budget",
            "支持率" : "approval",
            "治愈率" : "recoveryRate",
            "资源" : "resource"
        }

        this.getDarkVar = function(){
            return this.darkVar;
        }
        
    } 
    {   //数组区相关信息 或者说 明变量
        this.dataInfo = {  //这个是现在是默认的
            health : 100,
            budget : 50 ,
            resource : 50 ,
            approval : 50,
        }
        this.setDataInfo = function( d_info ){
            for( var porp in d_info )
            {
                 this.dataInfo[porp] = d_info[porp]
            }
        }
        this.updateDataInfo = function( d_info ){
            for( var porp in d_info )
            {
                this.dataInfo[porp] += d_info[porp]
            }
        }
        this.getDataInfo = function(){
            return this.dataInfo;
        }
    }
    {    //卡牌区相关信息
        
        this.cardInfo = {
            errorcode:0,
                message:"游戏开始",
                id : 1,
                from:"1" ,
                name:"1",
                date:"11", //?
                durtion : 1,
                weight : 1000 ,
                information:"1111", //?
                picUrl:'cardimg1',
                option:{
                    A:{
                       desc : "ok",
                       valChanged :null,
                       weigthChanged: null,
                       nextCard: 0,
                    },
                    B:{
                        desc : "ok",
                        valChanged :null,
                        weigthChanged: null,
                        nextCard: 0,
                     },
                    },
                day:0,
        };
        this.setNewCardInfo = function( c_info ) //设置新卡片信息
        {
           for( var p in c_info )
           {
               this.cardInfo[p] = c_info[p];
           }
           this.cardInfo.day = this.darkVar.dayCount;

           //cc.log('storgt：cardInfo',this.cardInfo);
        }
    
        this.getTopCardInfo= function ( ) //得到头部卡牌信息
        {
            return this.cardInfo;
        }
    
    }
    {    //计算呢这里
        this.calculateAndUpdataData = function( select ){
              
            //先计算卡牌改变的暗变量 
            console.log( "--------- Calculate And UpdataData Var-----------")
            let theCard = this.getTopCardInfo();
            let valChanged = this.getCorrespondTable( theCard.option[select].valChanged ) ; //根据select获取卡牌中的暗变量
            
            for( var v in valChanged )
            {
                if( this.darkVar[v] == null &&  this.dataInfo[v]==null ) {
                    console.log("不存在这样的变量" + v );
                }
    
                if( valChanged[v][0] != 0 ) //如果第一个数0，说明是加减改变
                {
                    if( this.darkVar[v]!=null )
                    this.darkVar[v]+=valChanged[v][0];
                    else if( this.dataInfo[v]!=null )
                    this.dataInfo[v] += valChanged[v][0];
                }
                else //否则做赋值改变
                {
                    if( this.darkVar[v]!=null )
                    this.darkVar[v]=valChanged[v][0];
                    else if( this.dataInfo[v]!=null )
                    this.dataInfo[v]=valChanged[v][0];
                }
            }
    
           
            //在改变其他暗变量 
            if( this.darkVar.hoursCount==null ) this.darkVar.hoursCount=0;
            this.darkVar.hoursCount = this.darkVar.hoursCount + theCard.durtion
            this.darkVar.dayCount = Math.floor(this.darkVar.hoursCount / 24) ;
            
    
            this.darkVar.dailyRecovery=Math.ceil(this.darkVar.infectedCount * 
                Math.pow(this.darkVar.recoveryRate,theCard.durtion));
    
            this.darkVar.dailyInfection=(this.darkVar.infectedCount - 
                this.darkVar.quarantineCount) * Math.pow(this.darkVar.infectionRate,theCard.durtion);
    
            this.darkVar.infectedCount=this.darkVar.infectedCount - this.darkVar.dailyRecovery + this.darkVar.dailyInfection;
    
            this.darkVar.quarantineRate=Math.min(this.maxQuarantineRate,this.minQuarantineRate + 
                (100 - this.dataInfo.health) * this.quarantineRateParameter);
    
            this.darkVar.quarantineCount=Math.min(this.darkVar.quarantineCapacity,this.darkVar.infectedCount * 
                this.darkVar.quarantineRate);
            
            
            //再改变主变量
            this.dataInfo.health=100-(Math.log(this.darkVar.infectedCount)-this.logInitialInfected)/this.logMaxInfected;
            this.dataInfo.resource=this.dataInfo.resource + this.darkVar.resourceDailyChange;
            this.dataInfo.budget=this.dataInfo.budget + this.darkVar.budgetDailyChange;
            this.dataInfo.approval=this.dataInfo.approval + this.darkVar.approvalDailyChange;

            
            
    
            console.log( "durtion: " + theCard.durtion );    
            for( var prop in this.darkVar )
            {
                console.log( prop + " : " + this.darkVar[prop] );
            }
            console.log( "------Calculate And UpdataData OVER--------")
            
        }  
        
        this.getCorrespondTable = function( temp ){
            let tureKey = { }
            for( t in temp )
            {
                let str = temp[t].toString().slice(1,temp[t].length-1).split(',');
                let tureVal = [parseInt(str[0]),parseInt(str[1])];
                tureKey[this.correspondTable[t]] = tureVal;
                //console.log(this.correspondTable[t]+"  :  "+tureVal);
            }
            return tureKey;
        }
            
    }
    {   //后台需要传递的信息
        this.userInfo ={
            storyid : 0,
            handcardid: 0,      // 当前卡id
            curcardoption: 0,   // 1或2
            mainpara:'{}',        // 明变量json串
            assistpara: '{}',     // 暗变量json串
            day: 1
        }

       this.updateUserInfo= function(select)
       {
        this.userInfo.storyid = cc.sys.localStorage.getItem('storyid'); 
        this.userInfo.handcardid = this.getTopCardInfo().id;
        this.userInfo.curcardoption = select=='A'?1:2;

        this.userInfo.day = this.darkVar.dayCount+1;

        this.userInfo.mainpara = JSON.stringify(this.getDataInfo());
        this.userInfo.assistpara = JSON.stringify(this.getDarkVar());
        //this.userInfo.mainpara = this.getDataInfo();
        //this.userInfo.assistpara = this.getDarkVar();
        //console.log("this.getDataInfo()"+this.getDataInfo() );
        //console.log("Json+this.getDataInfo()"+JSON.stringify(this.getDataInfo()));
        

        cc.sys.localStorage.setItem('lastday', this.userInfo.day)
       }

        this.getUserInfo = function( select ){
            

            // 每次获取是需要更新呢
           this.updateUserInfo(select);
            this.showUserInfo();
          
            //return JSON.stringify(this.userInfo) ;
            return this.userInfo;
        }


        this.showUserInfo=function()
        {
            console.log("-----Here is UserInfo:-----");
            for( var  porp in this.userInfo )
            {
                console.log(porp + " : " + this.userInfo[porp]  );
            }
            console.log("PastHours:"+this.darkVar.hoursCount + "//这个参数是不传的");
            console.log("-----UserInfo-------");

        }
    }
    }
}
    