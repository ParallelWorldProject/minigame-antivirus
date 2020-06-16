//import {getGameVaribleObject} from './Variable'

class Card{
    constructor() {

    }

    setData(data)
    {
        this.information= data.information;
        this.id = data.id;
        this.from= data.from ;
        this.name= data.name;
        //this.date= data.durtion;
        this.durtion = data.durtion;
        this.picUrl = data.picUrl;

        this.option = data.option
    }

    getPageDisplayData(_gameVarible)
    {
        return {
            'from':this.from,
            'name':this.name,
            'day':_gameVarible.dayCount, //?
            'picUrl':this.picUrl,
            'information':this.information,
            'descA':this.option.A.desc,
            'descB':this.option.B.desc,
        }
    }
 

    setUserData( _gameVarible,select )  //可否移出？
    {
        this.UserData = {
            'handcardid': this.id,      // 当前卡id
            'storyid' : cc.sys.localStorage.getItem('storyid'),
            'curcardoption': select=='A'?1:2,   // 1或2
            'mainpara':JSON.stringify(_gameVarible.getMainData() ),        // 明变量json串
            'assistpara': JSON.stringify(_gameVarible.getAssistParameter()),     // 暗变量json串
            'day': _gameVarible.dayCount + 1
        };
    }

    getUserData()
    {
        return this.UserData;
    }

    optionVarChanged( select )
    {
        return this.option[select.toString()].valChanged;
    }

    getDurtion()
    {
        return parseInt(this.durtion)
    }


}
module.exports = 
{
    Card 
}