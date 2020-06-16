
import {getGameVaribleObject,getGameVaribleAllNumber} from './Variable'

import {setCardCommonData,getCardCommonData,
        setCardUserData,getCardUserData,
        setCardChangedVarData,getCardChangedVarData,
        setCardObject,getCardObject} from './Card'


module.exports =
{ 
    gameInformationList : function (){
    

        //这里不知道卡牌的细节，只是提供分解机制，
        //也就是说，请求新卡牌时带来的信息将立马被分解
        //若卡牌中不存在需要信息，需要报错，(其实这就需要知道卡牌里面的细节了。。。。)
        this.SolveCapturedCardInfo=function( Cardinfo ){


            setCardObject( Cardinfo );
            /*
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
            )*/

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
         
            //let cardChangedVal = ;  //提出表格修改
            
            //获取更新卡牌中的值
            getGameVaribleObject().captureCardChangedVal
            (getCardObject().optionVarChanged(select))
            //计算更新其他值
            getGameVaribleObject().calculateGameVar
            (getCardObject().getDurtion())

            //this.solveMainDataPreview( ChangeAbleVar,select );
        }

        //更新
        this.updataImportantInfo = function(select)
        {
           
            getCardObject().setUserData(select); //这里自动更新
            cc.sys.localStorage.setItem('lastday', getGameVaribleObject().dayCount)


            //下面是各objec信息显示，可用于网页人工测试
            
            /*this.printObjectInfomation( getCardObject().PageDisplayData,"getCardObject().PageDisplayData")
            this.printObjectInfomation( getCardObject().getUserData(),"getCardObject().getUserData()")
            
            this.printObjectInfomation( getGameVaribleAllNumber(),"getGameVaribleAllNumber")
            */
           
        }
        

        //返回卡牌区域信息
        this.getCardRegionInfo=function(){
            return getCardObject().PageDisplayData ;
        }
        
        //返回数据区域信息
        this.getDataRegionInfo=function(){
            return getGameVaribleObject().getMainData() ;
        }

        //返回用户信息
        this.getUserInfo=function(){
            return getCardObject().getUserData() ;
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
    