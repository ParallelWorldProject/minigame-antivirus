"use strict";
cc._RF.push(module, 'a07cfsekWlKD74jG5MyaKwo', 'js_cardRegion');
// JS/js_cardRegion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    infomationBox: {
      "default": null,
      type: cc.Node
    },
    imageBox: {
      "default": null,
      type: cc.Node
    },
    selectBox: {
      "default": null,
      type: cc.Node
    }
  },
  onload: function onload() {},
  updateInfo: function updateInfo(infomation) {
    this.infomation = infomation;
    this.show();
  },
  show: function show() {
    //更新数据的一种野蛮方式
    //For infomation box 
    this.from = this.infomationBox.getChildByName("from").getComponent(cc.Label);
    this.name = this.infomationBox.getChildByName("name").getComponent(cc.Label);
    this.date = this.infomationBox.getChildByName("date").getComponent(cc.Label);
    this.information = this.infomationBox.getChildByName("information").getComponent(cc.Label);
    this.from.string = this.infomation.from;
    this.name.string = this.infomation.name;
    this.date.string = this.infomation.date;
    this.information.string = this.infomation.information;
  }
});

cc._RF.pop();