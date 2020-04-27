module.exports =
{
     Infomation : function( infos ){

            var InfoList = { };
            for( var d in infos )  //构造函数
            {
                InfoList[d] = infos[d];//动态建立主要信息表 
                console.log(d+":"+InfoList[d]);
            }


            this.GetInfoList = function(){ //获得信息   
                return InfoList;
            }

            this.SetInfoList = function( infos ){
                for( var d in InfoList ){
                    if( infos[d] != null ){
                        InfoList[d] = infos[d];
                    }
                    else{
                        console.log("不存在主要的变量：",d);
                    }
                }
            }

     }
}