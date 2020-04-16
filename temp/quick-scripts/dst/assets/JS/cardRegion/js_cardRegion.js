
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/cardRegion/js_cardRegion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a07cfsekWlKD74jG5MyaKwo', 'js_cardRegion');
// JS/cardRegion/js_cardRegion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onload: function onload() {},
  init: function init() {
    this.node.getComponent('js_cardList').init();
  },
  getNextCard: function getNextCard() {
    this.node.getComponent('js_cardList').getNextCard();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGNhcmRSZWdpb25cXGpzX2NhcmRSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbmxvYWQiLCJpbml0Iiwibm9kZSIsImdldENvbXBvbmVudCIsImdldE5leHRDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxNQUFNLEVBQUcsa0JBQVUsQ0FHbEIsQ0FWSTtBQVlMQyxFQUFBQSxJQUFJLEVBQUcsZ0JBQVk7QUFFZixTQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUIsYUFBdkIsRUFBc0NGLElBQXRDO0FBQ0gsR0FmSTtBQWlCTEcsRUFBQUEsV0FBVyxFQUFHLHVCQUNkO0FBQ0ksU0FBS0YsSUFBTCxDQUFVQyxZQUFWLENBQXVCLGFBQXZCLEVBQXNDQyxXQUF0QztBQUNIO0FBcEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgb25sb2FkIDogZnVuY3Rpb24oKXtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0IDogZnVuY3Rpb24oICApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoJ2pzX2NhcmRMaXN0JykuaW5pdCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXROZXh0Q2FyZCA6IGZ1bmN0aW9uKCApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudCgnanNfY2FyZExpc3QnKS5nZXROZXh0Q2FyZCgpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG59KTtcclxuIl19