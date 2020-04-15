
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2NhcmRSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbmZvbWF0aW9uQm94IiwidHlwZSIsIm5vZGUiLCJpbWFnZUJveCIsInNlbGVjdEJveCIsImluaXQiLCJob21lIiwiYWNjZXB0Q2hlY2siLCJtc2ciLCJkYXRhSW5mbyIsImJ1ZGdldCIsInJlc291cmNlIiwiaGVhbHRoIiwicG9wdWxhcml0eSIsInVwZGF0ZUluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZFLEtBRFA7QUFLUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVORixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQUxGO0FBU1JFLElBQUFBLFNBQVMsRUFBRTtBQUNQLGlCQUFTLElBREY7QUFFUEgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkY7QUFUSCxHQUhQO0FBa0JMRyxFQUFBQSxJQUFJLEVBQUcsY0FBVUMsSUFBVixFQUFnQjtBQUVuQixTQUFLQSxJQUFMLEdBQVlBLElBQVosQ0FGbUIsQ0FHbkI7O0FBQ0E7Ozs7OztBQU9ILEdBN0JJO0FBZ0NMQyxFQUFBQSxXQUFXLEVBQUcsdUJBQWE7QUFFdkIsU0FBS0MsR0FBTCxHQUFXLEtBQUtGLElBQUwsQ0FBVUcsUUFBckI7QUFDQSxTQUFLRCxHQUFMLENBQVNFLE1BQVQsSUFBbUIsQ0FBbkI7QUFDQSxTQUFLRixHQUFMLENBQVNHLFFBQVQsSUFBcUIsQ0FBckI7QUFDQSxTQUFLSCxHQUFMLENBQVNJLE1BQVQsSUFBbUIsQ0FBbkI7QUFDQSxTQUFLSixHQUFMLENBQVNLLFVBQVQsSUFBdUIsQ0FBdkI7QUFFQSxTQUFLUCxJQUFMLENBQVVRLFVBQVYsQ0FBcUIsS0FBS04sR0FBMUI7QUFDSDtBQXpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaW5mb21hdGlvbkJveDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLm5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2VCb3g6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5ub2RlXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdEJveDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLm5vZGVcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgaW5pdCA6IGZ1bmN0aW9uKCBob21lICl7XG5cbiAgICAgICAgdGhpcy5ob21lID0gaG9tZVxuICAgICAgICAvL2ZvciBpbmZvbWF0aW9uIGJveFxuICAgICAgICAvKnRoaXMuaW5mb21hdGlvbkJveC5jaFxuXG4gICAgICAgIHRoaXMubGFiZWxCdWRnZXQuc3RyaW5nID0gbXNnLmJ1ZGdldCArICclJztcbiAgICAgICAgdGhpcy5sYWJlbFJlc291cmNlLnN0cmluZyA9IG1zZy5yZXNvdXJjZSArICclJztcbiAgICAgICAgdGhpcy5sYWJlbEhlYWx0aC5zdHJpbmcgPSBtc2cuaGVhbHRoICsgJyUnO1xuICAgICAgICB0aGlzLmxhYmVsUG9wdWxhcml0eS5zdHJpbmcgPSBtc2cucG9wdWxhcml0eSArICclJztcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYWJlbEJ1ZGdldC5zdHJpbmcpOyovXG4gICAgfSxcblxuICAgIFxuICAgIGFjY2VwdENoZWNrIDogZnVuY3Rpb24oICApIHtcblxuICAgICAgICB0aGlzLm1zZyA9IHRoaXMuaG9tZS5kYXRhSW5mb1xuICAgICAgICB0aGlzLm1zZy5idWRnZXQgKz0gMTtcbiAgICAgICAgdGhpcy5tc2cucmVzb3VyY2UgKz0gMTtcbiAgICAgICAgdGhpcy5tc2cuaGVhbHRoICs9IDE7XG4gICAgICAgIHRoaXMubXNnLnBvcHVsYXJpdHkgKz0gMTtcblxuICAgICAgICB0aGlzLmhvbWUudXBkYXRlSW5mbyh0aGlzLm1zZyk7XG4gICAgfVxuXG5cbn0pO1xuIl19