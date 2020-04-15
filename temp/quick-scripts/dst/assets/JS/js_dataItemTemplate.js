
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/js_dataItemTemplate.js';
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
    this.itemValue.string = data.itemValue;
  },
  updateValue: function updateValue(value) {
    this.itemName = value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFJdGVtVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtTmFtZSIsIkxhYmVsIiwiaXRlbVZhbHVlIiwiaW5pdCIsImRhdGEiLCJzdHJpbmciLCJ1cGRhdGVWYWx1ZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFHSixFQUFFLENBQUNLLEtBRE47QUFFUkMsSUFBQUEsU0FBUyxFQUFHTixFQUFFLENBQUNLO0FBRlAsR0FIUDtBQVFMRSxFQUFBQSxJQUFJLEVBQUcsY0FBVUMsSUFBVixFQUNQO0FBQ0ksU0FBS0osUUFBTCxDQUFjSyxNQUFkLEdBQXVCRCxJQUFJLENBQUNKLFFBQTVCO0FBQ0EsU0FBS0UsU0FBTCxDQUFlRyxNQUFmLEdBQXdCRCxJQUFJLENBQUNGLFNBQTdCO0FBQ0gsR0FaSTtBQWNMSSxFQUFBQSxXQUFXLEVBQUcscUJBQVVDLEtBQVYsRUFDZDtBQUNJLFNBQUtQLFFBQUwsR0FBZ0JPLEtBQWhCO0FBQ0g7QUFqQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXRlbU5hbWUgOiBjYy5MYWJlbCxcclxuICAgICAgICBpdGVtVmFsdWUgOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCA6IGZ1bmN0aW9uKCBkYXRhIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLml0ZW1OYW1lLnN0cmluZyA9IGRhdGEuaXRlbU5hbWU7XHJcbiAgICAgICAgdGhpcy5pdGVtVmFsdWUuc3RyaW5nID0gZGF0YS5pdGVtVmFsdWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVZhbHVlIDogZnVuY3Rpb24oIHZhbHVlIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLml0ZW1OYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=