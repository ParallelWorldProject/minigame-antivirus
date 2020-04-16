
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
// JS/dataRegion/js_dataRegion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  init: function init() {
    this.node.getComponent('js_dataList').init();
  },
  updateInfo: function updateInfo(infomation) {
    info = [infomation.budget, infomation.resource, infomation.health, infomation.popularity];
    this.node.getComponent('js_dataList').updateValue(info);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGRhdGFSZWdpb25cXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJpbml0Iiwibm9kZSIsImdldENvbXBvbmVudCIsInVwZGF0ZUluZm8iLCJpbmZvbWF0aW9uIiwiaW5mbyIsImJ1ZGdldCIsInJlc291cmNlIiwiaGVhbHRoIiwicG9wdWxhcml0eSIsInVwZGF0ZVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxNQUFNLEVBQUMsa0JBQVUsQ0FFaEIsQ0FUSTtBQVdMQyxFQUFBQSxJQUFJLEVBQUMsZ0JBQVU7QUFDWCxTQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUIsYUFBdkIsRUFBc0NGLElBQXRDO0FBQ0gsR0FiSTtBQWVMRyxFQUFBQSxVQUFVLEVBQUMsb0JBQVdDLFVBQVgsRUFBdUI7QUFFOUJDLElBQUFBLElBQUksR0FBRyxDQUNGRCxVQUFVLENBQUNFLE1BRFQsRUFDa0JGLFVBQVUsQ0FBQ0csUUFEN0IsRUFFRkgsVUFBVSxDQUFDSSxNQUZULEVBRWtCSixVQUFVLENBQUNLLFVBRjdCLENBQVA7QUFJQSxTQUFLUixJQUFMLENBQVVDLFlBQVYsQ0FBdUIsYUFBdkIsRUFBc0NRLFdBQXRDLENBQWtETCxJQUFsRDtBQUdIO0FBeEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDpmdW5jdGlvbigpe1xyXG4gICBcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoJ2pzX2RhdGFMaXN0JykuaW5pdCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVJbmZvOmZ1bmN0aW9uICggaW5mb21hdGlvbiApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGluZm8gPSBbIFxyXG4gICAgICAgICAgICAgaW5mb21hdGlvbi5idWRnZXQgLCBpbmZvbWF0aW9uLnJlc291cmNlICxcclxuICAgICAgICAgICAgIGluZm9tYXRpb24uaGVhbHRoICwgaW5mb21hdGlvbi5wb3B1bGFyaXR5IF07XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoJ2pzX2RhdGFMaXN0JykudXBkYXRlVmFsdWUoaW5mbyk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxufSk7XHJcbiJdfQ==