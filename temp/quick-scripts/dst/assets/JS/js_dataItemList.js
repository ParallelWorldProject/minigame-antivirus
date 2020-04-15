
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/js_dataItemList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
      var data = this.dataItems[i];
      this.node.addChild(item);
      item.getComponent('js_dataItemTemplate').init({
        itemName: data.itemName,
        itemValue: data.itemValue
      });
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFJdGVtTGlzdC5qcyJdLCJuYW1lcyI6WyJkYXRhSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsIml0ZW1OYW1lIiwiaXRlbVZhbHVlIiwiQ29tcG9uZW50IiwiZGF0YUl0ZW1zIiwidHlwZSIsImRhdGFJdGVtUGVyZmFiIiwiUHJlZmFiIiwib25Mb2FkIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsImRhdGEiLCJub2RlIiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFFBQVEsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDcEJDLEVBQUFBLElBQUksRUFBRyxVQURhO0FBRXBCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFLEVBREY7QUFFUkMsSUFBQUEsU0FBUyxFQUFFO0FBRkg7QUFGUSxDQUFULENBQWY7QUFRQUwsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNNLFNBRFA7QUFHTEgsRUFBQUEsVUFBVSxFQUFFO0FBQ1JJLElBQUFBLFNBQVMsRUFBQztBQUNOLGlCQUFTLEVBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFVDtBQUZBLEtBREY7QUFLUlUsSUFBQUEsY0FBYyxFQUFHVCxFQUFFLENBQUNVO0FBTFosR0FIUDtBQVdMQyxFQUFBQSxNQUFNLEVBQUMsa0JBQVU7QUFDYixTQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQyxLQUFLTCxTQUFMLENBQWVNLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQ0E7QUFDSSxVQUFJRSxJQUFJLEdBQUdkLEVBQUUsQ0FBQ2UsV0FBSCxDQUFlLEtBQUtOLGNBQXBCLENBQVg7QUFDQSxVQUFJTyxJQUFJLEdBQUcsS0FBS1QsU0FBTCxDQUFlSyxDQUFmLENBQVg7QUFDQSxXQUFLSyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJKLElBQW5CO0FBQ0FBLE1BQUFBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixxQkFBbEIsRUFBeUNDLElBQXpDLENBQ0k7QUFDSWhCLFFBQUFBLFFBQVEsRUFBR1ksSUFBSSxDQUFDWixRQURwQjtBQUVJQyxRQUFBQSxTQUFTLEVBQUdXLElBQUksQ0FBQ1g7QUFGckIsT0FESjtBQU1IO0FBQ0o7QUF4QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBkYXRhSXRlbSA9IGNjLkNsYXNzKHtcclxuICAgIG5hbWUgOiAnZGF0YUl0ZW0nLFxyXG4gICAgcHJvcGVydGllcyA6e1xyXG4gICAgICAgIGl0ZW1OYW1lOiAnJyxcclxuICAgICAgICBpdGVtVmFsdWU6IDAsXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGRhdGFJdGVtczp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBkYXRhSXRlbVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YUl0ZW1QZXJmYWIgOiBjYy5QcmVmYWJcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZm9yKCB2YXIgaT0wOyBpPHRoaXMuZGF0YUl0ZW1zLmxlbmd0aDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5kYXRhSXRlbVBlcmZhYik7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhSXRlbXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ2pzX2RhdGFJdGVtVGVtcGxhdGUnKS5pbml0KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lIDogZGF0YS5pdGVtTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWUgOiBkYXRhLml0ZW1WYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgXHJcbn0pO1xyXG4iXX0=