
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/js_dataRegion.js';
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
  properties: {
    labelBudget: {
      "default": null,
      type: cc.Label
    },
    labelResource: {
      "default": null,
      type: cc.Label
    },
    labelHealth: {
      "default": null,
      type: cc.Label
    },
    labelPopularity: {
      "default": null,
      type: cc.Label
    }
  },
  updateInfo: function updateInfo(infomation) {
    this.infomation = infomation;
    this.show();
  },
  show: function show() {
    this.labelBudget.string = this.infomation.budget + '%';
    this.labelResource.string = this.infomation.resource + '%';
    this.labelHealth.string = this.infomation.health + '%';
    this.labelPopularity.string = this.infomation.popularity + '%';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbEJ1ZGdldCIsInR5cGUiLCJMYWJlbCIsImxhYmVsUmVzb3VyY2UiLCJsYWJlbEhlYWx0aCIsImxhYmVsUG9wdWxhcml0eSIsInVwZGF0ZUluZm8iLCJpbmZvbWF0aW9uIiwic2hvdyIsInN0cmluZyIsImJ1ZGdldCIsInJlc291cmNlIiwiaGVhbHRoIiwicG9wdWxhcml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkEsS0FETDtBQUtSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZFLEtBTFA7QUFTUkUsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQVRMO0FBYVJHLElBQUFBLGVBQWUsRUFBRTtBQUNiLGlCQUFTLElBREk7QUFFYkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkk7QUFiVCxHQUhQO0FBeUJMSSxFQUFBQSxVQUFVLEVBQUMsb0JBQVdDLFVBQVgsRUFBdUI7QUFDOUIsU0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxJQUFMO0FBQ0gsR0E1Qkk7QUE4QkxBLEVBQUFBLElBQUksRUFBRyxnQkFDUDtBQUNJLFNBQUtSLFdBQUwsQ0FBaUJTLE1BQWpCLEdBQTBCLEtBQUtGLFVBQUwsQ0FBZ0JHLE1BQWhCLEdBQXlCLEdBQW5EO0FBQ0EsU0FBS1AsYUFBTCxDQUFtQk0sTUFBbkIsR0FBNEIsS0FBS0YsVUFBTCxDQUFnQkksUUFBaEIsR0FBMkIsR0FBdkQ7QUFDQSxTQUFLUCxXQUFMLENBQWlCSyxNQUFqQixHQUEwQixLQUFLRixVQUFMLENBQWdCSyxNQUFoQixHQUF5QixHQUFuRDtBQUNBLFNBQUtQLGVBQUwsQ0FBcUJJLE1BQXJCLEdBQThCLEtBQUtGLFVBQUwsQ0FBZ0JNLFVBQWhCLEdBQTZCLEdBQTNEO0FBQ0g7QUFwQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGFiZWxCdWRnZXQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsUmVzb3VyY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsSGVhbHRoOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYWJlbFBvcHVsYXJpdHk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgIFxyXG5cclxuICAgIHVwZGF0ZUluZm86ZnVuY3Rpb24gKCBpbmZvbWF0aW9uICl7XHJcbiAgICAgICAgdGhpcy5pbmZvbWF0aW9uID0gaW5mb21hdGlvblxyXG4gICAgICAgIHRoaXMuc2hvdygpXHJcbiAgICB9LFxyXG5cclxuICAgIHNob3cgOiBmdW5jdGlvbiggKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGFiZWxCdWRnZXQuc3RyaW5nID0gdGhpcy5pbmZvbWF0aW9uLmJ1ZGdldCArICclJztcclxuICAgICAgICB0aGlzLmxhYmVsUmVzb3VyY2Uuc3RyaW5nID0gdGhpcy5pbmZvbWF0aW9uLnJlc291cmNlICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxIZWFsdGguc3RyaW5nID0gdGhpcy5pbmZvbWF0aW9uLmhlYWx0aCArICclJztcclxuICAgICAgICB0aGlzLmxhYmVsUG9wdWxhcml0eS5zdHJpbmcgPSB0aGlzLmluZm9tYXRpb24ucG9wdWxhcml0eSArICclJztcclxuICAgIH0gXHJcblxyXG4gICAgXHJcblxyXG59KTtcclxuIl19