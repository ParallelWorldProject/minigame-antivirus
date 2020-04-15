
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/dataRegion/js_dataItemList.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFJdGVtTGlzdC5qcyJdLCJuYW1lcyI6WyJkYXRhSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsIml0ZW1OYW1lIiwiaXRlbVZhbHVlIiwiQ29tcG9uZW50IiwiZGF0YUl0ZW1zIiwidHlwZSIsImRhdGFJdGVtUGVyZmFiIiwiUHJlZmFiIiwib25Mb2FkIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsImRhdGEiLCJnZXRDb21wb25lbnQiLCJpbml0IiwidXBkYXRlVmFsdWUiLCJpbmZvIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNwQkMsRUFBQUEsSUFBSSxFQUFHLFVBRGE7QUFFcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUUsRUFERjtBQUVSQyxJQUFBQSxTQUFTLEVBQUU7QUFGSDtBQUZRLENBQVQsQ0FBZjtBQVFBTCxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ00sU0FEUDtBQUdMSCxFQUFBQSxVQUFVLEVBQUU7QUFDUkksSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVMsRUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVUO0FBRkEsS0FERjtBQUtSVSxJQUFBQSxjQUFjLEVBQUdULEVBQUUsQ0FBQ1U7QUFMWixHQUhQO0FBV0xDLEVBQUFBLE1BQU0sRUFBQyxrQkFBVTtBQUNiLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLEtBQUtMLFNBQUwsQ0FBZU0sTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFDQTtBQUNJLFVBQUlFLElBQUksR0FBR2QsRUFBRSxDQUFDZSxXQUFILENBQWUsS0FBS04sY0FBcEIsQ0FBWDtBQUNBLFdBQUtPLElBQUwsQ0FBVUMsUUFBVixDQUFtQkgsSUFBbkIsRUFGSixDQUUrQjs7QUFFM0IsVUFBSUksSUFBSSxHQUFHLEtBQUtYLFNBQUwsQ0FBZUssQ0FBZixDQUFYO0FBQ0FFLE1BQUFBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixxQkFBbEIsRUFBeUNDLElBQXpDLENBQ0k7QUFDSWhCLFFBQUFBLFFBQVEsRUFBR2MsSUFBSSxDQUFDZCxRQURwQjtBQUVJQyxRQUFBQSxTQUFTLEVBQUdhLElBQUksQ0FBQ2I7QUFGckIsT0FESjtBQU1IO0FBQ0osR0F6Qkk7QUEyQkxnQixFQUFBQSxXQUFXLEVBQUMscUJBQVVDLElBQVYsRUFBZ0I7QUFDeEIsU0FBSyxJQUFJVixDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLElBQUVVLElBQUksQ0FBQ1QsTUFBdEIsRUFBOEJELENBQUMsRUFBL0IsRUFDQTtBQUNJLFVBQUlFLElBQUksR0FBRyxLQUFLRSxJQUFMLENBQVVPLFFBQVYsQ0FBbUJYLENBQW5CLENBQVg7QUFDQUUsTUFBQUEsSUFBSSxDQUFDSyxZQUFMLENBQWtCLHFCQUFsQixFQUF5Q0UsV0FBekMsQ0FBcURDLElBQUksQ0FBQ1YsQ0FBQyxHQUFDLENBQUgsQ0FBekQsRUFGSixDQUVxRTtBQUNwRTtBQUNKO0FBakNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgZGF0YUl0ZW0gPSBjYy5DbGFzcyh7XHJcbiAgICBuYW1lIDogJ2RhdGFJdGVtJyxcclxuICAgIHByb3BlcnRpZXMgOntcclxuICAgICAgICBpdGVtTmFtZTogJycsXHJcbiAgICAgICAgaXRlbVZhbHVlOiAwLFxyXG4gICAgfVxyXG59KVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBkYXRhSXRlbXM6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogZGF0YUl0ZW1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFJdGVtUGVyZmFiIDogY2MuUHJlZmFiXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvciggdmFyIGk9MDsgaTx0aGlzLmRhdGFJdGVtcy5sZW5ndGg7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGF0YUl0ZW1QZXJmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaXRlbSk7ICAvL+WIm+W7uuaWsOiKgueCuVxyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFJdGVtc1tpXTtcclxuICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ2pzX2RhdGFJdGVtVGVtcGxhdGUnKS5pbml0KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lIDogZGF0YS5pdGVtTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWUgOiBkYXRhLml0ZW1WYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlVmFsdWU6ZnVuY3Rpb24oIGluZm8gKXtcclxuICAgICAgICBmb3IoIGxldCBpPTA7IGk8PWluZm8ubGVuZ3RoIDtpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdqc19kYXRhSXRlbVRlbXBsYXRlJykudXBkYXRlVmFsdWUoaW5mb1tpLTFdKTsgLy/lpYfmgKrkuoZcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICBcclxufSk7XHJcbiJdfQ==