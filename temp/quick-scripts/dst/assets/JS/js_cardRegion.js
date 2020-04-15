
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
      type: cc.Node
    },
    imageBox: {
      "default": null,
      type: cc.Node
    },
    selectBox: {
      "default": null,
      type: cc.Node
    }
  },
  onload: function onload() {},
  updateInfo: function updateInfo(infomation) {
    this.infomation = infomation;
    this.show();
  },
  show: function show() {
    //更新数据的一种野蛮方式
    //For infomation box 
    this.from = this.infomationBox.getChildByName("from").getComponent(cc.Label);
    this.name = this.infomationBox.getChildByName("name").getComponent(cc.Label);
    this.date = this.infomationBox.getChildByName("date").getComponent(cc.Label);
    this.information = this.infomationBox.getChildByName("information").getComponent(cc.Label);
    this.from.string = this.infomation.from;
    this.name.string = this.infomation.name;
    this.date.string = this.infomation.date;
    this.information.string = this.infomation.information;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2NhcmRSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbmZvbWF0aW9uQm94IiwidHlwZSIsIk5vZGUiLCJpbWFnZUJveCIsInNlbGVjdEJveCIsIm9ubG9hZCIsInVwZGF0ZUluZm8iLCJpbmZvbWF0aW9uIiwic2hvdyIsImZyb20iLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwibmFtZSIsImRhdGUiLCJpbmZvcm1hdGlvbiIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFTLElBREU7QUFFWEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkUsS0FEUDtBQUtSQyxJQUFBQSxRQUFRLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5GLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZILEtBTEY7QUFTUkUsSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsSUFERjtBQUVQSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRjtBQVRILEdBSFA7QUFrQkxHLEVBQUFBLE1BQU0sRUFBRyxrQkFBVSxDQUVsQixDQXBCSTtBQXNCTEMsRUFBQUEsVUFBVSxFQUFHLG9CQUFVQyxVQUFWLEVBQXNCO0FBQy9CLFNBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsSUFBTDtBQUNILEdBekJJO0FBMkJMQSxFQUFBQSxJQUFJLEVBQUcsZ0JBQ1A7QUFDSTtBQUNBO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtULGFBQUwsQ0FBbUJVLGNBQW5CLENBQWtDLE1BQWxDLEVBQTBDQyxZQUExQyxDQUF1RGYsRUFBRSxDQUFDZ0IsS0FBMUQsQ0FBWjtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFLYixhQUFMLENBQW1CVSxjQUFuQixDQUFrQyxNQUFsQyxFQUEwQ0MsWUFBMUMsQ0FBdURmLEVBQUUsQ0FBQ2dCLEtBQTFELENBQVo7QUFDQSxTQUFLRSxJQUFMLEdBQVksS0FBS2QsYUFBTCxDQUFtQlUsY0FBbkIsQ0FBa0MsTUFBbEMsRUFBMENDLFlBQTFDLENBQXVEZixFQUFFLENBQUNnQixLQUExRCxDQUFaO0FBQ0EsU0FBS0csV0FBTCxHQUFtQixLQUFLZixhQUFMLENBQW1CVSxjQUFuQixDQUFrQyxhQUFsQyxFQUFpREMsWUFBakQsQ0FBOERmLEVBQUUsQ0FBQ2dCLEtBQWpFLENBQW5CO0FBR0EsU0FBS0gsSUFBTCxDQUFVTyxNQUFWLEdBQW1CLEtBQUtULFVBQUwsQ0FBZ0JFLElBQW5DO0FBQ0EsU0FBS0ksSUFBTCxDQUFVRyxNQUFWLEdBQW9CLEtBQUtULFVBQUwsQ0FBZ0JNLElBQXBDO0FBQ0EsU0FBS0MsSUFBTCxDQUFVRSxNQUFWLEdBQW9CLEtBQUtULFVBQUwsQ0FBZ0JPLElBQXBDO0FBQ0EsU0FBS0MsV0FBTCxDQUFpQkMsTUFBakIsR0FBMkIsS0FBS1QsVUFBTCxDQUFnQlEsV0FBM0M7QUFHSDtBQTNDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaW5mb21hdGlvbkJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZUJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RCb3g6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9ubG9hZCA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlSW5mbyA6IGZ1bmN0aW9uKCBpbmZvbWF0aW9uICl7XHJcbiAgICAgICAgdGhpcy5pbmZvbWF0aW9uID0gaW5mb21hdGlvblxyXG4gICAgICAgIHRoaXMuc2hvdygpXHJcbiAgICB9LFxyXG5cclxuICAgIHNob3cgOiBmdW5jdGlvbiggKVxyXG4gICAge1xyXG4gICAgICAgIC8v5pu05paw5pWw5o2u55qE5LiA56eN6YeO6Juu5pa55byPXHJcbiAgICAgICAgLy9Gb3IgaW5mb21hdGlvbiBib3ggXHJcbiAgICAgICAgdGhpcy5mcm9tID0gdGhpcy5pbmZvbWF0aW9uQm94LmdldENoaWxkQnlOYW1lKFwiZnJvbVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaW5mb21hdGlvbkJveC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmRhdGUgPSB0aGlzLmluZm9tYXRpb25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJkYXRlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pbmZvcm1hdGlvbiA9IHRoaXMuaW5mb21hdGlvbkJveC5nZXRDaGlsZEJ5TmFtZShcImluZm9ybWF0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmZyb20uc3RyaW5nID0gdGhpcy5pbmZvbWF0aW9uLmZyb207XHJcbiAgICAgICAgdGhpcy5uYW1lLnN0cmluZyAgPSB0aGlzLmluZm9tYXRpb24ubmFtZTtcclxuICAgICAgICB0aGlzLmRhdGUuc3RyaW5nICA9IHRoaXMuaW5mb21hdGlvbi5kYXRlO1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uc3RyaW5nICA9IHRoaXMuaW5mb21hdGlvbi5pbmZvcm1hdGlvbjtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9IFxyXG5cclxuXHJcbn0pO1xyXG4iXX0=