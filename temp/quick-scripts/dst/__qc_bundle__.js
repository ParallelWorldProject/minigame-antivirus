
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
require('./assets/JS/js_cardRegion');
require('./assets/JS/js_dataItemList');
require('./assets/JS/js_dataItemTemplate');
require('./assets/JS/js_dataRegion');
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
  onLoad: function onLoad() {},
  updateInfo: function updateInfo(infomation) {
    this.infomation = infomation;
    this.show();
  },
  show: function show() {
    this.labelBudget.string = this.infomation.budget + '%';
    this.labelResource.string = this.infomation.resource + '%';
    this.labelHealth.string = this.infomation.health + '%';
    this.labelPopularity.string = this.infomation.popularity + '%';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbEJ1ZGdldCIsInR5cGUiLCJMYWJlbCIsImxhYmVsUmVzb3VyY2UiLCJsYWJlbEhlYWx0aCIsImxhYmVsUG9wdWxhcml0eSIsIm9uTG9hZCIsInVwZGF0ZUluZm8iLCJpbmZvbWF0aW9uIiwic2hvdyIsInN0cmluZyIsImJ1ZGdldCIsInJlc291cmNlIiwiaGVhbHRoIiwicG9wdWxhcml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkEsS0FETDtBQUtSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZFLEtBTFA7QUFTUkUsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQVRMO0FBYVJHLElBQUFBLGVBQWUsRUFBRTtBQUNiLGlCQUFTLElBREk7QUFFYkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkk7QUFiVCxHQUhQO0FBdUJMSSxFQUFBQSxNQUFNLEVBQUMsa0JBQVUsQ0FFaEIsQ0F6Qkk7QUEyQkxDLEVBQUFBLFVBQVUsRUFBQyxvQkFBV0MsVUFBWCxFQUF1QjtBQUM5QixTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQTlCSTtBQWdDTEEsRUFBQUEsSUFBSSxFQUFHLGdCQUNQO0FBQ0ksU0FBS1QsV0FBTCxDQUFpQlUsTUFBakIsR0FBMEIsS0FBS0YsVUFBTCxDQUFnQkcsTUFBaEIsR0FBeUIsR0FBbkQ7QUFDQSxTQUFLUixhQUFMLENBQW1CTyxNQUFuQixHQUE0QixLQUFLRixVQUFMLENBQWdCSSxRQUFoQixHQUEyQixHQUF2RDtBQUNBLFNBQUtSLFdBQUwsQ0FBaUJNLE1BQWpCLEdBQTBCLEtBQUtGLFVBQUwsQ0FBZ0JLLE1BQWhCLEdBQXlCLEdBQW5EO0FBQ0EsU0FBS1IsZUFBTCxDQUFxQkssTUFBckIsR0FBOEIsS0FBS0YsVUFBTCxDQUFnQk0sVUFBaEIsR0FBNkIsR0FBM0Q7QUFDSDtBQXRDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbEJ1ZGdldDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxSZXNvdXJjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxIZWFsdGg6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsUG9wdWxhcml0eToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDpmdW5jdGlvbigpe1xyXG4gICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlSW5mbzpmdW5jdGlvbiAoIGluZm9tYXRpb24gKXtcclxuICAgICAgICB0aGlzLmluZm9tYXRpb24gPSBpbmZvbWF0aW9uXHJcbiAgICAgICAgdGhpcy5zaG93KClcclxuICAgIH0sXHJcblxyXG4gICAgc2hvdyA6IGZ1bmN0aW9uKCApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYWJlbEJ1ZGdldC5zdHJpbmcgPSB0aGlzLmluZm9tYXRpb24uYnVkZ2V0ICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxSZXNvdXJjZS5zdHJpbmcgPSB0aGlzLmluZm9tYXRpb24ucmVzb3VyY2UgKyAnJSc7XHJcbiAgICAgICAgdGhpcy5sYWJlbEhlYWx0aC5zdHJpbmcgPSB0aGlzLmluZm9tYXRpb24uaGVhbHRoICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxQb3B1bGFyaXR5LnN0cmluZyA9IHRoaXMuaW5mb21hdGlvbi5wb3B1bGFyaXR5ICsgJyUnO1xyXG4gICAgfSBcclxuXHJcbiAgICBcclxuXHJcbn0pO1xyXG4iXX0=
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
        budget: 0,
        resource: 0,
        health: 0,
        popularity: 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2hvbWUuanMiXSwibmFtZXMiOlsiQ2FyZFJlZ2lvbiIsInJlcXVpcmUiLCJEYXRhUmVnaW9uIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJob21lQW5pbSIsInR5cGUiLCJBbmltYXRpb24iLCJjYXJkUmVnaW9uIiwiZGF0YVJlZ2lvbiIsImJhY2tTdGFnZSIsIk5vZGUiLCJvbkxvYWQiLCJpbmZvcm1hdGlvbiIsImdhbWVJbmZvIiwicGxheWVySWQiLCJjdXJDYXJkSWQiLCJzdG9yeUlkIiwic2VsbGVjdGVkIiwiZGF0YUluZm8iLCJidWRnZXQiLCJyZXNvdXJjZSIsImhlYWx0aCIsInBvcHVsYXJpdHkiLCJjYXJkSW5mbyIsImZyb20iLCJuYW1lIiwiZGF0ZSIsInBpY1VybCIsIm9wdGlvbkEiLCJjaGFuZ2UiLCJvcHRpb25CIiwic3RhcnQiLCJ1cGRhdGVJbmZvIiwiYWNjZXB0Q2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFFQUUsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFJTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRTtBQUFHO0FBQ1QsaUJBQVMsSUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQURGO0FBS1JDLElBQUFBLFVBQVUsRUFBRTtBQUFHO0FBQ1gsaUJBQVMsSUFERDtBQUVSRixNQUFBQSxJQUFJLEVBQUVSO0FBRkUsS0FMSjtBQVNSVyxJQUFBQSxVQUFVLEVBQUU7QUFBRztBQUNYLGlCQUFTLElBREQ7QUFFUkgsTUFBQUEsSUFBSSxFQUFFTjtBQUZFLEtBVEo7QUFhUlUsSUFBQUEsU0FBUyxFQUFFO0FBQUU7QUFDVCxpQkFBUyxJQURGO0FBRVBKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDVTtBQUZGO0FBYkgsR0FKUDtBQXVCSkMsRUFBQUEsTUFBTSxFQUFDLGtCQUFZO0FBQ2hCO0FBQ0EsU0FBS0MsV0FBTCxHQUNBO0FBQ0k7QUFDQUMsTUFBQUEsUUFBUSxFQUFHO0FBQ1BDLFFBQUFBLFFBQVEsRUFBQyxDQURGO0FBRVBDLFFBQUFBLFNBQVMsRUFBQyxDQUZIO0FBR1BDLFFBQUFBLE9BQU8sRUFBQyxDQUhEO0FBSVBDLFFBQUFBLFNBQVMsRUFBQztBQUpILE9BRmY7QUFRSTtBQUNBQyxNQUFBQSxRQUFRLEVBQUc7QUFDUEMsUUFBQUEsTUFBTSxFQUFDLENBREE7QUFFUEMsUUFBQUEsUUFBUSxFQUFDLENBRkY7QUFHUEMsUUFBQUEsTUFBTSxFQUFFLENBSEQ7QUFJUEMsUUFBQUEsVUFBVSxFQUFDO0FBSkosT0FUZjtBQWVJO0FBQ0FDLE1BQUFBLFFBQVEsRUFBRztBQUNQQyxRQUFBQSxJQUFJLEVBQUMsR0FERTtBQUVQQyxRQUFBQSxJQUFJLEVBQUMsR0FGRTtBQUdQQyxRQUFBQSxJQUFJLEVBQUMsV0FIRTtBQUlQZCxRQUFBQSxXQUFXLEVBQUMsV0FKTDtBQUtQZSxRQUFBQSxNQUFNLEVBQUMsS0FMQTtBQU1QQyxRQUFBQSxPQUFPLEVBQUM7QUFDSkMsVUFBQUEsTUFBTSxFQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUDtBQURILFNBTkQ7QUFTUEMsUUFBQUEsT0FBTyxFQUFDO0FBQ0pELFVBQUFBLE1BQU0sRUFBQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVA7QUFESDtBQVREO0FBaEJmLEtBREE7QUFnQ0YsR0F6REc7QUEyRExFLEVBQUFBLEtBQUssRUFBQyxpQkFBWTtBQUNkLFNBQUt2QixVQUFMLENBQWdCd0IsVUFBaEIsQ0FBMkIsS0FBS3BCLFdBQUwsQ0FBaUJNLFFBQTVDO0FBQ0EsU0FBS1gsVUFBTCxDQUFnQnlCLFVBQWhCLENBQTJCLEtBQUtwQixXQUFMLENBQWlCVyxRQUE1QztBQUNILEdBOURJO0FBa0VMVSxFQUFBQSxXQUFXLEVBQUcsdUJBQWE7QUFFdkIsU0FBS3JCLFdBQUwsQ0FBaUJNLFFBQWpCLENBQTBCQyxNQUExQixJQUFvQyxDQUFwQztBQUNBLFNBQUtQLFdBQUwsQ0FBaUJNLFFBQWpCLENBQTBCRSxRQUExQixJQUFzQyxDQUF0QztBQUNBLFNBQUtSLFdBQUwsQ0FBaUJNLFFBQWpCLENBQTBCRyxNQUExQixJQUFvQyxDQUFwQztBQUNBLFNBQUtULFdBQUwsQ0FBaUJNLFFBQWpCLENBQTBCSSxVQUExQixJQUF3QyxDQUF4QztBQUVELFNBQUtkLFVBQUwsQ0FBZ0J3QixVQUFoQixDQUEyQixLQUFLcEIsV0FBTCxDQUFpQk0sUUFBNUM7QUFDRjtBQTFFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLzE6IOWKoOi9veaJgOaciea4uOaIj+mDqOS7tiDkuI4g5Yqo55S7XHJcbi8vMjog5a2Y5YKo5L+h5oGv5bm26L+b6KGM5YmN5ZCO56uv5oC75L2T5Lqk5LqSXHJcblxyXG5jb25zdCBDYXJkUmVnaW9uID0gcmVxdWlyZSgnanNfY2FyZFJlZ2lvbicpO1xyXG5jb25zdCBEYXRhUmVnaW9uID0gcmVxdWlyZSgnanNfZGF0YVJlZ2lvbicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaG9tZUFuaW06IHsgIC8v5Yqo55S7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkFuaW1hdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZFJlZ2lvbjogeyAgLy/ljaHniYfljLrln59cclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogQ2FyZFJlZ2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVJlZ2lvbjogeyAgLy/mlbDlgLzljLrln59cclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogRGF0YVJlZ2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFja1N0YWdlOiB7IC8v5ZCO56uvXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAgb25Mb2FkOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL+WCqOWtmOa4uOaIj+mcgOimgeeahOS/oeaBr1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24gPVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/lkozlkI7nq6/kuqTkupLnmoTkv6Hmga9cclxuICAgICAgICAgICAgZ2FtZUluZm8gOiB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJJZDowLFxyXG4gICAgICAgICAgICAgICAgY3VyQ2FyZElkOjAsXHJcbiAgICAgICAgICAgICAgICBzdG9yeUlkOjAsXHJcbiAgICAgICAgICAgICAgICBzZWxsZWN0ZWQ6JzAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL+WSjOaVsOaNruWMuuS6pOS6kueahOS/oeaBr1xyXG4gICAgICAgICAgICBkYXRhSW5mbyA6IHtcclxuICAgICAgICAgICAgICAgIGJ1ZGdldDowICxcclxuICAgICAgICAgICAgICAgIHJlc291cmNlOjAgLFxyXG4gICAgICAgICAgICAgICAgaGVhbHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgcG9wdWxhcml0eTowXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8v5ZKM5Y2h54mM5Yy65Lqk5LqS55qE5L+h5oGvXHJcbiAgICAgICAgICAgIGNhcmRJbmZvIDoge1xyXG4gICAgICAgICAgICAgICAgZnJvbTpcIjBcIiAsXHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiMFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTpcIjAvMDAvMDAwMFwiLFxyXG4gICAgICAgICAgICAgICAgaW5mb3JtYXRpb246XCIwMDAwMDAwMDBcIixcclxuICAgICAgICAgICAgICAgIHBpY1VybDonMDAwJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbkE6e1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTpbMCwwLDAsMF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcHRpb25COntcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6WzAsMCwwLDBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgXHJcbiAgICAgfSxcclxuXHJcbiAgICBzdGFydDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhUmVnaW9uLnVwZGF0ZUluZm8odGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mbyk7XHJcbiAgICAgICAgdGhpcy5jYXJkUmVnaW9uLnVwZGF0ZUluZm8odGhpcy5pbmZvcm1hdGlvbi5jYXJkSW5mbyk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgYWNjZXB0Q2hlY2sgOiBmdW5jdGlvbiggICkge1xyXG5cclxuICAgICAgICB0aGlzLmluZm9ybWF0aW9uLmRhdGFJbmZvLmJ1ZGdldCArPSAxO1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8ucmVzb3VyY2UgKz0gMjtcclxuICAgICAgICB0aGlzLmluZm9ybWF0aW9uLmRhdGFJbmZvLmhlYWx0aCArPSAzO1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8ucG9wdWxhcml0eSArPSA0O1xyXG5cclxuICAgICAgIHRoaXMuZGF0YVJlZ2lvbi51cGRhdGVJbmZvKHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG4pO1xyXG4iXX0=
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
      var data = this.dataItems[i];
      this.node.addChild(item);
      item.getComponent('js_dataItemTemplate').init({
        itemName: data.itemName,
        itemValue: data.itemValue
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFJdGVtTGlzdC5qcyJdLCJuYW1lcyI6WyJkYXRhSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsIml0ZW1OYW1lIiwiaXRlbVZhbHVlIiwiQ29tcG9uZW50IiwiZGF0YUl0ZW1zIiwidHlwZSIsImRhdGFJdGVtUGVyZmFiIiwiUHJlZmFiIiwib25Mb2FkIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsImRhdGEiLCJub2RlIiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFFBQVEsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDcEJDLEVBQUFBLElBQUksRUFBRyxVQURhO0FBRXBCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFLEVBREY7QUFFUkMsSUFBQUEsU0FBUyxFQUFFO0FBRkg7QUFGUSxDQUFULENBQWY7QUFRQUwsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNNLFNBRFA7QUFHTEgsRUFBQUEsVUFBVSxFQUFFO0FBQ1JJLElBQUFBLFNBQVMsRUFBQztBQUNOLGlCQUFTLEVBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFVDtBQUZBLEtBREY7QUFLUlUsSUFBQUEsY0FBYyxFQUFHVCxFQUFFLENBQUNVO0FBTFosR0FIUDtBQVdMQyxFQUFBQSxNQUFNLEVBQUMsa0JBQVU7QUFDYixTQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQyxLQUFLTCxTQUFMLENBQWVNLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQ0E7QUFDSSxVQUFJRSxJQUFJLEdBQUdkLEVBQUUsQ0FBQ2UsV0FBSCxDQUFlLEtBQUtOLGNBQXBCLENBQVg7QUFDQSxVQUFJTyxJQUFJLEdBQUcsS0FBS1QsU0FBTCxDQUFlSyxDQUFmLENBQVg7QUFDQSxXQUFLSyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJKLElBQW5CO0FBQ0FBLE1BQUFBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixxQkFBbEIsRUFBeUNDLElBQXpDLENBQ0k7QUFDSWhCLFFBQUFBLFFBQVEsRUFBR1ksSUFBSSxDQUFDWixRQURwQjtBQUVJQyxRQUFBQSxTQUFTLEVBQUdXLElBQUksQ0FBQ1g7QUFGckIsT0FESjtBQU1IO0FBQ0o7QUF4QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBkYXRhSXRlbSA9IGNjLkNsYXNzKHtcclxuICAgIG5hbWUgOiAnZGF0YUl0ZW0nLFxyXG4gICAgcHJvcGVydGllcyA6e1xyXG4gICAgICAgIGl0ZW1OYW1lOiAnJyxcclxuICAgICAgICBpdGVtVmFsdWU6IDAsXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGRhdGFJdGVtczp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBkYXRhSXRlbVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YUl0ZW1QZXJmYWIgOiBjYy5QcmVmYWJcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZm9yKCB2YXIgaT0wOyBpPHRoaXMuZGF0YUl0ZW1zLmxlbmd0aDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5kYXRhSXRlbVBlcmZhYik7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhSXRlbXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ2pzX2RhdGFJdGVtVGVtcGxhdGUnKS5pbml0KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lIDogZGF0YS5pdGVtTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWUgOiBkYXRhLml0ZW1WYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgXHJcbn0pO1xyXG4iXX0=
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
//------QC-SOURCE-SPLIT------
