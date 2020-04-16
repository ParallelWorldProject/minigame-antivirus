
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/cardRegion/js_cardTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43bc6jkv1tGZpPQAlnmvSJ2', 'js_cardTemplate');
// JS/cardRegion/js_cardTemplate.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    information: cc.Node,
    image: cc.Node,
    select: cc.Node
  },
  init: function init(data, isTopCard) {
    if (isTopCard == 0) this.node.active = false; //现在只会这么写
    //修改information区

    this.from = this.information.getChildByName("from").getComponent(cc.Label);
    this.name = this.information.getChildByName("name").getComponent(cc.Label);
    this.date = this.information.getChildByName("date").getComponent(cc.Label);
    this.information = this.information.getChildByName("information").getComponent(cc.Label);
    this.from.string = data.from;
    this.name.string = data.name;
    this.date.string = data.date;
    this.information.string = data.information; //修改img区域
    //this.image.getComponent(cc.Sprite).spriteFrame = picUrl;
    //修改Select区域
    //this.select.getChildByName("acceptButton").getComponent(cc.Label).stirng = "Accept";
    //this.select.getChildByName("declineButton").getComponent(cc.Label).stirng = "Decline";
  },
  moveOff: function moveOff() {
    this.node.active = false;
  },
  moveUp: function moveUp() {
    this.node.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGNhcmRSZWdpb25cXGpzX2NhcmRUZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluZm9ybWF0aW9uIiwiTm9kZSIsImltYWdlIiwic2VsZWN0IiwiaW5pdCIsImRhdGEiLCJpc1RvcENhcmQiLCJub2RlIiwiYWN0aXZlIiwiZnJvbSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJuYW1lIiwiZGF0ZSIsInN0cmluZyIsIm1vdmVPZmYiLCJtb3ZlVXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUdKLEVBQUUsQ0FBQ0ssSUFEVDtBQUVSQyxJQUFBQSxLQUFLLEVBQUdOLEVBQUUsQ0FBQ0ssSUFGSDtBQUdSRSxJQUFBQSxNQUFNLEVBQUlQLEVBQUUsQ0FBQ0s7QUFITCxHQUhQO0FBU0xHLEVBQUFBLElBQUksRUFBRyxjQUFVQyxJQUFWLEVBQWlCQyxTQUFqQixFQUE0QjtBQUMvQixRQUFJQSxTQUFTLElBQUksQ0FBakIsRUFDQSxLQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkIsQ0FGK0IsQ0FJL0I7QUFDQTs7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBS1QsV0FBTCxDQUFpQlUsY0FBakIsQ0FBZ0MsTUFBaEMsRUFBd0NDLFlBQXhDLENBQXFEZixFQUFFLENBQUNnQixLQUF4RCxDQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtiLFdBQUwsQ0FBaUJVLGNBQWpCLENBQWdDLE1BQWhDLEVBQXdDQyxZQUF4QyxDQUFxRGYsRUFBRSxDQUFDZ0IsS0FBeEQsQ0FBWjtBQUNBLFNBQUtFLElBQUwsR0FBWSxLQUFLZCxXQUFMLENBQWlCVSxjQUFqQixDQUFnQyxNQUFoQyxFQUF3Q0MsWUFBeEMsQ0FBcURmLEVBQUUsQ0FBQ2dCLEtBQXhELENBQVo7QUFDQSxTQUFLWixXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJVLGNBQWpCLENBQWdDLGFBQWhDLEVBQStDQyxZQUEvQyxDQUE0RGYsRUFBRSxDQUFDZ0IsS0FBL0QsQ0FBbkI7QUFHQSxTQUFLSCxJQUFMLENBQVVNLE1BQVYsR0FBbUJWLElBQUksQ0FBQ0ksSUFBeEI7QUFDQSxTQUFLSSxJQUFMLENBQVVFLE1BQVYsR0FBb0JWLElBQUksQ0FBQ1EsSUFBekI7QUFDQSxTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBb0JWLElBQUksQ0FBQ1MsSUFBekI7QUFDQSxTQUFLZCxXQUFMLENBQWlCZSxNQUFqQixHQUEyQlYsSUFBSSxDQUFDTCxXQUFoQyxDQWYrQixDQWtCL0I7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNILEdBakNJO0FBb0NMZ0IsRUFBQUEsT0FBTyxFQUFHLG1CQUNWO0FBQ0ksU0FBS1QsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsR0F2Q0k7QUF5Q0xTLEVBQUFBLE1BQU0sRUFBRyxrQkFDVDtBQUNJLFNBQUtWLElBQUwsQ0FBVUMsTUFBVixHQUFtQixJQUFuQjtBQUNIO0FBNUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpbmZvcm1hdGlvbiA6IGNjLk5vZGUsXHJcbiAgICAgICAgaW1hZ2UgOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlbGVjdCA6ICBjYy5Ob2RlXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQgOiBmdW5jdGlvbiggZGF0YSAsIGlzVG9wQ2FyZCApe1xyXG4gICAgICAgIGlmKCBpc1RvcENhcmQgPT0gMCkgXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL+eOsOWcqOWPquS8mui/meS5iOWGmVxyXG4gICAgICAgIC8v5L+u5pS5aW5mb3JtYXRpb27ljLpcclxuICAgICAgICB0aGlzLmZyb20gPSB0aGlzLmluZm9ybWF0aW9uLmdldENoaWxkQnlOYW1lKFwiZnJvbVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaW5mb3JtYXRpb24uZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcImRhdGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmluZm9ybWF0aW9uID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcImluZm9ybWF0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmZyb20uc3RyaW5nID0gZGF0YS5mcm9tO1xyXG4gICAgICAgIHRoaXMubmFtZS5zdHJpbmcgID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuZGF0ZS5zdHJpbmcgID0gZGF0YS5kYXRlO1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uc3RyaW5nICA9IGRhdGEuaW5mb3JtYXRpb247XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5L+u5pS5aW1n5Yy65Z+fXHJcbiAgICAgICAgLy90aGlzLmltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcGljVXJsO1xyXG5cclxuICAgICAgICAvL+S/ruaUuVNlbGVjdOWMuuWfn1xyXG4gICAgICAgIC8vdGhpcy5zZWxlY3QuZ2V0Q2hpbGRCeU5hbWUoXCJhY2NlcHRCdXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdGlybmcgPSBcIkFjY2VwdFwiO1xyXG4gICAgICAgIC8vdGhpcy5zZWxlY3QuZ2V0Q2hpbGRCeU5hbWUoXCJkZWNsaW5lQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3Rpcm5nID0gXCJEZWNsaW5lXCI7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBtb3ZlT2ZmIDogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZVVwIDogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG59KTtcclxuIl19