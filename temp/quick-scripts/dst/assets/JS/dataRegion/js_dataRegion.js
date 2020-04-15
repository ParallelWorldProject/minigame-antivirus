
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/dataRegion/js_dataRegion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5190dx3uzpKHKBytcN5XyY/', 'js_dataRegion');
// JS/js_dataRegion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  updateInfo: function updateInfo(infomation) {
    info = [infomation.budget, infomation.resource, infomation.health, infomation.popularity];
    this.node.getComponent('js_dataItemList').updateValue(info);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ1cGRhdGVJbmZvIiwiaW5mb21hdGlvbiIsImluZm8iLCJidWRnZXQiLCJyZXNvdXJjZSIsImhlYWx0aCIsInBvcHVsYXJpdHkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwidXBkYXRlVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE1BQU0sRUFBQyxrQkFBVSxDQUVoQixDQVRJO0FBV0xDLEVBQUFBLFVBQVUsRUFBQyxvQkFBV0MsVUFBWCxFQUF1QjtBQUU5QkMsSUFBQUEsSUFBSSxHQUFHLENBQ0ZELFVBQVUsQ0FBQ0UsTUFEVCxFQUNrQkYsVUFBVSxDQUFDRyxRQUQ3QixFQUVGSCxVQUFVLENBQUNJLE1BRlQsRUFFa0JKLFVBQVUsQ0FBQ0ssVUFGN0IsQ0FBUDtBQUlBLFNBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QixpQkFBdkIsRUFBMENDLFdBQTFDLENBQXNEUCxJQUF0RDtBQUdIO0FBcEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDpmdW5jdGlvbigpe1xyXG4gICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlSW5mbzpmdW5jdGlvbiAoIGluZm9tYXRpb24gKXtcclxuICAgICAgICBcclxuICAgICAgICBpbmZvID0gWyBcclxuICAgICAgICAgICAgIGluZm9tYXRpb24uYnVkZ2V0ICwgaW5mb21hdGlvbi5yZXNvdXJjZSAsXHJcbiAgICAgICAgICAgICBpbmZvbWF0aW9uLmhlYWx0aCAsIGluZm9tYXRpb24ucG9wdWxhcml0eSBdO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KCdqc19kYXRhSXRlbUxpc3QnKS51cGRhdGVWYWx1ZShpbmZvKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG59KTtcclxuIl19