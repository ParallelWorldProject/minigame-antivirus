"use strict";
cc._RF.push(module, '43bc6jkv1tGZpPQAlnmvSJ2', 'js_cardTemplate');
// JS/cardRegion/js_cardTemplate.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    information: cc.Node,
    image: cc.Node,
    select: cc.Node
  },
  init: function init(info) {
    //现在只会这么写
    //修改information区
    this.from = this.information.getChildByName("from").getComponent(cc.Label);
    this.name = this.information.getChildByName("name").getComponent(cc.Label);
    this.date = this.information.getChildByName("date").getComponent(cc.Label);
    this.information = this.information.getChildByName("information").getComponent(cc.Label);
    this.from.string = info.from;
    this.name.string = info.name;
    this.date.string = info.date;
    this.information.string = info.information; //修改img区域
    //this.image.getComponent(cc.Sprite).spriteFrame = picUrl;
    //修改Select区域
    //this.select.getChildByName("acceptButton").getComponent(cc.Label).stirng = "Accept";
    //this.select.getChildByName("declineButton").getComponent(cc.Label).stirng = "Decline";
  },
  moveOff: function moveOff() {
    this.node.active = false;
  },
  moveUp: function moveUp() {
    this.node.active = true;
  }
});

cc._RF.pop();