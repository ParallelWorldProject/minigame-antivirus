import {getGameVaribleObject} from './Variable'

class Card{
    constructor(data) {
        
        this.information= data.message;
        this.id = data.cardid;
        this.from= data.from ;
        this.name= data.name;
        this.date= data.durtion;
        this.durtion = data.durtion;
        this.picUrl=data.imgurl;

        this.option = {
            A: {
                desc: data.optionOneDesc,
                valChanged: data.optionOneValueChange ? JSON.parse(data.optionOneValueChange) : data.optionOneValueChange ,
                // weigthChanged: data.optionOneWeightChange ? JSON.parse(data.optionOneWeightChange) : data.optionOneWeightChange,
            },
            B: {
                desc: data.optionTwoDesc,
                valChanged: data.optionTwoValueChange ? JSON.parse(data.optionTwoValueChange): data.optionTwoValueChange,
                // weigthChanged: data.optionTwoWeightChange ? JSON.parse(data.optionTwoWeightChange) : data.optionTwoWeightChange,
            }
        }
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

    get UserData()
    {
        return {
            'handcardid': this.id,      // 当前卡id
            'storyid' : cc.sys.localStorage.getItem('storyid'),
            'curcardoption': select=='A'?1:2,   // 1或2
            'mainpara':JSON.stringify(getGameVaribleObject().getMainData() ),        // 明变量json串
            'assistpara': JSON.stringify(getGameVaribleObject().getAssistParameter()),     // 暗变量json串
            'day': getGameVariebleObject().dayCount + 1
        }
    }

    get changedVaribleData()
    {
        return {
        'A' : this.option.A.valChanged,
        'B' : this.option.B.valChanged,
        'durtion' : this.durtion,
        }
    }
}




export function setAndAnalyzeCardObject( data )
{
    _card = new Card(data);
    analyzeCard( _card );
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



