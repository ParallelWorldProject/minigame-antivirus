import {getGameVaribleObject} from './Variable'

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

    get PageDisplayData()
    {
        return {
            'from':this.from,
            'name':this.name,
            'day':getGameVaribleObject().dayCount, //?
            'picUrl':this.picUrl,
            'information':this.information,
            'descA':this.option.A.desc,
            'descB':this.option.B.desc,
        }
    }
 

    setUserData( select )  //可否移出？
    {
        this.UserData = {
            'handcardid': this.id,      // 当前卡id
            'storyid' : cc.sys.localStorage.getItem('storyid'),
            'curcardoption': select=='A'?1:2,   // 1或2
            'mainpara':JSON.stringify(getGameVaribleObject().getMainData() ),        // 明变量json串
            'assistpara': JSON.stringify(getGameVaribleObject().getAssistParameter()),     // 暗变量json串
            'day': getGameVaribleObject().dayCount + 1
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
var _card = new Card();



export function setCardObject( data )
{
     _card.setData(data);
}

export function getCardObject()
{
    return _card;
}
/*
export function analyzeCard( Cardinfo )
{
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
}
*/





















/*
let cardCommonData =  { //这里对应的是CardRegion显示
    from:'',
    name:'',
    day:'',
    picUrl:'',
    information:'',
    descA:'',
    descB:'',
} 

let cardUserData = {  //这里用于储存每次向服务器提交的信息
    storyid : 0,
    handcardid: 0,      // 当前卡id
    curcardoption: 0,   // 1或2
    mainpara:'{}',        // 明变量json串
    assistpara: '{}',     // 暗变量json串
    day: 1
}

let cardChangedVarData =  {  //这里储存卡牌用于计算的信息
     A:{},
     B:{},
     durtion : 0, //....
}



export function setCardCommonData(data)
{
    cardCommonData=data ;
} 
export function getCardCommonData()
{
    return cardCommonData 
} 

export function setCardUserData(data)
{
    cardUserData=data;
} 
export function getCardUserData()
{
    return cardUserData;
} 

export function setCardChangedVarData(data)
{
    cardChangedVarData=data;
} 
export function getCardChangedVarData()
{
   return cardChangedVarData;
} 

*/

