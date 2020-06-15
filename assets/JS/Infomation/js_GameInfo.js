const JSData = require("./js_SubInfoList")
const ConstVar = require("./js_constant");
const ChangeAbleVar = require("./Variable").variable

const correspondTable = require("./correspondTable");
//const calculateFunction = require("./Caculate");


const MainData = require("./MainData");



//const setMainData = require("./MainData").setMainData
//const getMainData = require("./MainData").getMainData


module.exports =
{ 
    gameInformationList : function (){
    
        //设置主要信息表，便于读取和设置,以及和写出接口和前端交互
        
        MainData.setData (
            {
                health:ChangeAbleVar.health,
                budget:ChangeAbleVar.budget,
                resource:ChangeAbleVar.resource,
                approval:ChangeAbleVar.approval
            }
        );

        var CardRegionInfoList = new JSData.InfomationList( { //这里对应的是CardRegion显示
            from:'',
            name:'',
            day:'',
            picUrl:'',
            information:'',
            descA:'',
            descB:'',
        }) 

        var ValChangedInfoList = new JSData.InfomationList( {  //这里储存卡牌用于计算的信息
             A:ChangeAbleVar,
             B:ChangeAbleVar,
             durtion : 0, //....
        })

        var UserInfoList = new JSData.InfomationList({  //这里用于储存每次向服务器提交的信息
            storyid : 0,
            handcardid: 0,      // 当前卡id
            curcardoption: 0,   // 1或2
            mainpara:'{}',        // 明变量json串
            assistpara: '{}',     // 暗变量json串
            day: 1
        })



        var PreviewData = new JSData.InfomationList({
            calculatedA : 0,  //1表示已经计算过了，0表示需要计算
            calculatedB : 0,
            A : { health:0,budget:0,resource:0,approval:0 },
            B : { health:0,budget:0,resource:0,approval:0 },
            clear : { health:0,budget:0,resource:0,approval:0 }
        })


        
        var AssistPara = new JSData.InfomationList({
            dayCount:0, //当前天数
            hoursCount:0, //小时数

            infectedCount:100, //当前感染人数 
            infectionRate:0.3, //感染率
            dailyInfection:0,  //日感染人数
            
            recoveryRate:0.07,  //治愈率
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
        })


        //这里不知道卡牌的细节，只是提供分解机制，
        //也就是说，请求新卡牌时带来的信息将立马被分解
        //若卡牌中不存在需要信息，需要报错，(其实这就需要知道卡牌里面的细节了。。。。)
        this.SolveCapturedCardInfo=function( Cardinfo ){

            /* console.log("-----------------LAST CHANGEABLE VAR::-----------------")
             for( let prop in ChangeAbleVar )
             {
                 console.log( prop + " : " +  ChangeAbleVar[prop] );
             }
             console.log("-----------------LAST CHANGEABLE VAR::-----------------")*/


            //将选项AB中Val分开用于做计算，
            ValChangedInfoList.SetInfoList({
                Game : ChangeAbleVar,
                A : correspondTable.getCorrespond(Cardinfo.option.A.valChanged),
                B : correspondTable.getCorrespond(Cardinfo.option.B.valChanged),
                durtion : Cardinfo.durtion,
            })
            console.log("---------ValChangedInfoList--------- ");
            ValChangedInfoList.ShowInfoList();
            console.log("----------------------------------");
            

            //先设置一部发userInfo 。。因为其他部分需要选择卡牌后设置当前还不知道
            UserInfoList.SetInfoList({
                
                handcardid  :  Cardinfo.id,
            })

            //设置卡牌显示信息
            CardRegionInfoList.SetInfoList(
                {
                    from:Cardinfo.from,
                    name:Cardinfo.name,
                    picUrl:Cardinfo.picUrl,
                    information:Cardinfo.information,
                    descA:Cardinfo.option.A.desc,
                    descB:Cardinfo.option.B.desc, 

                    day:ChangeAbleVar.dayCount,//这个日期。。以后再修改吧
                }
            )

            //这里是预处理信息
            PreviewData.SetInfoList({
                calculatedA:0,
                calculatedB:0
            })
        },

        //点击选项后计算并显示数据 
        this.calculateBySelect = function( select )
        {
            let val = ValChangedInfoList.GetInfoList()
            let valinfo = {}

            valinfo = val[select.toString()];  //提出表格修改
            
            

            //let durtion = val.durtion; 
            let tempGameInfo = {};
            for( let d in ChangeAbleVar )
            {
                tempGameInfo[d] = ChangeAbleVar[d];
            }


            console.log("------------Chang New Val-------------");
            for( let v in valinfo ) //先根据选项的改变设置新值
            {
                if( valinfo[v][0] != 0 ){
                    tempGameInfo[v] += valinfo[v][0];
                }
                else{
                    tempGameInfo[v] = valinfo[v][1];
                }

                console.log("Valinfo:"+v+"["+valinfo[v][0]+","+valinfo[v][1]+"]" + "tempGameInfo[v]:" + tempGameInfo[v]);
            }
            console.log("------------Chang New Val-------------");


            tempGameInfo =  this.calculateVal( Object.assign({},tempGameInfo),val.durtion );
            this.printTempGameInfomation(tempGameInfo,select);

                
            this.solveMainDataPreview(tempGameInfo,select );
        }
        
       

        //确认选择
        this.confirmSelect=function(select)
        {
            let calculatedGameChangeAbleVarInfo = {}
            if( select == 'A')
            {
                if(  PreviewData.GetInfoList().calculatedA == 0 ) //需要计算
                {
                    this.calculateBySelect( 'A' )
                }
                calculatedGameChangeAbleVarInfo = ValChangedInfoList.GetInfoList().A;
                
            }
            else if( select=='B' )
            {
                if( PreviewData.GetInfoList().calculatedB == 0 ) //需要计算
                {
                    this.calculateBySelect( 'B' )
                }

                calculatedGameChangeAbleVarInfo = ValChangedInfoList.GetInfoList().B;
            }
            else {
                console.log("error:"+select);
            }

            //最后才全部更新
            for( let d in calculatedGameChangeAbleVarInfo )
            {
                ChangeAbleVar[d] = calculatedGameChangeAbleVarInfo[d];
            }

            MainData.setData({
                health:ChangeAbleVar.health,
                budget:ChangeAbleVar.budget,
                resource:ChangeAbleVar.resource,
                approval:ChangeAbleVar.approval
            })

            AssistPara.SetInfoList({
                ChangeAbleVar
            })

            UserInfoList.SetInfoList({
                storyid  :  cc.sys.localStorage.getItem('storyid'),
                //handid再前面获取了
                curcardoption: select=='A'?1:2,   // 1或2
                mainpara: JSON.stringify(MainData.getData() ),        // 明变量json串
                assistpara: JSON.stringify(AssistPara.GetInfoList()),     // 暗变量json串
                day: ChangeAbleVar.dayCount +1 ,
                
            })

            cc.sys.localStorage.setItem('lastday', ChangeAbleVar.dayCount)


           
        }

         //获得预览
         this.getDataPreView=function( select )  
         {
            // console.log("select"+select);
            //console.log("PreviewData.GetInfoList().calculatedA"+PreviewData.GetInfoList().calculatedA);
            //console.log("PreviewData.GetInfoList().calculatedB"+PreviewData.GetInfoList().calculatedB);

            console.log( "getDataPreView " + select);
             if( select == 'A'  )
             {
                if( PreviewData.GetInfoList().calculatedA == 0 )
                this.calculateBySelect( 'A' );

                for( let i in  PreviewData.GetInfoList().A ) 
                {
                    console.log(i + " : " +  PreviewData.GetInfoList().A[i] );
                }

                return PreviewData.GetInfoList().A;
             }
             else if( select == 'B' )
             {
                if( PreviewData.GetInfoList().calculatedB == 0 )
                this.calculateBySelect( 'B' );

                for( let i in  PreviewData.GetInfoList().B ) 
                {
                    console.log(i + " : " +  PreviewData.GetInfoList().B[i] );
                }

                return PreviewData.GetInfoList().B;
             }
             else if (select==0)
             {
                 return PreviewData.GetInfoList().clear;
             }

            


         }

        //返回卡牌区域信息
        this.getCardRegionInfo=function(){
            /*console.log("---------getCardRegionInfo--------- ");
            CardRegionInfoList.ShowInfoList();
            console.log("----------------------------------");*/
            return CardRegionInfoList.GetInfoList() ;
        }
        
        //返回数据区域信息
        this.getDataRegionInfo=function(){
            /*console.log("---------getDataRegionInfo---------");
            MainDataList.ShowInfoList();
            console.log("----------------------------------");*/
            return MainData.getData() ;
            
        }

        //返回用户信息
        this.getUserInfo=function(){
            /*console.log("---------getUserInfo--------- ");
            UserInfoList.ShowInfoList();
            console.log("----------------------------------");*/
            return UserInfoList.GetInfoList() ;
        },

        
        this.calculateVal = function( tempGameInfo,durtion ){

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


        this.printTempGameInfomation = function( tempGameInfo,select ){

            

            console.log("-----------------Temp::" + select + "::-----------------")
                for( let prop in tempGameInfo )
                {
                    console.log( prop + " : " +  tempGameInfo[prop] );
                }
                console.log("---------------------------------")

            /*console.log("-----------------calculate::" + select + "::-----------------")
            for( var prop in tempGameInfo )
            {
                console.log( prop + " : " +  tempGameInfo[prop] );
            }
            console.log("--------ConstVar------")
            for( var prop in ConstVar )
            {
                console.log( prop + " : " +  ConstVar[prop] );
            }
            console.log("---------------------------------")

            console.log("ConstVar.logMaxInfected"+ConstVar.logMaxInfected);
            console.log("ConstVar.logInitialInfected"+ConstVar.logInitialInfected);
            console.log("tempGameInfo.infectedCount:"+tempGameInfo.infectedCount);
            console.log("health=100-(Math.log( tempGameInfo.infectedCount)-ConstVar.logInitialInfected)/ConstVar.logMaxInfected:"+tempGameInfo.health)
            */
        }


        this.solveMainDataPreview = function( tempGameInfo,select  )
        {
            let pre = [0,0,0,0]; 
                let t=0;
                for( var p in MainData.getData()  )
                {
                    if( tempGameInfo[p] > ChangeAbleVar[p] ) pre[t]=1;
                    else if( tempGameInfo[p] < ChangeAbleVar[p] )pre[t]=-1;
                    t++;
                    
                } 

               
                /*
                let calculateFiledString = "calculated" + select.toString();
                PreviewData[calculateFiledString.toString()] = 1;
                PreviewData[select.toString()] = {
                    health: pre[0],
                    resource: pre[1],
                    budget: pre[2],
                    approval: pre[3],
                }

                ValChangedInfoList[select.toString()] = tempGameInfo;

                cc.log(calculateFiledString);
                cc.log(select);
                ValChangedInfoList.ShowInfoList();
                **/
               
                

                if(select == 'A')
                {
                    PreviewData.SetInfoList({
                        calculatedA : 1,
                        A  : {
                            health: pre[0],
                            resource: pre[1],
                            budget: pre[2],
                            approval: pre[3],
                        }
                    })

                    ValChangedInfoList.SetInfoList({
                        A : tempGameInfo,
                    })
                }   
                else  if(select == 'B')
                {
                    PreviewData.SetInfoList({
                        calculatedB:1,
                        B  : {
                            health: pre[0],
                            resource: pre[1],
                            budget: pre[2],
                            approval: pre[3],
                        }
                    })

                    ValChangedInfoList.SetInfoList({
                        B : tempGameInfo,
                    })
                }
                
        }
        
    }

}
    