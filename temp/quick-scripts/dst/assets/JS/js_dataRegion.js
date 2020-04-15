
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
  init: function init(msg) {
    this.labelBudget.string = msg.budget + '%';
    this.labelResource.string = msg.resource + '%';
    this.labelHealth.string = msg.health + '%';
    this.labelPopularity.string = msg.popularity + '%'; //console.log(this.labelBudget.string);
  },
  updateInfo: function updateInfo(msg) {
    this.labelBudget.string = msg.budget + '%';
    this.labelResource.string = msg.resource + '%';
    this.labelHealth.string = msg.health + '%';
    this.labelPopularity.string = msg.popularity + '%';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbEJ1ZGdldCIsInR5cGUiLCJMYWJlbCIsImxhYmVsUmVzb3VyY2UiLCJsYWJlbEhlYWx0aCIsImxhYmVsUG9wdWxhcml0eSIsImluaXQiLCJtc2ciLCJzdHJpbmciLCJidWRnZXQiLCJyZXNvdXJjZSIsImhlYWx0aCIsInBvcHVsYXJpdHkiLCJ1cGRhdGVJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQURMO0FBS1JDLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFTLElBREU7QUFFWEYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkUsS0FMUDtBQVNSRSxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZBLEtBVEw7QUFhUkcsSUFBQUEsZUFBZSxFQUFFO0FBQ2IsaUJBQVMsSUFESTtBQUViSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSTtBQWJULEdBSFA7QUF1QkxJLEVBQUFBLElBQUksRUFBRyxjQUFVQyxHQUFWLEVBQWU7QUFFbEIsU0FBS1AsV0FBTCxDQUFpQlEsTUFBakIsR0FBMEJELEdBQUcsQ0FBQ0UsTUFBSixHQUFhLEdBQXZDO0FBQ0EsU0FBS04sYUFBTCxDQUFtQkssTUFBbkIsR0FBNEJELEdBQUcsQ0FBQ0csUUFBSixHQUFlLEdBQTNDO0FBQ0EsU0FBS04sV0FBTCxDQUFpQkksTUFBakIsR0FBMEJELEdBQUcsQ0FBQ0ksTUFBSixHQUFhLEdBQXZDO0FBQ0EsU0FBS04sZUFBTCxDQUFxQkcsTUFBckIsR0FBOEJELEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUEvQyxDQUxrQixDQU1sQjtBQUNILEdBOUJJO0FBaUNMQyxFQUFBQSxVQUFVLEVBQUcsb0JBQVVOLEdBQVYsRUFDYjtBQUNJLFNBQUtQLFdBQUwsQ0FBaUJRLE1BQWpCLEdBQTBCRCxHQUFHLENBQUNFLE1BQUosR0FBYSxHQUF2QztBQUNBLFNBQUtOLGFBQUwsQ0FBbUJLLE1BQW5CLEdBQTRCRCxHQUFHLENBQUNHLFFBQUosR0FBZSxHQUEzQztBQUNBLFNBQUtOLFdBQUwsQ0FBaUJJLE1BQWpCLEdBQTBCRCxHQUFHLENBQUNJLE1BQUosR0FBYSxHQUF2QztBQUNBLFNBQUtOLGVBQUwsQ0FBcUJHLE1BQXJCLEdBQThCRCxHQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBL0M7QUFDSDtBQXZDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbEJ1ZGdldDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxSZXNvdXJjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxIZWFsdGg6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsUG9wdWxhcml0eToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQgOiBmdW5jdGlvbiggbXNnICl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sYWJlbEJ1ZGdldC5zdHJpbmcgPSBtc2cuYnVkZ2V0ICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxSZXNvdXJjZS5zdHJpbmcgPSBtc2cucmVzb3VyY2UgKyAnJSc7XHJcbiAgICAgICAgdGhpcy5sYWJlbEhlYWx0aC5zdHJpbmcgPSBtc2cuaGVhbHRoICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxQb3B1bGFyaXR5LnN0cmluZyA9IG1zZy5wb3B1bGFyaXR5ICsgJyUnO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5sYWJlbEJ1ZGdldC5zdHJpbmcpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgdXBkYXRlSW5mbyA6IGZ1bmN0aW9uKCBtc2cgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGFiZWxCdWRnZXQuc3RyaW5nID0gbXNnLmJ1ZGdldCArICclJztcclxuICAgICAgICB0aGlzLmxhYmVsUmVzb3VyY2Uuc3RyaW5nID0gbXNnLnJlc291cmNlICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxIZWFsdGguc3RyaW5nID0gbXNnLmhlYWx0aCArICclJztcclxuICAgICAgICB0aGlzLmxhYmVsUG9wdWxhcml0eS5zdHJpbmcgPSBtc2cucG9wdWxhcml0eSArICclJztcclxuICAgIH0gXHJcblxyXG59KTtcclxuIl19