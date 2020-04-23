
var GameManager = {

    // 微信登录
    wxlogin() {
        cc.log('模拟登录')
        
        
        if (cc.sys.platform === cc.sys.WECHAT_GAME){
            wx.login({
                success(res) {
                    if (res.code) {
                        // wx.request({
                        //     url: 'http://www.llspace.com.cn/mg/login',
                        //     data: {
                        //         code: res.code
                        //     }
                        // })
                        HttpHelper.httpPost('/login',{code:res.code}, (data) =>  {
                           console.log('logindata',data)
                           localStorage.setItem("token",data.token)
                        })
                        console.log('登录成功！' + res.code)
                    } else {
                        console.log('登录失败！' + res.errMsg)
                    }
                }
            })
        }
    },
 
    //进入游戏场景
    startGame(scence) {
        cc.director.loadScene(scence);
    },
 
    //退出游戏 
    exitGame:function(){
        // cc.game.end();
        // 清空缓存
    },

    // 游戏初始化
    initgame() {
        HttpHelper.httpPost('/initgame',{}, (data) =>  {
            console.log('initgame',data)
            
            if(data.errorcode==0) localStorage.setItem('storyid',data.content.storyid)
        })
    },
    // 游戏结束
    gameover() {
        let params = {
            storyid:localStorage.getItem('storyid'),
            day: 1 //hard code，后面要修改
        }
        HttpHelper.httpPost('/closegame',params, (data) =>  {
            console.log('closegame',data)
            
            if(data.errorcode==0) localStorage.clear()
        })
    }
 
}

//导出类
module.exports = GameManager