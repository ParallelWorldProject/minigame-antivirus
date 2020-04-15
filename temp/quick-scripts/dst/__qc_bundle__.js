
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/JS/dataRegion/js_dataItemList');
require('./assets/JS/dataRegion/js_dataItemTemplate');
require('./assets/JS/dataRegion/js_dataRegion');
require('./assets/JS/js_cardRegion');
require('./assets/JS/js_home');
require('./assets/migration/use_reversed_rotateBy');

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
//------QC-SOURCE-SPLIT------

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
  properties: {},
  onLoad: function onLoad() {},
  updateInfo: function updateInfo(infomation) {
    info = [infomation.budget, infomation.resource, infomation.health, infomation.popularity];
    this.node.getComponent('js_dataItemList').updateValue(info);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ1cGRhdGVJbmZvIiwiaW5mb21hdGlvbiIsImluZm8iLCJidWRnZXQiLCJyZXNvdXJjZSIsImhlYWx0aCIsInBvcHVsYXJpdHkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwidXBkYXRlVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE1BQU0sRUFBQyxrQkFBVSxDQUVoQixDQVRJO0FBV0xDLEVBQUFBLFVBQVUsRUFBQyxvQkFBV0MsVUFBWCxFQUF1QjtBQUU5QkMsSUFBQUEsSUFBSSxHQUFHLENBQ0ZELFVBQVUsQ0FBQ0UsTUFEVCxFQUNrQkYsVUFBVSxDQUFDRyxRQUQ3QixFQUVGSCxVQUFVLENBQUNJLE1BRlQsRUFFa0JKLFVBQVUsQ0FBQ0ssVUFGN0IsQ0FBUDtBQUlBLFNBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QixpQkFBdkIsRUFBMENDLFdBQTFDLENBQXNEUCxJQUF0RDtBQUdIO0FBcEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDpmdW5jdGlvbigpe1xyXG4gICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlSW5mbzpmdW5jdGlvbiAoIGluZm9tYXRpb24gKXtcclxuICAgICAgICBcclxuICAgICAgICBpbmZvID0gWyBcclxuICAgICAgICAgICAgIGluZm9tYXRpb24uYnVkZ2V0ICwgaW5mb21hdGlvbi5yZXNvdXJjZSAsXHJcbiAgICAgICAgICAgICBpbmZvbWF0aW9uLmhlYWx0aCAsIGluZm9tYXRpb24ucG9wdWxhcml0eSBdO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KCdqc19kYXRhSXRlbUxpc3QnKS51cGRhdGVWYWx1ZShpbmZvKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateBy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66a37vrZqxNwb4v4UQbIndO', 'use_reversed_rotateBy');
// migration/use_reversed_rotateBy.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateBy._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlQnkuanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVCeSIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlBQSxFQUFFLENBQUNDLFFBQUgsQ0FBWUMsUUFBWixHQUF1QixJQUF2QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdjIuMS4wL3YyLjEuMS92Mi4zLjAvdjIuMy4xL3YyLjMuMiB2ZXJzaW9ucy5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5BY3Rpb24gaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMC92Mi4xLjEvdjIuMy4wL3YyLjMuMS92Mi4zLjIg54mI5pys55qE5bel56iL77yMXHJcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgQWN0aW9u77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXHJcbiAqL1xyXG5cclxuY2MuUm90YXRlQnkuX3JldmVyc2UgPSB0cnVlO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/js_home.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05accNNXfdB/6XaPLPNVQI+', 'js_home');
// JS/js_home.js

"use strict";

//1: 加载所有游戏部件 与 动画
//2: 存储信息并进行前后端总体交互
var CardRegion = require('js_cardRegion');

var DataRegion = require('js_dataRegion');

cc.Class({
  "extends": cc.Component,
  properties: {
    homeAnim: {
      //动画
      "default": null,
      type: cc.Animation
    },
    cardRegion: {
      //卡片区域
      "default": null,
      type: CardRegion
    },
    dataRegion: {
      //数值区域
      "default": null,
      type: DataRegion
    },
    backStage: {
      //后端
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    //储存游戏需要的信息
    this.information = {
      //和后端交互的信息
      gameInfo: {
        playerId: 0,
        curCardId: 0,
        storyId: 0,
        sellected: '0'
      },
      //和数据区交互的信息
      dataInfo: {
        budget: 4,
        resource: 3,
        health: 2,
        popularity: 1
      },
      //和卡牌区交互的信息
      cardInfo: {
        from: "0",
        name: "0",
        date: "0/00/0000",
        information: "000000000",
        picUrl: '000',
        optionA: {
          change: [0, 0, 0, 0]
        },
        optionB: {
          change: [0, 0, 0, 0]
        }
      }
    };
  },
  start: function start() {
    this.dataRegion.updateInfo(this.information.dataInfo);
    this.cardRegion.updateInfo(this.information.cardInfo);
  },
  acceptCheck: function acceptCheck() {
    this.information.dataInfo.budget += 1;
    this.information.dataInfo.resource += 2;
    this.information.dataInfo.health += 3;
    this.information.dataInfo.popularity += 4;
    this.dataRegion.updateInfo(this.information.dataInfo);
  },
  declineCheck: function declineCheck() {
    this.information.dataInfo.budget -= 1;
    this.information.dataInfo.resource -= 2;
    this.information.dataInfo.health -= 3;
    this.information.dataInfo.popularity -= 4;
    this.dataRegion.updateInfo(this.information.dataInfo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2hvbWUuanMiXSwibmFtZXMiOlsiQ2FyZFJlZ2lvbiIsInJlcXVpcmUiLCJEYXRhUmVnaW9uIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJob21lQW5pbSIsInR5cGUiLCJBbmltYXRpb24iLCJjYXJkUmVnaW9uIiwiZGF0YVJlZ2lvbiIsImJhY2tTdGFnZSIsIk5vZGUiLCJvbkxvYWQiLCJpbmZvcm1hdGlvbiIsImdhbWVJbmZvIiwicGxheWVySWQiLCJjdXJDYXJkSWQiLCJzdG9yeUlkIiwic2VsbGVjdGVkIiwiZGF0YUluZm8iLCJidWRnZXQiLCJyZXNvdXJjZSIsImhlYWx0aCIsInBvcHVsYXJpdHkiLCJjYXJkSW5mbyIsImZyb20iLCJuYW1lIiwiZGF0ZSIsInBpY1VybCIsIm9wdGlvbkEiLCJjaGFuZ2UiLCJvcHRpb25CIiwic3RhcnQiLCJ1cGRhdGVJbmZvIiwiYWNjZXB0Q2hlY2siLCJkZWNsaW5lQ2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFFQUUsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFJTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRTtBQUFHO0FBQ1QsaUJBQVMsSUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQURGO0FBS1JDLElBQUFBLFVBQVUsRUFBRTtBQUFHO0FBQ1gsaUJBQVMsSUFERDtBQUVSRixNQUFBQSxJQUFJLEVBQUVSO0FBRkUsS0FMSjtBQVNSVyxJQUFBQSxVQUFVLEVBQUU7QUFBRztBQUNYLGlCQUFTLElBREQ7QUFFUkgsTUFBQUEsSUFBSSxFQUFFTjtBQUZFLEtBVEo7QUFhUlUsSUFBQUEsU0FBUyxFQUFFO0FBQUU7QUFDVCxpQkFBUyxJQURGO0FBRVBKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDVTtBQUZGO0FBYkgsR0FKUDtBQXVCSkMsRUFBQUEsTUFBTSxFQUFDLGtCQUFZO0FBQ2hCO0FBQ0EsU0FBS0MsV0FBTCxHQUNBO0FBQ0k7QUFDQUMsTUFBQUEsUUFBUSxFQUFHO0FBQ1BDLFFBQUFBLFFBQVEsRUFBQyxDQURGO0FBRVBDLFFBQUFBLFNBQVMsRUFBQyxDQUZIO0FBR1BDLFFBQUFBLE9BQU8sRUFBQyxDQUhEO0FBSVBDLFFBQUFBLFNBQVMsRUFBQztBQUpILE9BRmY7QUFRSTtBQUNBQyxNQUFBQSxRQUFRLEVBQUc7QUFDUEMsUUFBQUEsTUFBTSxFQUFDLENBREE7QUFFUEMsUUFBQUEsUUFBUSxFQUFDLENBRkY7QUFHUEMsUUFBQUEsTUFBTSxFQUFFLENBSEQ7QUFJUEMsUUFBQUEsVUFBVSxFQUFDO0FBSkosT0FUZjtBQWVJO0FBQ0FDLE1BQUFBLFFBQVEsRUFBRztBQUNQQyxRQUFBQSxJQUFJLEVBQUMsR0FERTtBQUVQQyxRQUFBQSxJQUFJLEVBQUMsR0FGRTtBQUdQQyxRQUFBQSxJQUFJLEVBQUMsV0FIRTtBQUlQZCxRQUFBQSxXQUFXLEVBQUMsV0FKTDtBQUtQZSxRQUFBQSxNQUFNLEVBQUMsS0FMQTtBQU1QQyxRQUFBQSxPQUFPLEVBQUM7QUFDSkMsVUFBQUEsTUFBTSxFQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUDtBQURILFNBTkQ7QUFTUEMsUUFBQUEsT0FBTyxFQUFDO0FBQ0pELFVBQUFBLE1BQU0sRUFBQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVA7QUFESDtBQVREO0FBaEJmLEtBREE7QUFnQ0YsR0F6REc7QUEyRExFLEVBQUFBLEtBQUssRUFBQyxpQkFBWTtBQUNkLFNBQUt2QixVQUFMLENBQWdCd0IsVUFBaEIsQ0FBMkIsS0FBS3BCLFdBQUwsQ0FBaUJNLFFBQTVDO0FBQ0EsU0FBS1gsVUFBTCxDQUFnQnlCLFVBQWhCLENBQTJCLEtBQUtwQixXQUFMLENBQWlCVyxRQUE1QztBQUNILEdBOURJO0FBa0VMVSxFQUFBQSxXQUFXLEVBQUcsdUJBQWE7QUFFdkIsU0FBS3JCLFdBQUwsQ0FBaUJNLFFBQWpCLENBQTBCQyxNQUExQixJQUFvQyxDQUFwQztBQUNBLFNBQUtQLFdBQUwsQ0FBaUJNLFFBQWpCLENBQTBCRSxRQUExQixJQUFzQyxDQUF0QztBQUNBLFNBQUtSLFdBQUwsQ0FBaUJNLFFBQWpCLENBQTBCRyxNQUExQixJQUFvQyxDQUFwQztBQUNBLFNBQUtULFdBQUwsQ0FBaUJNLFFBQWpCLENBQTBCSSxVQUExQixJQUF3QyxDQUF4QztBQUVELFNBQUtkLFVBQUwsQ0FBZ0J3QixVQUFoQixDQUEyQixLQUFLcEIsV0FBTCxDQUFpQk0sUUFBNUM7QUFDRixHQTFFSTtBQTRFTGdCLEVBQUFBLFlBQVksRUFBRyx3QkFBYTtBQUV4QixTQUFLdEIsV0FBTCxDQUFpQk0sUUFBakIsQ0FBMEJDLE1BQTFCLElBQW9DLENBQXBDO0FBQ0EsU0FBS1AsV0FBTCxDQUFpQk0sUUFBakIsQ0FBMEJFLFFBQTFCLElBQXNDLENBQXRDO0FBQ0EsU0FBS1IsV0FBTCxDQUFpQk0sUUFBakIsQ0FBMEJHLE1BQTFCLElBQW9DLENBQXBDO0FBQ0EsU0FBS1QsV0FBTCxDQUFpQk0sUUFBakIsQ0FBMEJJLFVBQTFCLElBQXdDLENBQXhDO0FBRUQsU0FBS2QsVUFBTCxDQUFnQndCLFVBQWhCLENBQTJCLEtBQUtwQixXQUFMLENBQWlCTSxRQUE1QztBQUNGO0FBcEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vMTog5Yqg6L295omA5pyJ5ri45oiP6YOo5Lu2IOS4jiDliqjnlLtcclxuLy8yOiDlrZjlgqjkv6Hmga/lubbov5vooYzliY3lkI7nq6/mgLvkvZPkuqTkupJcclxuXHJcbmNvbnN0IENhcmRSZWdpb24gPSByZXF1aXJlKCdqc19jYXJkUmVnaW9uJyk7XHJcbmNvbnN0IERhdGFSZWdpb24gPSByZXF1aXJlKCdqc19kYXRhUmVnaW9uJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBob21lQW5pbTogeyAgLy/liqjnlLtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXJkUmVnaW9uOiB7ICAvL+WNoeeJh+WMuuWfn1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBDYXJkUmVnaW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhUmVnaW9uOiB7ICAvL+aVsOWAvOWMuuWfn1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBEYXRhUmVnaW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNrU3RhZ2U6IHsgLy/lkI7nq69cclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgICBvbkxvYWQ6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8v5YKo5a2Y5ri45oiP6ZyA6KaB55qE5L+h5oGvXHJcbiAgICAgICAgdGhpcy5pbmZvcm1hdGlvbiA9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WSjOWQjuerr+S6pOS6kueahOS/oeaBr1xyXG4gICAgICAgICAgICBnYW1lSW5mbyA6IHtcclxuICAgICAgICAgICAgICAgIHBsYXllcklkOjAsXHJcbiAgICAgICAgICAgICAgICBjdXJDYXJkSWQ6MCxcclxuICAgICAgICAgICAgICAgIHN0b3J5SWQ6MCxcclxuICAgICAgICAgICAgICAgIHNlbGxlY3RlZDonMCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8v5ZKM5pWw5o2u5Yy65Lqk5LqS55qE5L+h5oGvXHJcbiAgICAgICAgICAgIGRhdGFJbmZvIDoge1xyXG4gICAgICAgICAgICAgICAgYnVkZ2V0OjQgLFxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2U6MyAsXHJcbiAgICAgICAgICAgICAgICBoZWFsdGg6IDIsXHJcbiAgICAgICAgICAgICAgICBwb3B1bGFyaXR5OjFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy/lkozljaHniYzljLrkuqTkupLnmoTkv6Hmga9cclxuICAgICAgICAgICAgY2FyZEluZm8gOiB7XHJcbiAgICAgICAgICAgICAgICBmcm9tOlwiMFwiICxcclxuICAgICAgICAgICAgICAgIG5hbWU6XCIwXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlOlwiMC8wMC8wMDAwXCIsXHJcbiAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbjpcIjAwMDAwMDAwMFwiLFxyXG4gICAgICAgICAgICAgICAgcGljVXJsOicwMDAnLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uQTp7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOlswLDAsMCwwXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbkI6e1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTpbMCwwLDAsMF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgICAgICBcclxuICAgICB9LFxyXG5cclxuICAgIHN0YXJ0OmZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRhdGFSZWdpb24udXBkYXRlSW5mbyh0aGlzLmluZm9ybWF0aW9uLmRhdGFJbmZvKTtcclxuICAgICAgICB0aGlzLmNhcmRSZWdpb24udXBkYXRlSW5mbyh0aGlzLmluZm9ybWF0aW9uLmNhcmRJbmZvKTtcclxuICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICBhY2NlcHRDaGVjayA6IGZ1bmN0aW9uKCAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8uYnVkZ2V0ICs9IDE7XHJcbiAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5yZXNvdXJjZSArPSAyO1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8uaGVhbHRoICs9IDM7XHJcbiAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5wb3B1bGFyaXR5ICs9IDQ7XHJcblxyXG4gICAgICAgdGhpcy5kYXRhUmVnaW9uLnVwZGF0ZUluZm8odGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mbyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlY2xpbmVDaGVjayA6IGZ1bmN0aW9uKCAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8uYnVkZ2V0IC09IDE7XHJcbiAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5yZXNvdXJjZSAtPSAyO1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8uaGVhbHRoIC09IDM7XHJcbiAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5wb3B1bGFyaXR5IC09IDQ7XHJcblxyXG4gICAgICAgdGhpcy5kYXRhUmVnaW9uLnVwZGF0ZUluZm8odGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mbyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcbik7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1200ff5xNZB8an6xR8Z9p1I', 'NewScript');
// JS/NewScript.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXE5ld1NjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJLENBRVIsQ0EzQkksQ0E2Qkw7O0FBN0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/dataItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bcec9tQbDRBXLrR9f7DsuQT', 'dataItem');
// JS/dataItem.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGRhdGFJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQTtBQUVBQyxFQUFBQSxLQXpCSyxtQkF5QkksQ0FFUixDQTNCSSxDQTZCTDs7QUE3QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/js_dataItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bcec9tQbDRBXLrR9f7DsuQT', 'js_dataItem');
// JS/js_dataItem.js

"use strict";

var dataItem = cc.Class({
  name: 'dataItem',
  properties: {
    itemName: '',
    itemValue: 0
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    dataItems: {
      "default": [],
      type: dataItem
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFJdGVtLmpzIl0sIm5hbWVzIjpbImRhdGFJdGVtIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiaXRlbU5hbWUiLCJpdGVtVmFsdWUiLCJDb21wb25lbnQiLCJkYXRhSXRlbXMiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFFBQVEsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDcEJDLEVBQUFBLElBQUksRUFBRyxVQURhO0FBRXBCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFLEVBREY7QUFFUkMsSUFBQUEsU0FBUyxFQUFFO0FBRkg7QUFGUSxDQUFULENBQWY7QUFRQUwsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNNLFNBRFA7QUFHTEgsRUFBQUEsVUFBVSxFQUFFO0FBQ1JJLElBQUFBLFNBQVMsRUFBQztBQUNOLGlCQUFTLEVBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFVDtBQUZBO0FBREY7QUFIUCxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGRhdGFJdGVtID0gY2MuQ2xhc3Moe1xyXG4gICAgbmFtZSA6ICdkYXRhSXRlbScsXHJcbiAgICBwcm9wZXJ0aWVzIDp7XHJcbiAgICAgICAgaXRlbU5hbWU6ICcnLFxyXG4gICAgICAgIGl0ZW1WYWx1ZTogMCxcclxuICAgIH1cclxufSlcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZGF0YUl0ZW1zOntcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFJdGVtXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/js_dataItemList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bcec9tQbDRBXLrR9f7DsuQT', 'js_dataItemList');
// JS/js_dataItemList.js

"use strict";

var dataItem = cc.Class({
  name: 'dataItem',
  properties: {
    itemName: '',
    itemValue: 0
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    dataItems: {
      "default": [],
      type: dataItem
    },
    dataItemPerfab: cc.Prefab
  },
  onLoad: function onLoad() {
    for (var i = 0; i < this.dataItems.length; i++) {
      var item = cc.instantiate(this.dataItemPerfab);
      this.node.addChild(item); //创建新节点

      var data = this.dataItems[i];
      item.getComponent('js_dataItemTemplate').init({
        itemName: data.itemName,
        itemValue: data.itemValue
      });
    }
  },
  updateValue: function updateValue(info) {
    for (var i = 0; i <= info.length; i++) {
      var item = this.node.children[i];
      item.getComponent('js_dataItemTemplate').updateValue(info[i - 1]); //奇怪了
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFJdGVtTGlzdC5qcyJdLCJuYW1lcyI6WyJkYXRhSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsIml0ZW1OYW1lIiwiaXRlbVZhbHVlIiwiQ29tcG9uZW50IiwiZGF0YUl0ZW1zIiwidHlwZSIsImRhdGFJdGVtUGVyZmFiIiwiUHJlZmFiIiwib25Mb2FkIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsImRhdGEiLCJnZXRDb21wb25lbnQiLCJpbml0IiwidXBkYXRlVmFsdWUiLCJpbmZvIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNwQkMsRUFBQUEsSUFBSSxFQUFHLFVBRGE7QUFFcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUUsRUFERjtBQUVSQyxJQUFBQSxTQUFTLEVBQUU7QUFGSDtBQUZRLENBQVQsQ0FBZjtBQVFBTCxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ00sU0FEUDtBQUdMSCxFQUFBQSxVQUFVLEVBQUU7QUFDUkksSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVMsRUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVUO0FBRkEsS0FERjtBQUtSVSxJQUFBQSxjQUFjLEVBQUdULEVBQUUsQ0FBQ1U7QUFMWixHQUhQO0FBV0xDLEVBQUFBLE1BQU0sRUFBQyxrQkFBVTtBQUNiLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLEtBQUtMLFNBQUwsQ0FBZU0sTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFDQTtBQUNJLFVBQUlFLElBQUksR0FBR2QsRUFBRSxDQUFDZSxXQUFILENBQWUsS0FBS04sY0FBcEIsQ0FBWDtBQUNBLFdBQUtPLElBQUwsQ0FBVUMsUUFBVixDQUFtQkgsSUFBbkIsRUFGSixDQUUrQjs7QUFFM0IsVUFBSUksSUFBSSxHQUFHLEtBQUtYLFNBQUwsQ0FBZUssQ0FBZixDQUFYO0FBQ0FFLE1BQUFBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixxQkFBbEIsRUFBeUNDLElBQXpDLENBQ0k7QUFDSWhCLFFBQUFBLFFBQVEsRUFBR2MsSUFBSSxDQUFDZCxRQURwQjtBQUVJQyxRQUFBQSxTQUFTLEVBQUdhLElBQUksQ0FBQ2I7QUFGckIsT0FESjtBQU1IO0FBQ0osR0F6Qkk7QUEyQkxnQixFQUFBQSxXQUFXLEVBQUMscUJBQVVDLElBQVYsRUFBZ0I7QUFDeEIsU0FBSyxJQUFJVixDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLElBQUVVLElBQUksQ0FBQ1QsTUFBdEIsRUFBOEJELENBQUMsRUFBL0IsRUFDQTtBQUNJLFVBQUlFLElBQUksR0FBRyxLQUFLRSxJQUFMLENBQVVPLFFBQVYsQ0FBbUJYLENBQW5CLENBQVg7QUFDQUUsTUFBQUEsSUFBSSxDQUFDSyxZQUFMLENBQWtCLHFCQUFsQixFQUF5Q0UsV0FBekMsQ0FBcURDLElBQUksQ0FBQ1YsQ0FBQyxHQUFDLENBQUgsQ0FBekQsRUFGSixDQUVxRTtBQUNwRTtBQUNKO0FBakNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgZGF0YUl0ZW0gPSBjYy5DbGFzcyh7XHJcbiAgICBuYW1lIDogJ2RhdGFJdGVtJyxcclxuICAgIHByb3BlcnRpZXMgOntcclxuICAgICAgICBpdGVtTmFtZTogJycsXHJcbiAgICAgICAgaXRlbVZhbHVlOiAwLFxyXG4gICAgfVxyXG59KVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBkYXRhSXRlbXM6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogZGF0YUl0ZW1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFJdGVtUGVyZmFiIDogY2MuUHJlZmFiXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvciggdmFyIGk9MDsgaTx0aGlzLmRhdGFJdGVtcy5sZW5ndGg7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGF0YUl0ZW1QZXJmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaXRlbSk7ICAvL+WIm+W7uuaWsOiKgueCuVxyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFJdGVtc1tpXTtcclxuICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ2pzX2RhdGFJdGVtVGVtcGxhdGUnKS5pbml0KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lIDogZGF0YS5pdGVtTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWUgOiBkYXRhLml0ZW1WYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlVmFsdWU6ZnVuY3Rpb24oIGluZm8gKXtcclxuICAgICAgICBmb3IoIGxldCBpPTA7IGk8PWluZm8ubGVuZ3RoIDtpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdqc19kYXRhSXRlbVRlbXBsYXRlJykudXBkYXRlVmFsdWUoaW5mb1tpLTFdKTsgLy/lpYfmgKrkuoZcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICBcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/dataRegion/js_cardRegion.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2NhcmRSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbmZvbWF0aW9uQm94IiwidHlwZSIsIk5vZGUiLCJpbWFnZUJveCIsInNlbGVjdEJveCIsIm9ubG9hZCIsImZyb20iLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwibmFtZSIsImRhdGUiLCJpbmZvcm1hdGlvbiIsInVwZGF0ZUluZm8iLCJpbmZvbWF0aW9uIiwic2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFTLElBREU7QUFFWEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkUsS0FEUDtBQUtSQyxJQUFBQSxRQUFRLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5GLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZILEtBTEY7QUFTUkUsSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsSUFERjtBQUVQSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRjtBQVRILEdBSFA7QUFrQkxHLEVBQUFBLE1BQU0sRUFBRyxrQkFBVTtBQUNmLFNBQUtDLElBQUwsR0FBWSxLQUFLTixhQUFMLENBQW1CTyxjQUFuQixDQUFrQyxNQUFsQyxFQUEwQ0MsWUFBMUMsQ0FBdURaLEVBQUUsQ0FBQ2EsS0FBMUQsQ0FBWjtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFLVixhQUFMLENBQW1CTyxjQUFuQixDQUFrQyxNQUFsQyxFQUEwQ0MsWUFBMUMsQ0FBdURaLEVBQUUsQ0FBQ2EsS0FBMUQsQ0FBWjtBQUNBLFNBQUtFLElBQUwsR0FBWSxLQUFLWCxhQUFMLENBQW1CTyxjQUFuQixDQUFrQyxNQUFsQyxFQUEwQ0MsWUFBMUMsQ0FBdURaLEVBQUUsQ0FBQ2EsS0FBMUQsQ0FBWjtBQUNBLFNBQUtHLFdBQUwsR0FBbUIsS0FBS1osYUFBTCxDQUFtQk8sY0FBbkIsQ0FBa0MsYUFBbEMsRUFBaURDLFlBQWpELENBQThEWixFQUFFLENBQUNhLEtBQWpFLENBQW5CO0FBQ0gsR0F2Qkk7QUF5QkxJLEVBQUFBLFVBQVUsRUFBRyxvQkFBVUMsVUFBVixFQUFzQjtBQUMvQixTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQTVCSTtBQThCTEEsRUFBQUEsSUFBSSxFQUFHLGdCQUNQO0FBQ0csU0FBS1QsSUFBTCxHQUFZLEtBQUtRLFVBQUwsQ0FBZ0JSLElBQTVCO0FBQ0EsU0FBS0ksSUFBTCxHQUFZLEtBQUtJLFVBQUwsQ0FBZ0JKLElBQTVCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtHLFVBQUwsQ0FBZ0JILElBQTVCO0FBQ0EsU0FBS0csVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCRixXQUFsQztBQUNGO0FBcENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpbmZvbWF0aW9uQm94OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlQm94OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdEJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgb25sb2FkIDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmZyb20gPSB0aGlzLmluZm9tYXRpb25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmcm9tXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pbmZvbWF0aW9uQm94LmdldENoaWxkQnlOYW1lKFwibmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuaW5mb21hdGlvbkJveC5nZXRDaGlsZEJ5TmFtZShcImRhdGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmluZm9ybWF0aW9uID0gdGhpcy5pbmZvbWF0aW9uQm94LmdldENoaWxkQnlOYW1lKFwiaW5mb3JtYXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlSW5mbyA6IGZ1bmN0aW9uKCBpbmZvbWF0aW9uICl7XHJcbiAgICAgICAgdGhpcy5pbmZvbWF0aW9uID0gaW5mb21hdGlvblxyXG4gICAgICAgIHRoaXMuc2hvdygpXHJcbiAgICB9LFxyXG5cclxuICAgIHNob3cgOiBmdW5jdGlvbiggKVxyXG4gICAge1xyXG4gICAgICAgdGhpcy5mcm9tID0gdGhpcy5pbmZvbWF0aW9uLmZyb207XHJcbiAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmluZm9tYXRpb24ubmFtZTtcclxuICAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuaW5mb21hdGlvbi5kYXRlO1xyXG4gICAgICAgdGhpcy5pbmZvbWF0aW9uID0gdGhpcy5pbmZvbWF0aW9uLmluZm9ybWF0aW9uO1xyXG4gICAgfSBcclxuICAgIFxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/dataRegion/js_dataItemList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bcec9tQbDRBXLrR9f7DsuQT', 'js_dataItemList');
// JS/js_dataItemList.js

"use strict";

var dataItem = cc.Class({
  name: 'dataItem',
  properties: {
    itemName: '',
    itemValue: 0
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    dataItems: {
      "default": [],
      type: dataItem
    },
    dataItemPerfab: cc.Prefab
  },
  onLoad: function onLoad() {
    for (var i = 0; i < this.dataItems.length; i++) {
      var item = cc.instantiate(this.dataItemPerfab);
      this.node.addChild(item); //创建新节点

      var data = this.dataItems[i];
      item.getComponent('js_dataItemTemplate').init({
        itemName: data.itemName,
        itemValue: data.itemValue
      });
    }
  },
  updateValue: function updateValue(info) {
    for (var i = 0; i <= info.length; i++) {
      var item = this.node.children[i];
      item.getComponent('js_dataItemTemplate').updateValue(info[i - 1]); //奇怪了
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFJdGVtTGlzdC5qcyJdLCJuYW1lcyI6WyJkYXRhSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsIml0ZW1OYW1lIiwiaXRlbVZhbHVlIiwiQ29tcG9uZW50IiwiZGF0YUl0ZW1zIiwidHlwZSIsImRhdGFJdGVtUGVyZmFiIiwiUHJlZmFiIiwib25Mb2FkIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsImRhdGEiLCJnZXRDb21wb25lbnQiLCJpbml0IiwidXBkYXRlVmFsdWUiLCJpbmZvIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNwQkMsRUFBQUEsSUFBSSxFQUFHLFVBRGE7QUFFcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUUsRUFERjtBQUVSQyxJQUFBQSxTQUFTLEVBQUU7QUFGSDtBQUZRLENBQVQsQ0FBZjtBQVFBTCxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ00sU0FEUDtBQUdMSCxFQUFBQSxVQUFVLEVBQUU7QUFDUkksSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVMsRUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVUO0FBRkEsS0FERjtBQUtSVSxJQUFBQSxjQUFjLEVBQUdULEVBQUUsQ0FBQ1U7QUFMWixHQUhQO0FBV0xDLEVBQUFBLE1BQU0sRUFBQyxrQkFBVTtBQUNiLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLEtBQUtMLFNBQUwsQ0FBZU0sTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFDQTtBQUNJLFVBQUlFLElBQUksR0FBR2QsRUFBRSxDQUFDZSxXQUFILENBQWUsS0FBS04sY0FBcEIsQ0FBWDtBQUNBLFdBQUtPLElBQUwsQ0FBVUMsUUFBVixDQUFtQkgsSUFBbkIsRUFGSixDQUUrQjs7QUFFM0IsVUFBSUksSUFBSSxHQUFHLEtBQUtYLFNBQUwsQ0FBZUssQ0FBZixDQUFYO0FBQ0FFLE1BQUFBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixxQkFBbEIsRUFBeUNDLElBQXpDLENBQ0k7QUFDSWhCLFFBQUFBLFFBQVEsRUFBR2MsSUFBSSxDQUFDZCxRQURwQjtBQUVJQyxRQUFBQSxTQUFTLEVBQUdhLElBQUksQ0FBQ2I7QUFGckIsT0FESjtBQU1IO0FBQ0osR0F6Qkk7QUEyQkxnQixFQUFBQSxXQUFXLEVBQUMscUJBQVVDLElBQVYsRUFBZ0I7QUFDeEIsU0FBSyxJQUFJVixDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLElBQUVVLElBQUksQ0FBQ1QsTUFBdEIsRUFBOEJELENBQUMsRUFBL0IsRUFDQTtBQUNJLFVBQUlFLElBQUksR0FBRyxLQUFLRSxJQUFMLENBQVVPLFFBQVYsQ0FBbUJYLENBQW5CLENBQVg7QUFDQUUsTUFBQUEsSUFBSSxDQUFDSyxZQUFMLENBQWtCLHFCQUFsQixFQUF5Q0UsV0FBekMsQ0FBcURDLElBQUksQ0FBQ1YsQ0FBQyxHQUFDLENBQUgsQ0FBekQsRUFGSixDQUVxRTtBQUNwRTtBQUNKO0FBakNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgZGF0YUl0ZW0gPSBjYy5DbGFzcyh7XHJcbiAgICBuYW1lIDogJ2RhdGFJdGVtJyxcclxuICAgIHByb3BlcnRpZXMgOntcclxuICAgICAgICBpdGVtTmFtZTogJycsXHJcbiAgICAgICAgaXRlbVZhbHVlOiAwLFxyXG4gICAgfVxyXG59KVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBkYXRhSXRlbXM6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogZGF0YUl0ZW1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFJdGVtUGVyZmFiIDogY2MuUHJlZmFiXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvciggdmFyIGk9MDsgaTx0aGlzLmRhdGFJdGVtcy5sZW5ndGg7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGF0YUl0ZW1QZXJmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaXRlbSk7ICAvL+WIm+W7uuaWsOiKgueCuVxyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFJdGVtc1tpXTtcclxuICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ2pzX2RhdGFJdGVtVGVtcGxhdGUnKS5pbml0KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lIDogZGF0YS5pdGVtTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWUgOiBkYXRhLml0ZW1WYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlVmFsdWU6ZnVuY3Rpb24oIGluZm8gKXtcclxuICAgICAgICBmb3IoIGxldCBpPTA7IGk8PWluZm8ubGVuZ3RoIDtpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdqc19kYXRhSXRlbVRlbXBsYXRlJykudXBkYXRlVmFsdWUoaW5mb1tpLTFdKTsgLy/lpYfmgKrkuoZcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICBcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/dataRegion/js_dataRegion.js';
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
  properties: {},
  onLoad: function onLoad() {},
  updateInfo: function updateInfo(infomation) {
    info = [infomation.budget, infomation.resource, infomation.health, infomation.popularity];
    this.node.getComponent('js_dataItemList').updateValue(info);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ1cGRhdGVJbmZvIiwiaW5mb21hdGlvbiIsImluZm8iLCJidWRnZXQiLCJyZXNvdXJjZSIsImhlYWx0aCIsInBvcHVsYXJpdHkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwidXBkYXRlVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE1BQU0sRUFBQyxrQkFBVSxDQUVoQixDQVRJO0FBV0xDLEVBQUFBLFVBQVUsRUFBQyxvQkFBV0MsVUFBWCxFQUF1QjtBQUU5QkMsSUFBQUEsSUFBSSxHQUFHLENBQ0ZELFVBQVUsQ0FBQ0UsTUFEVCxFQUNrQkYsVUFBVSxDQUFDRyxRQUQ3QixFQUVGSCxVQUFVLENBQUNJLE1BRlQsRUFFa0JKLFVBQVUsQ0FBQ0ssVUFGN0IsQ0FBUDtBQUlBLFNBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QixpQkFBdkIsRUFBMENDLFdBQTFDLENBQXNEUCxJQUF0RDtBQUdIO0FBcEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDpmdW5jdGlvbigpe1xyXG4gICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlSW5mbzpmdW5jdGlvbiAoIGluZm9tYXRpb24gKXtcclxuICAgICAgICBcclxuICAgICAgICBpbmZvID0gWyBcclxuICAgICAgICAgICAgIGluZm9tYXRpb24uYnVkZ2V0ICwgaW5mb21hdGlvbi5yZXNvdXJjZSAsXHJcbiAgICAgICAgICAgICBpbmZvbWF0aW9uLmhlYWx0aCAsIGluZm9tYXRpb24ucG9wdWxhcml0eSBdO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KCdqc19kYXRhSXRlbUxpc3QnKS51cGRhdGVWYWx1ZShpbmZvKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------
