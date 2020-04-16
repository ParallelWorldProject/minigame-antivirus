"use strict";
cc._RF.push(module, '15158r3AxtAf63pITgiOQVy', 'js_checkButton');
// JS/cardRegion/js_checkButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  acceptCheck: function acceptCheck() {
    //发射事件
    console.log("button pressed");
    this.node.dispatchEvent(new cc.Event.EventCustom('SelectA', 1));
  },
  declineCheck: function declineCheck() {
    this.node.dispatchEvent(new cc.Event.EventCustom('SelectB', 1));
  }
});

cc._RF.pop();