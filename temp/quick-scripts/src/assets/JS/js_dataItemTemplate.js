"use strict";
cc._RF.push(module, '1200ff5xNZB8an6xR8Z9p1I', 'js_dataItemTemplate');
// JS/js_dataItemTemplate.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    itemName: cc.Label,
    itemValue: cc.Label
  },
  init: function init(data) {
    this.itemName.string = data.itemName;
    this.itemValue.string = data.itemValue;
  },
  updateValue: function updateValue(value) {
    this.itemName = value;
  }
});

cc._RF.pop();