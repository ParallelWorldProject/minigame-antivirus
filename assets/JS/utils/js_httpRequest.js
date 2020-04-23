// XHR.readyState == 状态（0，1，2，3，4）
// 0：请求未初始化，还没有调用 open()。
// 1：请求已经建立，但是还没有发送，还没有调用 send()。
// 2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
// 3：请求在处理中；通常响应中已有部分数据可用了，没有全部完成。
// 4：响应已完成；您可以获取并使用服务器的响应了。


// 封装http请求
const HttpHelper = cc.Class({
    extends: cc.Component,
 
    statics: {},
 
    properties: {},

    ctor() {
        this.baseUrl = 'http://www.llspace.com.cn/mg'
    },

 
    /**
     * post请求
     * @param {string} url 
     * @param {object} params 
     * @param {function} callback 
     */
    httpPost(url, params, callback) {
        let oppenId = localStorage.getItem('oppenId')

        let xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                let respone = xhr.responseText;
                callback(JSON.parse(respone));
            } else {
                // callback(-1);
                // cc.log('网络请求错误')
            }
        };
        let posturl = this.baseUrl + url
        xhr.open('POST', posturl, true);
        
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // xhr.setRequestHeader('oppenId', '666666');
        xhr.setRequestHeader('userid', 3);

        xhr.timeout = 8000;

        // 解析对象传参
        let sendData = '';
        for (const key in params) {
            sendData += '&' + key + '=' + params[key];
        }
        sendData = sendData.slice(1);

        xhr.send(sendData);
    },
 
    
});
 
window.HttpHelper = new HttpHelper();