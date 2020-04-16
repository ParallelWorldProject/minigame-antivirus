"use strict";
cc._RF.push(module, '740f6wUO/5Hh7tanOOaTl/5', 'js_dataRegion');
// JS/js_dataRegion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    labelBudget: {
      "default": null,
      type: cc.Label
    },
    labelResource: {
      "default": null,
      type: cc.Label
    },
    labelHealth: {
      "default": null,
      type: cc.Label
    },
    labelPopularity: {
      "default": null,
      type: cc.Label
    }
  },
  updateInfo: function updateInfo(infomation) {
    this.infomation = infomation;
    this.show();
  },
  show: function show() {
    this.labelBudget.string = this.infomation.budget + '%';
    this.labelResource.string = this.infomation.resource + '%';
    this.labelHealth.string = this.infomation.health + '%';
    this.labelPopularity.string = this.infomation.popularity + '%';
  }
});

cc._RF.pop();