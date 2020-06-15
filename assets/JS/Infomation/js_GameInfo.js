const JSData = require("./js_SubInfoList")
const correspondTable = require("./correspondTable");
import {getGameVarible,setGameVarible} from './Variable'



module.exports =
{ 
    gameInformationList : function (){
    
        var CardRegionInfoList = new JSData.InfomationList( { //这里对应的是CardRegion显示
            from:'',
            name:'',
            day:'',
            picUrl:'',
            information:'',
            descA:'',
            descB:'',
        }) 

        var UserInfoList = new JSData.InfomationList({  //这里用于储存每次向服务器提交的信息
            storyid : 0,
            handcardid: 0,      // 当前卡id
            curcardoption: 0,   // 1或2
            mainpara:'{}',        // 明变量json串
            assistpara: '{}',     // 暗变量json串
            day: 1
        })

        var ValChangedInfoList = new JSData.InfomationList( {  //这里储存卡牌用于计算的信息
             A:{},
             B:{},
             durtion : 0, //....
        })

        //这里不知道卡牌的细节，只是提供分解机制，
        //也就是说，请求新卡牌时带来的信息将立马被分解
        //若卡牌中不存在需要信息，需要报错，(其实这就需要知道卡牌里面的细节了。。。。)
        this.SolveCapturedCardInfo=function( Cardinfo ){

            //将选项AB中Val分开用于做计算，
            ValChangedInfoList.SetInfoList({
                A : correspondTable.getCorrespond(Cardinfo.option.A.valChanged),
                B : correspondTable.getCorrespond(Cardinfo.option.B.valChanged),
                durtion : Cardinfo.durtion,
            })
            
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
                    day:getGameVarible().dayCount,//这个日期。。以后再修改吧
                }
            )
        },

        //确认选择
        this.confirmSelect=function(select)
        {
            //计算
            this.calculateBySelect( select )

            //更新
            this.updataImportantInfo(select);
        }

        //计算
        this.calculateBySelect = function( select )
        {
         
            let cardChangedVal = ValChangedInfoList.GetInfoList()[select.toString()];  //提出表格修改
            
            //获取更新卡牌中的值
            getGameVarible().captureCardChangedVal(cardChangedVal)
            //计算更新其他值
            getGameVarible().calculateGameVar(ValChangedInfoList.GetInfoList().durtion)
            //this.solveMainDataPreview( ChangeAbleVar,select );
            //this.printTempGameInfomation(tempGameInfo,select);
        }

        //更新
        this.updataImportantInfo = function(select)
        {
           
            UserInfoList.SetInfoList({
                storyid  :  cc.sys.localStorage.getItem('storyid'),
                //handid再前面获取了
                curcardoption: select=='A'?1:2,   // 1或2
                mainpara: JSON.stringify(getGameVarible().getMainData() ),        // 明变量json串
                assistpara: JSON.stringify(getGameVarible().getAssistParameter()),     // 暗变量json串
                day: getGameVarible().dayCount +1 ,
                
            })
            cc.sys.localStorage.setItem('lastday', getGameVarible().dayCount)
        }
        

        //返回卡牌区域信息
        this.getCardRegionInfo=function(){
            return CardRegionInfoList.GetInfoList() ;
        }
        
        //返回数据区域信息
        this.getDataRegionInfo=function(){
            return getGameVarible().getMainData() ;
        }

        //返回用户信息
        this.getUserInfo=function(){
            return UserInfoList.GetInfoList() ;
        }

        /*this.printTempGameInfomation = function( tempGameInfo,select ){
            console.log("-----------------Temp::" + select + "::-----------------")
                for( let prop in tempGameInfo )
                {
                    console.log( prop + " : " +  tempGameInfo[prop] );
                }
                console.log("---------------------------------")
        }*/
    }

}
    