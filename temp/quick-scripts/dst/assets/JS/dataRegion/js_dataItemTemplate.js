
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/dataRegion/js_dataItemTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1200ff5xNZB8an6xR8Z9p1I', 'js_dataItemTemplate');
// JS/js_dataItemTemplate.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    itemName: cc.Label,
    itemValue: cc.Label
  },
  init: function init(data) {
    this.itemName.string = data.itemName;
    this.itemValue.string = data.itemValue + "%"; //set font format
  },
  updateValue: function updateValue(value) {
    this.itemValue.string = value + '%';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFJdGVtVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtTmFtZSIsIkxhYmVsIiwiaXRlbVZhbHVlIiwiaW5pdCIsImRhdGEiLCJzdHJpbmciLCJ1cGRhdGVWYWx1ZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFHSixFQUFFLENBQUNLLEtBRE47QUFFUkMsSUFBQUEsU0FBUyxFQUFHTixFQUFFLENBQUNLO0FBRlAsR0FIUDtBQVFMRSxFQUFBQSxJQUFJLEVBQUcsY0FBVUMsSUFBVixFQUNQO0FBQ0ksU0FBS0osUUFBTCxDQUFjSyxNQUFkLEdBQXVCRCxJQUFJLENBQUNKLFFBQTVCO0FBQ0EsU0FBS0UsU0FBTCxDQUFlRyxNQUFmLEdBQXdCRCxJQUFJLENBQUNGLFNBQUwsR0FBaUIsR0FBekMsQ0FGSixDQUlJO0FBRUgsR0FmSTtBQWlCTEksRUFBQUEsV0FBVyxFQUFHLHFCQUFVQyxLQUFWLEVBQ2Q7QUFDSSxTQUFLTCxTQUFMLENBQWVHLE1BQWYsR0FBd0JFLEtBQUssR0FBRyxHQUFoQztBQUNIO0FBcEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGl0ZW1OYW1lIDogY2MuTGFiZWwsXHJcbiAgICAgICAgaXRlbVZhbHVlIDogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQgOiBmdW5jdGlvbiggZGF0YSApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pdGVtTmFtZS5zdHJpbmcgPSBkYXRhLml0ZW1OYW1lIDtcclxuICAgICAgICB0aGlzLml0ZW1WYWx1ZS5zdHJpbmcgPSBkYXRhLml0ZW1WYWx1ZSArIFwiJVwiIDtcclxuXHJcbiAgICAgICAgLy9zZXQgZm9udCBmb3JtYXRcclxuICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVWYWx1ZSA6IGZ1bmN0aW9uKCB2YWx1ZSApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pdGVtVmFsdWUuc3RyaW5nID0gdmFsdWUgKyAnJSc7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=