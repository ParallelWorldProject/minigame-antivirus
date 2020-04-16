
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/dataRegion/js_dataList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGRhdGFSZWdpb25cXGpzX2RhdGFMaXN0LmpzIl0sIm5hbWVzIjpbImRhdGFJdGVtIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiaXRlbU5hbWUiLCJpdGVtVmFsdWUiLCJDb21wb25lbnQiLCJkYXRhSXRlbXMiLCJ0eXBlIiwiZGF0YUl0ZW1QZXJmYWIiLCJQcmVmYWIiLCJpbml0IiwiaSIsImxlbmd0aCIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsImRhdGEiLCJnZXRDb21wb25lbnQiLCJ1cGRhdGVWYWx1ZSIsImluZm8iLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNwQkMsRUFBQUEsSUFBSSxFQUFHLFVBRGE7QUFFcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUUsRUFERjtBQUVSQyxJQUFBQSxTQUFTLEVBQUU7QUFGSDtBQUZRLENBQVQsQ0FBZjtBQVFBTCxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ00sU0FEUDtBQUdMSCxFQUFBQSxVQUFVLEVBQUU7QUFDUkksSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVMsRUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVUO0FBRkEsS0FERjtBQUtSVSxJQUFBQSxjQUFjLEVBQUdULEVBQUUsQ0FBQ1U7QUFMWixHQUhQO0FBV0xDLEVBQUFBLElBQUksRUFBQyxnQkFBVTtBQUNYLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLEtBQUtMLFNBQUwsQ0FBZU0sTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFDQTtBQUNJLFVBQUlFLElBQUksR0FBR2QsRUFBRSxDQUFDZSxXQUFILENBQWUsS0FBS04sY0FBcEIsQ0FBWDtBQUNBLFdBQUtPLElBQUwsQ0FBVUMsUUFBVixDQUFtQkgsSUFBbkIsRUFGSixDQUUrQjs7QUFFM0IsVUFBSUksSUFBSSxHQUFHLEtBQUtYLFNBQUwsQ0FBZUssQ0FBZixDQUFYO0FBQ0FFLE1BQUFBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixpQkFBbEIsRUFBcUNSLElBQXJDLENBQ0k7QUFDSVAsUUFBQUEsUUFBUSxFQUFHYyxJQUFJLENBQUNkLFFBRHBCO0FBRUlDLFFBQUFBLFNBQVMsRUFBR2EsSUFBSSxDQUFDYjtBQUZyQixPQURKO0FBTUg7QUFDSixHQXpCSTtBQTJCTGUsRUFBQUEsV0FBVyxFQUFDLHFCQUFVQyxJQUFWLEVBQWdCO0FBQ3hCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FBb0NGLElBQWhEOztBQUNBLFNBQUssSUFBSVQsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxJQUFFUyxJQUFJLENBQUNSLE1BQXRCLEVBQThCRCxDQUFDLEVBQS9CLEVBQ0E7QUFDSSxVQUFJRSxJQUFJLEdBQUcsS0FBS0UsSUFBTCxDQUFVUSxRQUFWLENBQW1CWixDQUFuQixDQUFYO0FBQ0FFLE1BQUFBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixpQkFBbEIsRUFBcUNDLFdBQXJDLENBQWlEQyxJQUFJLENBQUNULENBQUMsR0FBQyxDQUFILENBQXJELEVBRkosQ0FFaUU7QUFDaEU7QUFDSjtBQWxDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGRhdGFJdGVtID0gY2MuQ2xhc3Moe1xyXG4gICAgbmFtZSA6ICdkYXRhSXRlbScsXHJcbiAgICBwcm9wZXJ0aWVzIDp7XHJcbiAgICAgICAgaXRlbU5hbWU6ICcnLFxyXG4gICAgICAgIGl0ZW1WYWx1ZTogMCxcclxuICAgIH1cclxufSlcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZGF0YUl0ZW1zOntcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFJdGVtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhSXRlbVBlcmZhYiA6IGNjLlByZWZhYlxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZm9yKCB2YXIgaT0wOyBpPHRoaXMuZGF0YUl0ZW1zLmxlbmd0aDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5kYXRhSXRlbVBlcmZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpdGVtKTsgIC8v5Yib5bu65paw6IqC54K5XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YUl0ZW1zW2ldO1xyXG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudCgnanNfZGF0YVRlbXBsYXRlJykuaW5pdChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZSA6IGRhdGEuaXRlbU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVZhbHVlIDogZGF0YS5pdGVtVmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVZhbHVlOmZ1bmN0aW9uKCBpbmZvICl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpIGFtIHVwZGF0ZVZhbHVlIGluIGpzX2RhdGFsaXN0XCIgKyBpbmZvKTtcclxuICAgICAgICBmb3IoIGxldCBpPTA7IGk8PWluZm8ubGVuZ3RoIDtpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdqc19kYXRhVGVtcGxhdGUnKS51cGRhdGVWYWx1ZShpbmZvW2ktMV0pOyAvL+Wlh+aAquS6hlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgIFxyXG59KTtcclxuIl19