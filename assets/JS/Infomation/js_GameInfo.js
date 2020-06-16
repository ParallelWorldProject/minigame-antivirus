const GV = require("./Variable")
const Cd = require("./Card");


module.exports =
{ 
    gameInformationList : function (){
    
        var _gameVarible = new GV.GameVarible();
        var _card = new Cd.Card();
        
        this.SolveCapturedCardInfo=function( Cardinfo ){
            _card.setData( Cardinfo );
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
            //获取先获取卡牌中的值
           _gameVarible.captureCardChangedVal(_card.optionVarChanged(select))

            //计算变量中其他值
            _gameVarible.calculateGameVar(_card.getDurtion());
        }

        //更新
        this.updataImportantInfo = function(select)
        {
            _card.setUserData(_gameVarible,select); //这里自动更新
            cc.sys.localStorage.setItem('lastday', _gameVarible.dayCount)
        }
        
        //返回卡牌区域信息
        this.getCardRegionInfo=function(){
            return _card.getPageDisplayData(_gameVarible) ;
        }
        
        //返回数据区域信息
        this.getDataRegionInfo=function(){
            return _gameVarible.getMainData() ;
        }

        //返回用户信息
        this.getUserInfo=function(){
            return _card.getUserData() ;
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
    