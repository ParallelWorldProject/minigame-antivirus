"use strict";
cc._RF.push(module, 'ec5a1ogGtlKGJssMFRP6ZH9', 'js_cardRegion');
// JS/js_cardRegion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    infomationBox: {
      "default": null,
      type: cc.node
    },
    imageBox: {
      "default": null,
      type: cc.node
    },
    selectBox: {
      "default": null,
      type: cc.node
    }
  },
  updateInfo: function updateInfo(infomation) {
    this.infomation = infomation;
  }
  /**/

});

cc._RF.pop();