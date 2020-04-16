
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/cardRegion/js_checkButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15158r3AxtAf63pITgiOQVy', 'js_checkButton');
// JS/cardRegion/js_checkButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  acceptCheck: function acceptCheck() {
    //发射事件
    console.log("button pressed");
    this.node.dispatchEvent(new cc.Event.EventCustom('SelectA', 1));
  },
  declineCheck: function declineCheck() {
    this.node.dispatchEvent(new cc.Event.EventCustom('SelectB', 1));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGNhcmRSZWdpb25cXGpzX2NoZWNrQnV0dG9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYWNjZXB0Q2hlY2siLCJjb25zb2xlIiwibG9nIiwibm9kZSIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIkV2ZW50Q3VzdG9tIiwiZGVjbGluZUNoZWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxXQUFXLEVBQUcsdUJBQWE7QUFDdkI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFFQSxTQUFLQyxJQUFMLENBQVVDLGFBQVYsQ0FBeUIsSUFBSVIsRUFBRSxDQUFDUyxLQUFILENBQVNDLFdBQWIsQ0FBeUIsU0FBekIsRUFBbUMsQ0FBbkMsQ0FBekI7QUFDSCxHQVpJO0FBY0xDLEVBQUFBLFlBQVksRUFBRyx3QkFBYTtBQUV4QixTQUFLSixJQUFMLENBQVVDLGFBQVYsQ0FBeUIsSUFBSVIsRUFBRSxDQUFDUyxLQUFILENBQVNDLFdBQWIsQ0FBeUIsU0FBekIsRUFBbUMsQ0FBbkMsQ0FBekI7QUFDSDtBQWpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIGFjY2VwdENoZWNrIDogZnVuY3Rpb24oICApIHtcclxuICAgICAgICAvL+WPkeWwhOS6i+S7tlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnV0dG9uIHByZXNzZWRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQoIG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnU2VsZWN0QScsMSkgKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVjbGluZUNoZWNrIDogZnVuY3Rpb24oICApIHtcclxuICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KCBuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ1NlbGVjdEInLDEpICk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=