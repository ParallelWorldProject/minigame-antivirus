module.exports =
{
     InfomationList : function( infos ){
            var InfoList = { };
            for( var d in infos )  //构造函数
            {
                InfoList[d] = infos[d];//动态建立主要信息表 
            }


            this.GetInfoList = function(){ //获得信息   
                return InfoList;
            }

            this.SetInfoList = function( infos ){
                let len = 0 ;
                for( var d in InfoList ){
                    if( infos[d] != null ){
                        InfoList[d] = infos[d];
                       
                    }
                    /*else{
                        console.log("不存在主要的变量：",d);
                    }*/

                    if( len > infos.length ) break;
                    else len++;
                }
            }

            this.ShowInfoList = function(){
                for( var d in InfoList )
                {
                    console.log(d+":"+InfoList[d]);
                }
            }
     }


    
}