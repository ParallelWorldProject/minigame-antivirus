"use strict";
cc._RF.push(module, 'bcec9tQbDRBXLrR9f7DsuQT', 'js_dataList');
// JS/dataRegion/js_dataList.js

"use strict";

var dataItem = cc.Class({
  name: 'dataItem',
  properties: {
    itemName: '',
    itemValue: 0
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    dataItems: {
      "default": [],
      type: dataItem
    },
    dataItemPerfab: cc.Prefab
  },
  init: function init() {
    for (var i = 0; i < this.dataItems.length; i++) {
      var item = cc.instantiate(this.dataItemPerfab);
      this.node.addChild(item); //创建新节点

      var data = this.dataItems[i];
      item.getComponent('js_dataTemplate').init({
        itemName: data.itemName,
        itemValue: data.itemValue
      });
    }
  },
  updateValue: function updateValue(info) {
    console.log("i am updateValue in js_datalist" + info);

    for (var i = 0; i <= info.length; i++) {
      var item = this.node.children[i];
      item.getComponent('js_dataTemplate').updateValue(info[i - 1]); //奇怪了
    }
  }
});

cc._RF.pop();