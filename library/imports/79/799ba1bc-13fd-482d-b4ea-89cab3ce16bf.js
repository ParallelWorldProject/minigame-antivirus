"use strict";
cc._RF.push(module, '799baG8E/1ILbTqicqzzha/', 'js_httpRequest');
// JS/js_httpRequest.js

"use strict";

// 封装http请求
var HttpHelper = cc.Class({
  "extends": cc.Component,
  statics: {},
  properties: {},
  ctor: function ctor() {
    this.baseUrl = 'http://www.llspace.com.cn/mg';
  },

  /**
   * post请求
   * @param {string} url 
   * @param {object} params 
   * @param {function} callback 
   */
  httpPost: function httpPost(url, params, callback) {
    var xhr = cc.loader.getXMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        var respone = xhr.responseText;
        callback(JSON.parse(respone));
      } else {// callback(-1);
        // cc.log('网络请求错误')
      }
    };

    var posturl = this.baseUrl + url;
    xhr.open('POST', posturl, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.timeout = 8000;
    xhr.send(params);
  }
});
window.HttpHelper = new HttpHelper();

cc._RF.pop();