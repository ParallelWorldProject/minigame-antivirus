
var GameManager = {

    // 微信登录
    wxlogin() {
        cc.log('模拟登录')
        HttpHelper.httpPost('/test','', (data) =>  {
           cc.log('data',data)
           localStorage.setItem("oppenId","123456")
        })
        
        if (cc.sys.platform === cc.sys.WECHAT_GAME){
            wx.login({
                success(res) {
                    if (res.code) {
                        // wx.request({
                        //     url: 'https://test.com/onLogin',
                        //     data: {
                        //         code: res.code
                        //     }
                        // })
                        console.log('登录成功！' + res.code)
                    } else {
                        console.log('登录失败！' + res.errMsg)
                    }
                }
            })
        }
    },
 
    //进入游戏场景
    startGame() {
        cc.director.loadScene("gameScene");
    },
 
    //退出游戏 
    exitGame:function(){
        // cc.game.end();
    },
 
}

//导出类
module.exports = GameManager