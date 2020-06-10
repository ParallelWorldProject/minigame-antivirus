
var changed = {
    changeOne:
    

     '{"感染率":[-0.1,0],"治愈":[0.2,0]}' ,
  

    /*changeTwo:
    {
        "资源生产力":[-0.2,0]
    },

    changeThree:
    {
        "支持率变化":[0.3,0]
    }*/
}

var Cards = 
{
    "card01":
    {
        cardid:1,
        imgUrl:"detective_portrait",
        cfrom: "USA",
        cname: "001",
        message:"this is first card",
        durtion:"1",
        optionOneDesc:"optionOneDesc1",
        optionOneValueChange: changed.changeOne
        ,
        optionTwoDesc:"optionTwoDesc1",
        optionTwoValueChange: "{}"
    },

    "card02":
    {
        cardid:2,
        imgUrl:"jounalist_portrait",
        cfrom: "CN",
        cname: "002",
        message:"this is second card",
        durtion:"1",
        optionOneDesc:"optionOneDesc2",
        optionOneValueChange:changed.changeOne,
        optionTwoDesc:"optionTwoDesc2",
        optionTwoValueChange:"{}"
    },

    "card03":
    {
        cardid:3,
        imgUrl:"secretary_portrait",
        cfrom: "JP",
        cname: "003",
        message:"this is 3rd card",
        durtion:"1",
        optionOneDesc:"optionOneDesc3",
        optionOneValueChange:changed.changeOne,
        optionTwoDesc:"optionTwoDesc3",
        optionTwoValueChange:"{}"
    }
}

module.exports = Cards;