const JSData = require("./js_SubInfoList")

var PreviewData = new JSData.InfomationList({
    calculatedA : 0,  //1表示已经计算过了，0表示需要计算
    calculatedB : 0,
    A : { health:0,budget:0,resource:0,approval:0 },
    B : { health:0,budget:0,resource:0,approval:0 },
    clear : { health:0,budget:0,resource:0,approval:0 }
})


PreviewData.SetInfoList({
    calculatedA:0,
    calculatedB:0
})

getDataPreView=function( select )  
{

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



getCalculatedVarInfo = function (ValChangedInfoList,select) {


    //this.getDataPreView(select);

    this.calculateBySelect( select )
       

    return  ValChangedInfoList.GetInfoList()[select.toString()];
}