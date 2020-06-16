
import {getGameVaribleObject,getGameVaribleAllNumber} from './Variable'

import {setCardCommonData,getCardCommonData,
        setCardUserData,getCardUserData,
        setCardChangedVarData,getCardChangedVarData,
        analyzeCard} from './Card'


module.exports =
{ 
    gameInformationList : function (){
    

        //这里不知道卡牌的细节，只是提供分解机制，
        //也就是说，请求新卡牌时带来的信息将立马被分解
        //若卡牌中不存在需要信息，需要报错，(其实这就需要知道卡牌里面的细节了。。。。)
        this.SolveCapturedCardInfo=function( Cardinfo ){

            //将选项AB中Val分开用于做计算，
            setCardChangedVarData( {
                A : Cardinfo.option.A.valChanged,
                B : Cardinfo.option.B.valChanged,
                durtion : Cardinfo.durtion,
            } )
           
            setCardUserData( {handcardid  :  Cardinfo.id} )
            
            setCardCommonData(
                {
                    from:Cardinfo.from,
                    name:Cardinfo.name,
                    picUrl:Cardinfo.picUrl,
                    information:Cardinfo.information,
                    descA:Cardinfo.option.A.desc,
                    descB:Cardinfo.option.B.desc, 
                    day:getGameVaribleObject().dayCount,//这个日期。。以后再修改吧
                }
            )

            //analyzeCard(Cardinfo);

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
         
            let cardChangedVal = getCardChangedVarData()[select.toString()];  //提出表格修改
            
            //获取更新卡牌中的值
            getGameVaribleObject().captureCardChangedVal(cardChangedVal)
            //计算更新其他值
            getGameVaribleObject().calculateGameVar(getCardChangedVarData().durtion)
            //this.solveMainDataPreview( ChangeAbleVar,select );
        }

        //更新
        this.updataImportantInfo = function(select)
        {
           
            setCardUserData( {
                storyid  :  cc.sys.localStorage.getItem('storyid'),
                //handid再前面获取了
                curcardoption: select=='A'?1:2,   // 1或2
                mainpara: JSON.stringify(getGameVaribleObject().getMainData() ),        // 明变量json串
                assistpara: JSON.stringify(getGameVaribleObject().getAssistParameter()),     // 暗变量json串
                day: getGameVaribleObject().dayCount +1 ,
                
            } )
            cc.sys.localStorage.setItem('lastday', getGameVaribleObject().dayCount)


            //下面是各objec信息显示，可用于网页人工测试
            /*
            this.printObjectInfomation( getCardCommonData(),"getCardCommonData")
            this.printObjectInfomation( getCardChangedVarData(),"getCardChangedVarData")
            this.printObjectInfomation( getCardUserData(),"getCardUserData")
            this.printObjectInfomation( getGameVaribleAllNumber(),"getGameVaribleAllNumber")
            */
           
        }
        

        //返回卡牌区域信息
        this.getCardRegionInfo=function(){
            return getCardCommonData() ;
        }
        
        //返回数据区域信息
        this.getDataRegionInfo=function(){
            return getGameVaribleObject().getMainData() ;
        }

        //返回用户信息
        this.getUserInfo=function(){
            return getCardUserData() ;
        }

        this.printObjectInfomation = function( _objetct, note ){
            
            console.log("---------" + note + "---------")
            for( let prop in _objetct )
            {
                console.log( prop + " : " +  _objetct[prop] );
            }
            console.log("---------" + note + "---------")
        }
    }

}
    