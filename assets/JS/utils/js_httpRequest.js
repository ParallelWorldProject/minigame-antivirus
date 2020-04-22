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
        // if(oppenId)  xhr.setRequestHeader('openid', oppenId);
    
        xhr.timeout = 8000;
        xhr.send(params);
    },
 
    
});
 
window.HttpHelper = new HttpHelper();