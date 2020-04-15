"use strict";
cc._RF.push(module, 'bcec9tQbDRBXLrR9f7DsuQT', 'js_dataItemList');
// JS/js_dataItemList.js

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
  onLoad: function onLoad() {
    for (var i = 0; i < this.dataItems.length; i++) {
      var item = cc.instantiate(this.dataItemPerfab);
      this.node.addChild(item); //创建新节点

      var data = this.dataItems[i];
      item.getComponent('js_dataItemTemplate').init({
        itemName: data.itemName,
        itemValue: data.itemValue
      });
    }
  },
  updateValue: function updateValue(info) {
    for (var i = 0; i <= info.length; i++) {
      var item = this.node.children[i];
      item.getComponent('js_dataItemTemplate').updateValue(info[i - 1]); //奇怪了
    }
  }
});

cc._RF.pop();