
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
    { //暗变量
        this.darkVar = {
        dayCount:0, //当前天数
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
        }

        this.getDarkVar = function(){
            return this.darkVar;
        }
        
    } 
    {   //数组区相关信息 或者说 明变量
        this.dataInfo = {
            health : 100,
            budget : 50 ,
            resource : 50 ,
            approval : 50,
        }
        this.setDataInfo = function( d_info ){
            for(  porp in d_info )
            {
                 this.dataInfo[porp] = d_info[porp]
            }
        }
        this.updateDataInfo = function( d_info ){
            for(  porp in d_info )
            {
                this.dataInfo[porp] += d_info[porp]
            }
        }
        this.getDataInfo = function(){
            return this.dataInfo;
        }
    }
    {    //卡牌区相关信息
        function CardInfoList(){
      
            //定义一张卡牌 ， 内部储存信息
            var aCard = function( cardInfo ){
                this.info = cardInfo;
                this.next = null;
            }
        
            this.length = 0;
            front = null;
            last = null;
            //var top = null 
            //var last= null
        
            this.push = function( cardInfo ){
                let acard = new aCard(cardInfo);
                
        
                if( this.length == 0 ){ //第一次
                    front = acard ;
                }else{
                    last.next = acard;
                }
        
                last = acard;
                this.length++;
                return true;
            },
        
            this.pop = function(){
                front = front.next;
                this.length--;
            },
        
            this.getLength = function()
            {
                return this.length;
            },
           
            this.getCardInfo = function()
            {
                return front.info;
            },
        
            this.clear = function()
            {
                while( this.length > 0 )
                {
                    this.pop();
                }
            }
        
        };
    
        this.cardInfoList = new CardInfoList();
        this.setNewCardInfo = function( c_info ) //设置新卡片信息
        {
            this.cardInfoList.push(c_info);
        }
    
        this.getTopCardInfo= function ( ) //得到头部卡牌信息
        {
            if( this.getCardListLength() >= 1 )
            return this.cardInfoList.getCardInfo();
            else
            {
                console.log("没牌了，请添加");
                return false;
            }
        }
    
        this.popTopCard= function( )  //弹出卡牌
        {
            this.cardInfoList.pop();
        }
    
        this.setManyNewCardsInfo = function( c_infos ){ //函数实现一次性设置多张卡牌 
            for( i in c_infos )
            this.setNewCardInfo(c_infos[i]);
        }
    
        this.getAndPopTopCard = function()  //一次性实现弹出和获得下一张卡信息
        {
            this.popTopCard();
            return this.getTopCardInfo();
        }
    
        this.getCardListLength = function(){
            return this.cardInfoList.getLength();
        }
    
    }
    {    //计算呢这里
        this.calculateAndUpdataData = function( select ){
              
            //先计算卡牌改变的暗变量 
            console.log( "--------- Calculate And UpdataData -----------")
            let theCard = this.getTopCardInfo();
            let valChanged = theCard.option[select].valChanged ;  //根据select获取卡牌中的暗变量
            for( v in valChanged )
            {
                if( this.darkVar[v] == null ) {
                    console.log("不存在这样的变量");
                }
    
                if( valChanged[v][0] != 0 ) //如果第一个数0，说明是加减改变
                {
                    this.darkVar[v]+=valChanged[v][0];
                }
                else //否则做赋值改变
                {
                    this.darkVar[v]=valChanged[v][1];
                }
            }
    
           
            //在改变其他暗变量 
            this.darkVar.dayCount= this.darkVar.dayCount + theCard.durtion;
    
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
            for( prop in this.darkVar )
            {
                console.log( prop + " : " + this.darkVar[prop] );
            }
            for( prop in this.dataInfo )
            {
                console.log( prop + " : " + this.dataInfo[prop] );
            }
    
            console.log( "------Calculate And UpdataData OVER--------")
            
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
        this.userInfo.mainpara = this.getDataInfo();
        this.userInfo.assistpara = this.getDarkVar();
        this.userInfo.day = this.userInfo.assistpara.dayCount;
        this.userInfo.curcardoption = select=='A'?1:2;
       }

        this.setsUserInfo = function( u_info ) {
             /* handcardid: 1,  //当前卡id
                storyid   : localStorage.getItem('storyid'),
                day: 1*/
                
                
            for(  porp in u_info )
            {
                 this.userInfo[porp] = u_info[porp]
            }

            this.updateUserInfo(0);
        },

        this.getUserInfo = function( select ){
            /*
            curcardoption: 0,   // 1或2
            mainpara:'{}',        // 明变量json串
            assistpara: '{}',     // 暗变量json串
            */

            // 每次获取是需要更新呢
           this.updateUserInfo(select);
            this.showUserInfo();
          
            return this.userInfo ;
        }


        this.showUserInfo=function()
        {
            console.log("-----Here is UserInfo:-----");
            for(  porp in this.userInfo )
            {
                console.log(porp + " : " + this.userInfo[porp]  );
            }
            console.log("-----UserInfo-------");

        }
    }
    }
}
    