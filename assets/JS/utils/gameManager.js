
var GameManager = {
    

    // 微信登录
    wxlogin() {
        cc.log('模拟登录')
        
        if (cc.sys.platform === cc.sys.WECHAT_GAME){
            wx.login({
                success(res) {
                    if (res.code) {
                        HttpHelper.httpPost('/login',{code:res.code}, (data) =>  {
                            if(data.errorcode==0) {
                                console.log('logindata',data)
                                cc.sys.localStorage.setItem('token', data.content.token)
                                cc.sys.localStorage.setItem('userid', data.content.userid)
                           }
                           
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
            
            if(data.errorcode==0) {
                cc.sys.localStorage.setItem('storyid',data.content.storyid)
                cc.sys.localStorage.setItem('firstday', data.content.firstday.split("-").reverse().join('/'))
            }
        })
    },
    // 游戏结束
    gameover() {
        let params = {
            storyid: cc.sys.localStorage.getItem('storyid'),
            day: cc.sys.localStorage.getItem('lastday') || 1 //hard code，后面要修改
        }
        HttpHelper.httpPost('/closegame',params, (data) =>  {
            console.log('closegame',data)
            
            if(data.errorcode==0) localStorage.clear()
        })
    }
 
}

//导出类
module.exports = GameManager