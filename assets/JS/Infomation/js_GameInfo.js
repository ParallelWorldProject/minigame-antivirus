import {getGameVaribleObject,getGameVaribleAllNumber} from './Variable'
import {setCardObject,getCardObject} from './Card'


module.exports =
{ 
    gameInformationList : function (){
    
        this.SolveCapturedCardInfo=function( Cardinfo ){
            setCardObject( Cardinfo );
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
            //获取更新卡牌中的值
            getGameVaribleObject().captureCardChangedVal
            (getCardObject().optionVarChanged(select))
            //计算更新其他值
            getGameVaribleObject().calculateGameVar
            (getCardObject().getDurtion())
        }

        //更新
        this.updataImportantInfo = function(select)
        {
            getCardObject().setUserData(select); //这里自动更新
            cc.sys.localStorage.setItem('lastday', getGameVaribleObject().dayCount)
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
    