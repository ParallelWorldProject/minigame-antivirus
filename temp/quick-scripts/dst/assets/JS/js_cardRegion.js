
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/js_cardRegion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a07cfsekWlKD74jG5MyaKwo', 'js_cardRegion');
// JS/js_cardRegion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    infomationBox: {
      "default": null,
      type: cc.node
    },
    imageBox: {
      "default": null,
      type: cc.node
    },
    selectBox: {
      "default": null,
      type: cc.node
    }
  },
  init: function init(home) {
    this.home = home; //for infomation box

    /*this.infomationBox.ch
      this.labelBudget.string = msg.budget + '%';
    this.labelResource.string = msg.resource + '%';
    this.labelHealth.string = msg.health + '%';
    this.labelPopularity.string = msg.popularity + '%';
    console.log(this.labelBudget.string);*/
  },
  acceptCheck: function acceptCheck() {
    this.msg = this.home.dataInfo;
    this.msg.budget += 1;
    this.msg.resource += 1;
    this.msg.health += 1;
    this.msg.popularity += 1;
    this.home.updateInfo(this.msg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2NhcmRSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbmZvbWF0aW9uQm94IiwidHlwZSIsIm5vZGUiLCJpbWFnZUJveCIsInNlbGVjdEJveCIsImluaXQiLCJob21lIiwiYWNjZXB0Q2hlY2siLCJtc2ciLCJkYXRhSW5mbyIsImJ1ZGdldCIsInJlc291cmNlIiwiaGVhbHRoIiwicG9wdWxhcml0eSIsInVwZGF0ZUluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZFLEtBRFA7QUFLUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVORixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQUxGO0FBU1JFLElBQUFBLFNBQVMsRUFBRTtBQUNQLGlCQUFTLElBREY7QUFFUEgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkY7QUFUSCxHQUhQO0FBa0JMRyxFQUFBQSxJQUFJLEVBQUcsY0FBVUMsSUFBVixFQUFnQjtBQUVuQixTQUFLQSxJQUFMLEdBQVlBLElBQVosQ0FGbUIsQ0FHbkI7O0FBQ0E7Ozs7OztBQU9ILEdBN0JJO0FBZ0NMQyxFQUFBQSxXQUFXLEVBQUcsdUJBQWE7QUFFdkIsU0FBS0MsR0FBTCxHQUFXLEtBQUtGLElBQUwsQ0FBVUcsUUFBckI7QUFDQSxTQUFLRCxHQUFMLENBQVNFLE1BQVQsSUFBbUIsQ0FBbkI7QUFDQSxTQUFLRixHQUFMLENBQVNHLFFBQVQsSUFBcUIsQ0FBckI7QUFDQSxTQUFLSCxHQUFMLENBQVNJLE1BQVQsSUFBbUIsQ0FBbkI7QUFDQSxTQUFLSixHQUFMLENBQVNLLFVBQVQsSUFBdUIsQ0FBdkI7QUFFQSxTQUFLUCxJQUFMLENBQVVRLFVBQVYsQ0FBcUIsS0FBS04sR0FBMUI7QUFDSDtBQXpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaW5mb21hdGlvbkJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5ub2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZUJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5ub2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RCb3g6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2Mubm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQgOiBmdW5jdGlvbiggaG9tZSApe1xyXG5cclxuICAgICAgICB0aGlzLmhvbWUgPSBob21lXHJcbiAgICAgICAgLy9mb3IgaW5mb21hdGlvbiBib3hcclxuICAgICAgICAvKnRoaXMuaW5mb21hdGlvbkJveC5jaFxyXG5cclxuICAgICAgICB0aGlzLmxhYmVsQnVkZ2V0LnN0cmluZyA9IG1zZy5idWRnZXQgKyAnJSc7XHJcbiAgICAgICAgdGhpcy5sYWJlbFJlc291cmNlLnN0cmluZyA9IG1zZy5yZXNvdXJjZSArICclJztcclxuICAgICAgICB0aGlzLmxhYmVsSGVhbHRoLnN0cmluZyA9IG1zZy5oZWFsdGggKyAnJSc7XHJcbiAgICAgICAgdGhpcy5sYWJlbFBvcHVsYXJpdHkuc3RyaW5nID0gbXNnLnBvcHVsYXJpdHkgKyAnJSc7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYWJlbEJ1ZGdldC5zdHJpbmcpOyovXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgYWNjZXB0Q2hlY2sgOiBmdW5jdGlvbiggICkge1xyXG5cclxuICAgICAgICB0aGlzLm1zZyA9IHRoaXMuaG9tZS5kYXRhSW5mb1xyXG4gICAgICAgIHRoaXMubXNnLmJ1ZGdldCArPSAxO1xyXG4gICAgICAgIHRoaXMubXNnLnJlc291cmNlICs9IDE7XHJcbiAgICAgICAgdGhpcy5tc2cuaGVhbHRoICs9IDE7XHJcbiAgICAgICAgdGhpcy5tc2cucG9wdWxhcml0eSArPSAxO1xyXG5cclxuICAgICAgICB0aGlzLmhvbWUudXBkYXRlSW5mbyh0aGlzLm1zZyk7XHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcbiJdfQ==