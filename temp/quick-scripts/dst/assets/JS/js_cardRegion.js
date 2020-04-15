
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
  onload: function onload() {
    this.from = this.infomationBox.getChildByName("from").getComponent(cc.Label);
    this.name = this.infomationBox.getChildByName("name").getComponent(cc.Label);
    this.date = this.infomationBox.getChildByName("date").getComponent(cc.Label);
    this.information = this.infomationBox.getChildByName("information").getComponent(cc.Label);
  },
  updateInfo: function updateInfo(infomation) {
    this.infomation = infomation;
    this.show();
  },
  show: function show() {
    this.from = this.infomation.from;
    this.name = this.infomation.name;
    this.date = this.infomation.date;
    this.infomation = this.infomation.information;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2NhcmRSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbmZvbWF0aW9uQm94IiwidHlwZSIsIk5vZGUiLCJpbWFnZUJveCIsInNlbGVjdEJveCIsIm9ubG9hZCIsImZyb20iLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwibmFtZSIsImRhdGUiLCJpbmZvcm1hdGlvbiIsInVwZGF0ZUluZm8iLCJpbmZvbWF0aW9uIiwic2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFTLElBREU7QUFFWEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkUsS0FEUDtBQUtSQyxJQUFBQSxRQUFRLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5GLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZILEtBTEY7QUFTUkUsSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsSUFERjtBQUVQSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRjtBQVRILEdBSFA7QUFrQkxHLEVBQUFBLE1BQU0sRUFBRyxrQkFBVTtBQUNmLFNBQUtDLElBQUwsR0FBWSxLQUFLTixhQUFMLENBQW1CTyxjQUFuQixDQUFrQyxNQUFsQyxFQUEwQ0MsWUFBMUMsQ0FBdURaLEVBQUUsQ0FBQ2EsS0FBMUQsQ0FBWjtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFLVixhQUFMLENBQW1CTyxjQUFuQixDQUFrQyxNQUFsQyxFQUEwQ0MsWUFBMUMsQ0FBdURaLEVBQUUsQ0FBQ2EsS0FBMUQsQ0FBWjtBQUNBLFNBQUtFLElBQUwsR0FBWSxLQUFLWCxhQUFMLENBQW1CTyxjQUFuQixDQUFrQyxNQUFsQyxFQUEwQ0MsWUFBMUMsQ0FBdURaLEVBQUUsQ0FBQ2EsS0FBMUQsQ0FBWjtBQUNBLFNBQUtHLFdBQUwsR0FBbUIsS0FBS1osYUFBTCxDQUFtQk8sY0FBbkIsQ0FBa0MsYUFBbEMsRUFBaURDLFlBQWpELENBQThEWixFQUFFLENBQUNhLEtBQWpFLENBQW5CO0FBRUgsR0F4Qkk7QUEwQkxJLEVBQUFBLFVBQVUsRUFBRyxvQkFBVUMsVUFBVixFQUFzQjtBQUMvQixTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQTdCSTtBQStCTEEsRUFBQUEsSUFBSSxFQUFHLGdCQUNQO0FBQ0csU0FBS1QsSUFBTCxHQUFZLEtBQUtRLFVBQUwsQ0FBZ0JSLElBQTVCO0FBQ0EsU0FBS0ksSUFBTCxHQUFZLEtBQUtJLFVBQUwsQ0FBZ0JKLElBQTVCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtHLFVBQUwsQ0FBZ0JILElBQTVCO0FBQ0EsU0FBS0csVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCRixXQUFsQztBQUNGO0FBckNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpbmZvbWF0aW9uQm94OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlQm94OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdEJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgb25sb2FkIDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmZyb20gPSB0aGlzLmluZm9tYXRpb25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmcm9tXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pbmZvbWF0aW9uQm94LmdldENoaWxkQnlOYW1lKFwibmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuaW5mb21hdGlvbkJveC5nZXRDaGlsZEJ5TmFtZShcImRhdGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmluZm9ybWF0aW9uID0gdGhpcy5pbmZvbWF0aW9uQm94LmdldENoaWxkQnlOYW1lKFwiaW5mb3JtYXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUluZm8gOiBmdW5jdGlvbiggaW5mb21hdGlvbiApe1xyXG4gICAgICAgIHRoaXMuaW5mb21hdGlvbiA9IGluZm9tYXRpb25cclxuICAgICAgICB0aGlzLnNob3coKVxyXG4gICAgfSxcclxuXHJcbiAgICBzaG93IDogZnVuY3Rpb24oIClcclxuICAgIHtcclxuICAgICAgIHRoaXMuZnJvbSA9IHRoaXMuaW5mb21hdGlvbi5mcm9tO1xyXG4gICAgICAgdGhpcy5uYW1lID0gdGhpcy5pbmZvbWF0aW9uLm5hbWU7XHJcbiAgICAgICB0aGlzLmRhdGUgPSB0aGlzLmluZm9tYXRpb24uZGF0ZTtcclxuICAgICAgIHRoaXMuaW5mb21hdGlvbiA9IHRoaXMuaW5mb21hdGlvbi5pbmZvcm1hdGlvbjtcclxuICAgIH0gXHJcbiAgICBcclxuXHJcbn0pO1xyXG4iXX0=