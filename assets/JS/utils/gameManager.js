
var GameManager = {
    
    endingid: null,
    endingday: null,
    timecost: 0,

    // 微信登录
    wxlogin() {
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
        } else {
            var userid = Math.ceil(Math.random()*10)
            cc.sys.localStorage.setItem('userid', userid)
        }
    },
 
    //切换游戏场景
    changeGameScence(scence) {
        cc.director.loadScene(scence);
    },
    // 游戏初始化
    initgame() {
        HttpHelper.httpPost('/initgame',{}, (data) =>  {
            console.log('initgame',data)
            
            if(data.errorcode==0) {
                cc.sys.localStorage.setItem('storyid',data.content.storyid)

                let firstdayArr = data.content.firstday.split("-")
                var firstday = firstdayArr[1]+'/'+firstdayArr[2]+'/'+firstdayArr[0]
                cc.sys.localStorage.setItem('firstday', firstday)
            }
        })
    },
    // 游戏结束
    gameover(endBg) {
        // let endingid = Math.ceil(Math.random()*4)
        // day: cc.sys.localStorage.getItem('lastday') || 1,

        let params = {
            storyid: cc.sys.localStorage.getItem('storyid'),
            day: this.endingday,
            endingid: this.endingid
        }
        HttpHelper.httpPost('/closegame',params, (data) =>  {
            console.log('closegame',data)
            
            if(data.errorcode==0) {
                this.loadImg(endBg,data.content.imgurl)
                localStorage.clear() 
            }
        })
        
    },
    //退出游戏 
    exitGame:function(){
        // cc.game.end();
        // 清空缓存
    },
    //远程加载图片  
    loadImg(target,url){
        cc.loader.load(url, function (err, texture) {
            target.spriteFrame = new cc.SpriteFrame(texture);
        }.bind(this));
    },
    // 数据上报
    dataReport(data) {
        let paraments = {
            userid: cc.sys.localStorage.getItem('userid'),
            storyid: cc.sys.localStorage.getItem('storyid'),
            cardid: data.cardid,
            choice: data.choice,
            timecost: timecost
        }
        let params = {
            paraments: JSON.stringify(paraments),
            tracerid: 1
        }
        HttpHelper.httpPost('/tracer',params, (res) =>  {
            if(res.errorcode==0) {
                console.log('tracer',res)
            }
        })
    }
}

//导出类
module.exports = GameManager