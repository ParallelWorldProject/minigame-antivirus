
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbEJ1ZGdldCIsInR5cGUiLCJMYWJlbCIsImxhYmVsUmVzb3VyY2UiLCJsYWJlbEhlYWx0aCIsImxhYmVsUG9wdWxhcml0eSIsImluaXQiLCJtc2ciLCJzdHJpbmciLCJidWRnZXQiLCJyZXNvdXJjZSIsImhlYWx0aCIsInBvcHVsYXJpdHkiLCJ1cGRhdGVJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQURMO0FBS1JDLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFTLElBREU7QUFFWEYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkUsS0FMUDtBQVNSRSxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZBLEtBVEw7QUFhUkcsSUFBQUEsZUFBZSxFQUFFO0FBQ2IsaUJBQVMsSUFESTtBQUViSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSTtBQWJULEdBSFA7QUF1QkxJLEVBQUFBLElBQUksRUFBRyxjQUFVQyxHQUFWLEVBQWU7QUFFbEIsU0FBS1AsV0FBTCxDQUFpQlEsTUFBakIsR0FBMEJELEdBQUcsQ0FBQ0UsTUFBSixHQUFhLEdBQXZDO0FBQ0EsU0FBS04sYUFBTCxDQUFtQkssTUFBbkIsR0FBNEJELEdBQUcsQ0FBQ0csUUFBSixHQUFlLEdBQTNDO0FBQ0EsU0FBS04sV0FBTCxDQUFpQkksTUFBakIsR0FBMEJELEdBQUcsQ0FBQ0ksTUFBSixHQUFhLEdBQXZDO0FBQ0EsU0FBS04sZUFBTCxDQUFxQkcsTUFBckIsR0FBOEJELEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUEvQyxDQUxrQixDQU1sQjtBQUNILEdBOUJJO0FBaUNMQyxFQUFBQSxVQUFVLEVBQUcsb0JBQVVOLEdBQVYsRUFDYjtBQUNJLFNBQUtQLFdBQUwsQ0FBaUJRLE1BQWpCLEdBQTBCRCxHQUFHLENBQUNFLE1BQUosR0FBYSxHQUF2QztBQUNBLFNBQUtOLGFBQUwsQ0FBbUJLLE1BQW5CLEdBQTRCRCxHQUFHLENBQUNHLFFBQUosR0FBZSxHQUEzQztBQUNBLFNBQUtOLFdBQUwsQ0FBaUJJLE1BQWpCLEdBQTBCRCxHQUFHLENBQUNJLE1BQUosR0FBYSxHQUF2QztBQUNBLFNBQUtOLGVBQUwsQ0FBcUJHLE1BQXJCLEdBQThCRCxHQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBL0M7QUFDSDtBQXZDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxhYmVsQnVkZ2V0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxSZXNvdXJjZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsSGVhbHRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxQb3B1bGFyaXR5OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGluaXQgOiBmdW5jdGlvbiggbXNnICl7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxhYmVsQnVkZ2V0LnN0cmluZyA9IG1zZy5idWRnZXQgKyAnJSc7XG4gICAgICAgIHRoaXMubGFiZWxSZXNvdXJjZS5zdHJpbmcgPSBtc2cucmVzb3VyY2UgKyAnJSc7XG4gICAgICAgIHRoaXMubGFiZWxIZWFsdGguc3RyaW5nID0gbXNnLmhlYWx0aCArICclJztcbiAgICAgICAgdGhpcy5sYWJlbFBvcHVsYXJpdHkuc3RyaW5nID0gbXNnLnBvcHVsYXJpdHkgKyAnJSc7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5sYWJlbEJ1ZGdldC5zdHJpbmcpO1xuICAgIH0sXG5cblxuICAgIHVwZGF0ZUluZm8gOiBmdW5jdGlvbiggbXNnIClcbiAgICB7XG4gICAgICAgIHRoaXMubGFiZWxCdWRnZXQuc3RyaW5nID0gbXNnLmJ1ZGdldCArICclJztcbiAgICAgICAgdGhpcy5sYWJlbFJlc291cmNlLnN0cmluZyA9IG1zZy5yZXNvdXJjZSArICclJztcbiAgICAgICAgdGhpcy5sYWJlbEhlYWx0aC5zdHJpbmcgPSBtc2cuaGVhbHRoICsgJyUnO1xuICAgICAgICB0aGlzLmxhYmVsUG9wdWxhcml0eS5zdHJpbmcgPSBtc2cucG9wdWxhcml0eSArICclJztcbiAgICB9IFxuXG59KTtcbiJdfQ==