
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
  onLoad: function onLoad() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbEJ1ZGdldCIsInR5cGUiLCJMYWJlbCIsImxhYmVsUmVzb3VyY2UiLCJsYWJlbEhlYWx0aCIsImxhYmVsUG9wdWxhcml0eSIsIm9uTG9hZCIsInVwZGF0ZUluZm8iLCJpbmZvbWF0aW9uIiwic2hvdyIsInN0cmluZyIsImJ1ZGdldCIsInJlc291cmNlIiwiaGVhbHRoIiwicG9wdWxhcml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkEsS0FETDtBQUtSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZFLEtBTFA7QUFTUkUsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQVRMO0FBYVJHLElBQUFBLGVBQWUsRUFBRTtBQUNiLGlCQUFTLElBREk7QUFFYkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkk7QUFiVCxHQUhQO0FBdUJMSSxFQUFBQSxNQUFNLEVBQUMsa0JBQVUsQ0FFaEIsQ0F6Qkk7QUEyQkxDLEVBQUFBLFVBQVUsRUFBQyxvQkFBV0MsVUFBWCxFQUF1QjtBQUM5QixTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQTlCSTtBQWdDTEEsRUFBQUEsSUFBSSxFQUFHLGdCQUNQO0FBQ0ksU0FBS1QsV0FBTCxDQUFpQlUsTUFBakIsR0FBMEIsS0FBS0YsVUFBTCxDQUFnQkcsTUFBaEIsR0FBeUIsR0FBbkQ7QUFDQSxTQUFLUixhQUFMLENBQW1CTyxNQUFuQixHQUE0QixLQUFLRixVQUFMLENBQWdCSSxRQUFoQixHQUEyQixHQUF2RDtBQUNBLFNBQUtSLFdBQUwsQ0FBaUJNLE1BQWpCLEdBQTBCLEtBQUtGLFVBQUwsQ0FBZ0JLLE1BQWhCLEdBQXlCLEdBQW5EO0FBQ0EsU0FBS1IsZUFBTCxDQUFxQkssTUFBckIsR0FBOEIsS0FBS0YsVUFBTCxDQUFnQk0sVUFBaEIsR0FBNkIsR0FBM0Q7QUFDSDtBQXRDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbEJ1ZGdldDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxSZXNvdXJjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxIZWFsdGg6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsUG9wdWxhcml0eToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDpmdW5jdGlvbigpe1xyXG4gICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlSW5mbzpmdW5jdGlvbiAoIGluZm9tYXRpb24gKXtcclxuICAgICAgICB0aGlzLmluZm9tYXRpb24gPSBpbmZvbWF0aW9uXHJcbiAgICAgICAgdGhpcy5zaG93KClcclxuICAgIH0sXHJcblxyXG4gICAgc2hvdyA6IGZ1bmN0aW9uKCApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYWJlbEJ1ZGdldC5zdHJpbmcgPSB0aGlzLmluZm9tYXRpb24uYnVkZ2V0ICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxSZXNvdXJjZS5zdHJpbmcgPSB0aGlzLmluZm9tYXRpb24ucmVzb3VyY2UgKyAnJSc7XHJcbiAgICAgICAgdGhpcy5sYWJlbEhlYWx0aC5zdHJpbmcgPSB0aGlzLmluZm9tYXRpb24uaGVhbHRoICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxQb3B1bGFyaXR5LnN0cmluZyA9IHRoaXMuaW5mb21hdGlvbi5wb3B1bGFyaXR5ICsgJyUnO1xyXG4gICAgfSBcclxuXHJcbiAgICBcclxuXHJcbn0pO1xyXG4iXX0=