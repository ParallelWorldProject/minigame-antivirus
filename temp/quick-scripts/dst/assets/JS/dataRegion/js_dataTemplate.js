
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/dataRegion/js_dataTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1200ff5xNZB8an6xR8Z9p1I', 'js_dataTemplate');
// JS/dataRegion/js_dataTemplate.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    itemName: cc.Label,
    itemValue: cc.Label
  },
  init: function init(data) {
    this.itemName.string = data.itemName;
    this.itemValue.string = data.itemValue + "%"; //set font 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGRhdGFSZWdpb25cXGpzX2RhdGFUZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIml0ZW1OYW1lIiwiTGFiZWwiLCJpdGVtVmFsdWUiLCJpbml0IiwiZGF0YSIsInN0cmluZyIsInVwZGF0ZVZhbHVlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUdKLEVBQUUsQ0FBQ0ssS0FETjtBQUVSQyxJQUFBQSxTQUFTLEVBQUdOLEVBQUUsQ0FBQ0s7QUFGUCxHQUhQO0FBUUxFLEVBQUFBLElBQUksRUFBRyxjQUFVQyxJQUFWLEVBQ1A7QUFDSSxTQUFLSixRQUFMLENBQWNLLE1BQWQsR0FBdUJELElBQUksQ0FBQ0osUUFBNUI7QUFDQSxTQUFLRSxTQUFMLENBQWVHLE1BQWYsR0FBd0JELElBQUksQ0FBQ0YsU0FBTCxHQUFpQixHQUF6QyxDQUZKLENBR0k7QUFDSCxHQWJJO0FBZUxJLEVBQUFBLFdBQVcsRUFBRyxxQkFBVUMsS0FBVixFQUNkO0FBQ0ksU0FBS0wsU0FBTCxDQUFlRyxNQUFmLEdBQXdCRSxLQUFLLEdBQUcsR0FBaEM7QUFDSDtBQWxCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpdGVtTmFtZSA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGl0ZW1WYWx1ZSA6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0IDogZnVuY3Rpb24oIGRhdGEgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXRlbU5hbWUuc3RyaW5nID0gZGF0YS5pdGVtTmFtZSA7XHJcbiAgICAgICAgdGhpcy5pdGVtVmFsdWUuc3RyaW5nID0gZGF0YS5pdGVtVmFsdWUgKyBcIiVcIiA7XHJcbiAgICAgICAgLy9zZXQgZm9udCBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlVmFsdWUgOiBmdW5jdGlvbiggdmFsdWUgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXRlbVZhbHVlLnN0cmluZyA9IHZhbHVlICsgJyUnO1xyXG4gICAgfVxyXG59KTtcclxuIl19