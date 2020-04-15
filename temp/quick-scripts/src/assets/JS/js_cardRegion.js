"use strict";
cc._RF.push(module, 'a07cfsekWlKD74jG5MyaKwo', 'js_cardRegion');
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
  init: function init(home) {
    this.home = home; //for infomation box

    /*this.infomationBox.ch
     this.labelBudget.string = msg.budget + '%';
    this.labelResource.string = msg.resource + '%';
    this.labelHealth.string = msg.health + '%';
    this.labelPopularity.string = msg.popularity + '%';
    console.log(this.labelBudget.string);*/
  },
  acceptCheck: function acceptCheck() {
    this.msg = this.home.dataInfo;
    this.msg.budget += 1;
    this.msg.resource += 1;
    this.msg.health += 1;
    this.msg.popularity += 1;
    this.home.updateInfo(this.msg);
  }
});

cc._RF.pop();