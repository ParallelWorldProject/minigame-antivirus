"use strict";
cc._RF.push(module, '1200ff5xNZB8an6xR8Z9p1I', 'js_dataTemplate');
// JS/dataRegion/js_dataTemplate.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    itemName: cc.Label,
    itemValue: cc.Label
  },
  init: function init(data) {
    this.itemName.string = data.itemName;
    this.itemValue.string = data.itemValue + "%"; //set font 
  },
  updateValue: function updateValue(value) {
    this.itemValue.string = value + '%';
  }
});

cc._RF.pop();