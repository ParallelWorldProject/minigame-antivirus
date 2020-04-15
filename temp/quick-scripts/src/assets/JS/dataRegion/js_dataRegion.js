"use strict";
cc._RF.push(module, '5190dx3uzpKHKBytcN5XyY/', 'js_dataRegion');
// JS/js_dataRegion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  updateInfo: function updateInfo(infomation) {
    info = [infomation.budget, infomation.resource, infomation.health, infomation.popularity];
    this.node.getComponent('js_dataItemList').updateValue(info);
  }
});

cc._RF.pop();