
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
require('./assets/JS/cardRegion/js_cardList');
require('./assets/JS/cardRegion/js_cardRegion');
require('./assets/JS/cardRegion/js_cardTemplate');
require('./assets/JS/cardRegion/js_checkButton');
require('./assets/JS/dataRegion/js_dataList');
require('./assets/JS/dataRegion/js_dataRegion');
require('./assets/JS/dataRegion/js_dataTemplate');
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

<<<<<<< Updated upstream
//1: 加载所有游戏部件 与 动画
//2: 存储信息并进行前后端总体交互
var CardRegion = require('js_cardRegion');

var DataRegion = require('js_dataRegion');

=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    //请求后端加载
    //。。。
    //加载完成后得到
    this.information = {
      dataInfo: {
        budget: 4,
        resource: 3,
        health: 2,
        popularity: 1
      }
    };
  },
  start: function start() {
    //this.dataRegion.updateInfo(this.information.dataInfo);
    this.dataRegion.init();
    this.cardRegion.init();
    this.dataRegion.updateInfo(this.information.dataInfo); //设置监听事件

    this.node.on('SelectA', function () {
      console.log('button pressed A and i got it'); //1：ac 2：de

      this.updateData(1); //其他参数略 

      this.updateCard(1); //参数略
    }, this);
    this.node.on('SelectB', function () {
      console.log('button pressed B and i got it'); //1：ac 2：de

      this.updateData(0); //其他参数略 

      this.updateCard(0); //参数略
    }, this); //还不清楚这么用监听事件传递参数，只能这样写
  },
  updateData: function updateData(select) {
    if (select == 1) //select 影响计算
      {
        this.information.dataInfo.budget += 1;
        this.information.dataInfo.resource += 2;
        this.information.dataInfo.health += 3;
        this.information.dataInfo.popularity += 4;
      } else if (select == 0) {
      this.information.dataInfo.budget -= 1;
      this.information.dataInfo.resource -= 2;
      this.information.dataInfo.health -= 3;
      this.information.dataInfo.popularity -= 4;
    }

    this.dataRegion.updateInfo(this.information.dataInfo); //计算完后更新数据
  },
  updateCard: function updateCard(select) {
    //现在只实现显示数组中其他卡牌
    this.cardRegion.getNextCard();
=======
      type: cc.Label
    }
  },
  updateInfo: function updateInfo(infomation) {
    this.infomation = infomation;
    this.show();
  },
  show: function show() {
    this.labelBudget.string = this.infomation.budget + '%';
    this.labelResource.string = this.infomation.resource + '%';
    this.labelHealth.string = this.infomation.health + '%';
    this.labelPopularity.string = this.infomation.popularity + '%';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2hvbWUuanMiXSwibmFtZXMiOlsiQ2FyZFJlZ2lvbiIsInJlcXVpcmUiLCJEYXRhUmVnaW9uIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJob21lQW5pbSIsInR5cGUiLCJBbmltYXRpb24iLCJjYXJkUmVnaW9uIiwiZGF0YVJlZ2lvbiIsImJhY2tTdGFnZSIsIk5vZGUiLCJvbkxvYWQiLCJpbmZvcm1hdGlvbiIsImRhdGFJbmZvIiwiYnVkZ2V0IiwicmVzb3VyY2UiLCJoZWFsdGgiLCJwb3B1bGFyaXR5Iiwic3RhcnQiLCJpbml0IiwidXBkYXRlSW5mbyIsIm5vZGUiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVEYXRhIiwidXBkYXRlQ2FyZCIsInNlbGVjdCIsImdldE5leHRDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBRUFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUU7QUFBRztBQUNULGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERjtBQUtSQyxJQUFBQSxVQUFVLEVBQUU7QUFBRztBQUNYLGlCQUFTLElBREQ7QUFFUkYsTUFBQUEsSUFBSSxFQUFFUjtBQUZFLEtBTEo7QUFTUlcsSUFBQUEsVUFBVSxFQUFFO0FBQUc7QUFDWCxpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRU47QUFGRSxLQVRKO0FBYVJVLElBQUFBLFNBQVMsRUFBRTtBQUFFO0FBQ1QsaUJBQVMsSUFERjtBQUVQSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7QUFGRjtBQWJILEdBRlA7QUFxQkpDLEVBQUFBLE1BQU0sRUFBQyxrQkFBWTtBQUNoQjtBQUVBO0FBQ0E7QUFDQSxTQUFLQyxXQUFMLEdBQW1CO0FBQ2ZDLE1BQUFBLFFBQVEsRUFBRztBQUNQQyxRQUFBQSxNQUFNLEVBQUMsQ0FEQTtBQUVQQyxRQUFBQSxRQUFRLEVBQUMsQ0FGRjtBQUdQQyxRQUFBQSxNQUFNLEVBQUUsQ0FIRDtBQUlQQyxRQUFBQSxVQUFVLEVBQUM7QUFKSjtBQURJLEtBQW5CO0FBWUYsR0F0Q0c7QUF3Q0xDLEVBQUFBLEtBQUssRUFBQyxpQkFBWTtBQUNkO0FBQ0EsU0FBS1YsVUFBTCxDQUFnQlcsSUFBaEI7QUFDQSxTQUFLWixVQUFMLENBQWdCWSxJQUFoQjtBQUNBLFNBQUtYLFVBQUwsQ0FBZ0JZLFVBQWhCLENBQTJCLEtBQUtSLFdBQUwsQ0FBaUJDLFFBQTVDLEVBSmMsQ0FNZDs7QUFDQSxTQUFLUSxJQUFMLENBQVVDLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLFlBQWM7QUFDbENDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLCtCQUFiLEVBRGtDLENBQ2U7O0FBQ2pELFdBQUtDLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFGa0MsQ0FFZjs7QUFDbkIsV0FBS0MsVUFBTCxDQUFnQixDQUFoQixFQUhrQyxDQUdmO0FBRXBCLEtBTEgsRUFLSSxJQUxKO0FBT0EsU0FBS0wsSUFBTCxDQUFVQyxFQUFWLENBQWEsU0FBYixFQUF3QixZQUFjO0FBQ3RDQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSwrQkFBYixFQURzQyxDQUNXOztBQUNqRCxXQUFLQyxVQUFMLENBQWdCLENBQWhCLEVBRnNDLENBRW5COztBQUNuQixXQUFLQyxVQUFMLENBQWdCLENBQWhCLEVBSHNDLENBR25CO0FBRWxCLEtBTEQsRUFLRSxJQUxGLEVBZGMsQ0FvQmQ7QUFDSCxHQTdESTtBQWdFTEQsRUFBQUEsVUFBVSxFQUFHLG9CQUFTRSxNQUFULEVBQ2I7QUFDRyxRQUFLQSxNQUFNLElBQUksQ0FBZixFQUFtQjtBQUNsQjtBQUNJLGFBQUtmLFdBQUwsQ0FBaUJDLFFBQWpCLENBQTBCQyxNQUExQixJQUFvQyxDQUFwQztBQUNBLGFBQUtGLFdBQUwsQ0FBaUJDLFFBQWpCLENBQTBCRSxRQUExQixJQUFzQyxDQUF0QztBQUNBLGFBQUtILFdBQUwsQ0FBaUJDLFFBQWpCLENBQTBCRyxNQUExQixJQUFvQyxDQUFwQztBQUNBLGFBQUtKLFdBQUwsQ0FBaUJDLFFBQWpCLENBQTBCSSxVQUExQixJQUF3QyxDQUF4QztBQUNILE9BTkYsTUFPTSxJQUFLVSxNQUFNLElBQUksQ0FBZixFQUNMO0FBQ0ksV0FBS2YsV0FBTCxDQUFpQkMsUUFBakIsQ0FBMEJDLE1BQTFCLElBQW9DLENBQXBDO0FBQ0EsV0FBS0YsV0FBTCxDQUFpQkMsUUFBakIsQ0FBMEJFLFFBQTFCLElBQXNDLENBQXRDO0FBQ0EsV0FBS0gsV0FBTCxDQUFpQkMsUUFBakIsQ0FBMEJHLE1BQTFCLElBQW9DLENBQXBDO0FBQ0EsV0FBS0osV0FBTCxDQUFpQkMsUUFBakIsQ0FBMEJJLFVBQTFCLElBQXdDLENBQXhDO0FBQ0g7O0FBR0YsU0FBS1QsVUFBTCxDQUFnQlksVUFBaEIsQ0FBMkIsS0FBS1IsV0FBTCxDQUFpQkMsUUFBNUMsRUFqQkgsQ0FpQjJEO0FBQzFELEdBbkZJO0FBcUZMYSxFQUFBQSxVQUFVLEVBQUcsb0JBQVNDLE1BQVQsRUFDYjtBQUNJO0FBQ0EsU0FBS3BCLFVBQUwsQ0FBZ0JxQixXQUFoQjtBQUNIO0FBekZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vMTog5Yqg6L295omA5pyJ5ri45oiP6YOo5Lu2IOS4jiDliqjnlLtcclxuLy8yOiDlrZjlgqjkv6Hmga/lubbov5vooYzliY3lkI7nq6/mgLvkvZPkuqTkupJcclxuXHJcbmNvbnN0IENhcmRSZWdpb24gPSByZXF1aXJlKCdqc19jYXJkUmVnaW9uJyk7XHJcbmNvbnN0IERhdGFSZWdpb24gPSByZXF1aXJlKCdqc19kYXRhUmVnaW9uJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaG9tZUFuaW06IHsgIC8v5Yqo55S7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkFuaW1hdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZFJlZ2lvbjogeyAgLy/ljaHniYfljLrln59cclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogQ2FyZFJlZ2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVJlZ2lvbjogeyAgLy/mlbDlgLzljLrln59cclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogRGF0YVJlZ2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFja1N0YWdlOiB7IC8v5ZCO56uvXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAgb25Mb2FkOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL+ivt+axguWQjuerr+WKoOi9vVxyXG5cclxuICAgICAgICAvL+OAguOAguOAglxyXG4gICAgICAgIC8v5Yqg6L295a6M5oiQ5ZCO5b6X5YiwXHJcbiAgICAgICAgdGhpcy5pbmZvcm1hdGlvbiA9IHtcclxuICAgICAgICAgICAgZGF0YUluZm8gOiB7XHJcbiAgICAgICAgICAgICAgICBidWRnZXQ6NCAsXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZTozICxcclxuICAgICAgICAgICAgICAgIGhlYWx0aDogMixcclxuICAgICAgICAgICAgICAgIHBvcHVsYXJpdHk6MSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICB9LFxyXG5cclxuICAgIHN0YXJ0OmZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3RoaXMuZGF0YVJlZ2lvbi51cGRhdGVJbmZvKHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8pO1xyXG4gICAgICAgIHRoaXMuZGF0YVJlZ2lvbi5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5jYXJkUmVnaW9uLmluaXQoKTtcclxuICAgICAgICB0aGlzLmRhdGFSZWdpb24udXBkYXRlSW5mbyh0aGlzLmluZm9ybWF0aW9uLmRhdGFJbmZvKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7nm5HlkKzkuovku7ZcclxuICAgICAgICB0aGlzLm5vZGUub24oJ1NlbGVjdEEnLCBmdW5jdGlvbiAoICApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdidXR0b24gcHJlc3NlZCBBIGFuZCBpIGdvdCBpdCcgKTsgIC8vMe+8mmFjIDLvvJpkZVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGEoMSk7Ly/lhbbku5blj4LmlbDnlaUgXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FyZCgxKTsvL+WPguaVsOeVpVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdTZWxlY3RCJywgZnVuY3Rpb24gKCAgKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdidXR0b24gcHJlc3NlZCBCIGFuZCBpIGdvdCBpdCcgKTsgIC8vMe+8mmFjIDLvvJpkZVxyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgwKTsvL+WFtuS7luWPguaVsOeVpSBcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhcmQoMCk7Ly/lj4LmlbDnlaVcclxuICAgICAgICBcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgICAgIC8v6L+Y5LiN5riF5qWa6L+Z5LmI55So55uR5ZCs5LqL5Lu25Lyg6YCS5Y+C5pWw77yM5Y+q6IO96L+Z5qC35YaZXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB1cGRhdGVEYXRhIDogZnVuY3Rpb24oc2VsZWN0KVxyXG4gICAge1xyXG4gICAgICAgaWYgKCBzZWxlY3QgPT0gMSApIC8vc2VsZWN0IOW9seWTjeiuoeeul1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5idWRnZXQgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5yZXNvdXJjZSArPSAyO1xyXG4gICAgICAgICAgICB0aGlzLmluZm9ybWF0aW9uLmRhdGFJbmZvLmhlYWx0aCArPSAzO1xyXG4gICAgICAgICAgICB0aGlzLmluZm9ybWF0aW9uLmRhdGFJbmZvLnBvcHVsYXJpdHkgKz0gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIHNlbGVjdCA9PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8uYnVkZ2V0IC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8ucmVzb3VyY2UgLT0gMjtcclxuICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5oZWFsdGggLT0gMztcclxuICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5wb3B1bGFyaXR5IC09IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgdGhpcy5kYXRhUmVnaW9uLnVwZGF0ZUluZm8odGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mbyk7ICAvL+iuoeeul+WujOWQjuabtOaWsOaVsOaNrlxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVDYXJkIDogZnVuY3Rpb24oc2VsZWN0KVxyXG4gICAge1xyXG4gICAgICAgIC8v546w5Zyo5Y+q5a6e546w5pi+56S65pWw57uE5Lit5YW25LuW5Y2h54mMXHJcbiAgICAgICAgdGhpcy5jYXJkUmVnaW9uLmdldE5leHRDYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuKTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/cardRegion/js_cardRegion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a07cfsekWlKD74jG5MyaKwo', 'js_cardRegion');
// JS/cardRegion/js_cardRegion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onload: function onload() {},
  init: function init() {
    this.node.getComponent('js_cardList').init();
  },
  getNextCard: function getNextCard() {
    this.node.getComponent('js_cardList').getNextCard();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGNhcmRSZWdpb25cXGpzX2NhcmRSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbmxvYWQiLCJpbml0Iiwibm9kZSIsImdldENvbXBvbmVudCIsImdldE5leHRDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxNQUFNLEVBQUcsa0JBQVUsQ0FHbEIsQ0FWSTtBQVlMQyxFQUFBQSxJQUFJLEVBQUcsZ0JBQVk7QUFFZixTQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUIsYUFBdkIsRUFBc0NGLElBQXRDO0FBQ0gsR0FmSTtBQWlCTEcsRUFBQUEsV0FBVyxFQUFHLHVCQUNkO0FBQ0ksU0FBS0YsSUFBTCxDQUFVQyxZQUFWLENBQXVCLGFBQXZCLEVBQXNDQyxXQUF0QztBQUNIO0FBcEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgb25sb2FkIDogZnVuY3Rpb24oKXtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0IDogZnVuY3Rpb24oICApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoJ2pzX2NhcmRMaXN0JykuaW5pdCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXROZXh0Q2FyZCA6IGZ1bmN0aW9uKCApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudCgnanNfY2FyZExpc3QnKS5nZXROZXh0Q2FyZCgpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG59KTtcclxuIl19
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbEJ1ZGdldCIsInR5cGUiLCJMYWJlbCIsImxhYmVsUmVzb3VyY2UiLCJsYWJlbEhlYWx0aCIsImxhYmVsUG9wdWxhcml0eSIsInVwZGF0ZUluZm8iLCJpbmZvbWF0aW9uIiwic2hvdyIsInN0cmluZyIsImJ1ZGdldCIsInJlc291cmNlIiwiaGVhbHRoIiwicG9wdWxhcml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkEsS0FETDtBQUtSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZFLEtBTFA7QUFTUkUsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQVRMO0FBYVJHLElBQUFBLGVBQWUsRUFBRTtBQUNiLGlCQUFTLElBREk7QUFFYkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkk7QUFiVCxHQUhQO0FBeUJMSSxFQUFBQSxVQUFVLEVBQUMsb0JBQVdDLFVBQVgsRUFBdUI7QUFDOUIsU0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxJQUFMO0FBQ0gsR0E1Qkk7QUE4QkxBLEVBQUFBLElBQUksRUFBRyxnQkFDUDtBQUNJLFNBQUtSLFdBQUwsQ0FBaUJTLE1BQWpCLEdBQTBCLEtBQUtGLFVBQUwsQ0FBZ0JHLE1BQWhCLEdBQXlCLEdBQW5EO0FBQ0EsU0FBS1AsYUFBTCxDQUFtQk0sTUFBbkIsR0FBNEIsS0FBS0YsVUFBTCxDQUFnQkksUUFBaEIsR0FBMkIsR0FBdkQ7QUFDQSxTQUFLUCxXQUFMLENBQWlCSyxNQUFqQixHQUEwQixLQUFLRixVQUFMLENBQWdCSyxNQUFoQixHQUF5QixHQUFuRDtBQUNBLFNBQUtQLGVBQUwsQ0FBcUJJLE1BQXJCLEdBQThCLEtBQUtGLFVBQUwsQ0FBZ0JNLFVBQWhCLEdBQTZCLEdBQTNEO0FBQ0g7QUFwQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGFiZWxCdWRnZXQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsUmVzb3VyY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsSGVhbHRoOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYWJlbFBvcHVsYXJpdHk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgIFxyXG5cclxuICAgIHVwZGF0ZUluZm86ZnVuY3Rpb24gKCBpbmZvbWF0aW9uICl7XHJcbiAgICAgICAgdGhpcy5pbmZvbWF0aW9uID0gaW5mb21hdGlvblxyXG4gICAgICAgIHRoaXMuc2hvdygpXHJcbiAgICB9LFxyXG5cclxuICAgIHNob3cgOiBmdW5jdGlvbiggKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGFiZWxCdWRnZXQuc3RyaW5nID0gdGhpcy5pbmZvbWF0aW9uLmJ1ZGdldCArICclJztcclxuICAgICAgICB0aGlzLmxhYmVsUmVzb3VyY2Uuc3RyaW5nID0gdGhpcy5pbmZvbWF0aW9uLnJlc291cmNlICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxIZWFsdGguc3RyaW5nID0gdGhpcy5pbmZvbWF0aW9uLmhlYWx0aCArICclJztcclxuICAgICAgICB0aGlzLmxhYmVsUG9wdWxhcml0eS5zdHJpbmcgPSB0aGlzLmluZm9tYXRpb24ucG9wdWxhcml0eSArICclJztcclxuICAgIH0gXHJcblxyXG4gICAgXHJcblxyXG59KTtcclxuIl19
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  moveOff: function moveOff() {
    this.node.active = false;
  },
  moveUp: function moveUp() {
    this.node.active = true;
=======
  updateInfo: function updateInfo(infomation) {
    this.infomation = infomation;
>>>>>>> Stashed changes
  }
  /**/

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
<<<<<<< Updated upstream
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGNhcmRSZWdpb25cXGpzX2NhcmRUZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluZm9ybWF0aW9uIiwiTm9kZSIsImltYWdlIiwic2VsZWN0IiwiaW5pdCIsImRhdGEiLCJpc1RvcENhcmQiLCJub2RlIiwiYWN0aXZlIiwiZnJvbSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJuYW1lIiwiZGF0ZSIsInN0cmluZyIsIm1vdmVPZmYiLCJtb3ZlVXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUdKLEVBQUUsQ0FBQ0ssSUFEVDtBQUVSQyxJQUFBQSxLQUFLLEVBQUdOLEVBQUUsQ0FBQ0ssSUFGSDtBQUdSRSxJQUFBQSxNQUFNLEVBQUlQLEVBQUUsQ0FBQ0s7QUFITCxHQUhQO0FBU0xHLEVBQUFBLElBQUksRUFBRyxjQUFVQyxJQUFWLEVBQWlCQyxTQUFqQixFQUE0QjtBQUMvQixRQUFJQSxTQUFTLElBQUksQ0FBakIsRUFDQSxLQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkIsQ0FGK0IsQ0FJL0I7QUFDQTs7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBS1QsV0FBTCxDQUFpQlUsY0FBakIsQ0FBZ0MsTUFBaEMsRUFBd0NDLFlBQXhDLENBQXFEZixFQUFFLENBQUNnQixLQUF4RCxDQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtiLFdBQUwsQ0FBaUJVLGNBQWpCLENBQWdDLE1BQWhDLEVBQXdDQyxZQUF4QyxDQUFxRGYsRUFBRSxDQUFDZ0IsS0FBeEQsQ0FBWjtBQUNBLFNBQUtFLElBQUwsR0FBWSxLQUFLZCxXQUFMLENBQWlCVSxjQUFqQixDQUFnQyxNQUFoQyxFQUF3Q0MsWUFBeEMsQ0FBcURmLEVBQUUsQ0FBQ2dCLEtBQXhELENBQVo7QUFDQSxTQUFLWixXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJVLGNBQWpCLENBQWdDLGFBQWhDLEVBQStDQyxZQUEvQyxDQUE0RGYsRUFBRSxDQUFDZ0IsS0FBL0QsQ0FBbkI7QUFHQSxTQUFLSCxJQUFMLENBQVVNLE1BQVYsR0FBbUJWLElBQUksQ0FBQ0ksSUFBeEI7QUFDQSxTQUFLSSxJQUFMLENBQVVFLE1BQVYsR0FBb0JWLElBQUksQ0FBQ1EsSUFBekI7QUFDQSxTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBb0JWLElBQUksQ0FBQ1MsSUFBekI7QUFDQSxTQUFLZCxXQUFMLENBQWlCZSxNQUFqQixHQUEyQlYsSUFBSSxDQUFDTCxXQUFoQyxDQWYrQixDQWtCL0I7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNILEdBakNJO0FBb0NMZ0IsRUFBQUEsT0FBTyxFQUFHLG1CQUNWO0FBQ0ksU0FBS1QsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsR0F2Q0k7QUF5Q0xTLEVBQUFBLE1BQU0sRUFBRyxrQkFDVDtBQUNJLFNBQUtWLElBQUwsQ0FBVUMsTUFBVixHQUFtQixJQUFuQjtBQUNIO0FBNUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpbmZvcm1hdGlvbiA6IGNjLk5vZGUsXHJcbiAgICAgICAgaW1hZ2UgOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNlbGVjdCA6ICBjYy5Ob2RlXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQgOiBmdW5jdGlvbiggZGF0YSAsIGlzVG9wQ2FyZCApe1xyXG4gICAgICAgIGlmKCBpc1RvcENhcmQgPT0gMCkgXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL+eOsOWcqOWPquS8mui/meS5iOWGmVxyXG4gICAgICAgIC8v5L+u5pS5aW5mb3JtYXRpb27ljLpcclxuICAgICAgICB0aGlzLmZyb20gPSB0aGlzLmluZm9ybWF0aW9uLmdldENoaWxkQnlOYW1lKFwiZnJvbVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaW5mb3JtYXRpb24uZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcImRhdGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmluZm9ybWF0aW9uID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcImluZm9ybWF0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmZyb20uc3RyaW5nID0gZGF0YS5mcm9tO1xyXG4gICAgICAgIHRoaXMubmFtZS5zdHJpbmcgID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuZGF0ZS5zdHJpbmcgID0gZGF0YS5kYXRlO1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uc3RyaW5nICA9IGRhdGEuaW5mb3JtYXRpb247XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5L+u5pS5aW1n5Yy65Z+fXHJcbiAgICAgICAgLy90aGlzLmltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcGljVXJsO1xyXG5cclxuICAgICAgICAvL+S/ruaUuVNlbGVjdOWMuuWfn1xyXG4gICAgICAgIC8vdGhpcy5zZWxlY3QuZ2V0Q2hpbGRCeU5hbWUoXCJhY2NlcHRCdXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdGlybmcgPSBcIkFjY2VwdFwiO1xyXG4gICAgICAgIC8vdGhpcy5zZWxlY3QuZ2V0Q2hpbGRCeU5hbWUoXCJkZWNsaW5lQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3Rpcm5nID0gXCJEZWNsaW5lXCI7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBtb3ZlT2ZmIDogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZVVwIDogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG59KTtcclxuIl19
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2NhcmRSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbmZvbWF0aW9uQm94IiwidHlwZSIsIm5vZGUiLCJpbWFnZUJveCIsInNlbGVjdEJveCIsInVwZGF0ZUluZm8iLCJpbmZvbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsYUFBYSxFQUFFO0FBQ1gsaUJBQVMsSUFERTtBQUVYQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRSxLQURQO0FBS1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FMRjtBQVNSRSxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZGO0FBVEgsR0FIUDtBQWtCTEcsRUFBQUEsVUFBVSxFQUFHLG9CQUFVQyxVQUFWLEVBQXNCO0FBQy9CLFNBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7QUFHRDs7QUF2QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGluZm9tYXRpb25Cb3g6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2Mubm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2VCb3g6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2Mubm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0Qm94OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLm5vZGVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVJbmZvIDogZnVuY3Rpb24oIGluZm9tYXRpb24gKXtcclxuICAgICAgICB0aGlzLmluZm9tYXRpb24gPSBpbmZvbWF0aW9uXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgLyoqL1xyXG5cclxuXHJcbn0pO1xyXG4iXX0=
>>>>>>> Stashed changes
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
<<<<<<< Updated upstream
                    var __filename = 'preview-scripts/assets/JS/cardRegion/js_cardList.js';
=======
                    var __filename = 'preview-scripts/assets/JS/js_home.js';
>>>>>>> Stashed changes
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
<<<<<<< Updated upstream
cc._RF.push(module, '23db2Z8ELpDlosv9uchR3Ft', 'js_cardList');
// JS/cardRegion/js_cardList.js

"use strict";

var cardItem = cc.Class({
  name: 'cardItem',
  properties: {
    id: 0,
    from: "0",
    name: "0",
    date: "0/00/0000",
    information: "000000000",
    picUrl: '000',
    optionA: [0, 0, 0, 0],
    optionB: [0, 0, 0, 0]
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    cardItems: {
      "default": [],
      type: cardItem
    },
    cardPerfab: cc.Prefab
  },
  init: function init() {
    //初始话时会初始化 多 张卡牌
    //和data区差不多，改变了函数名称  
    for (var i = 0; i < this.cardItems.length; i++) {
      var item = cc.instantiate(this.cardPerfab);
      this.node.addChild(item); //创建新节点

      var data = this.cardItems[i];
      var isTopCard = 0;
      if (i == 1) isTopCard = 1; //顶端卡牌才显示

      item.getComponent('js_cardTemplate').init(data, isTopCard);
    }
  },
  getNextCard: function getNextCard() {
    for (var i = 1; i <= this.cardItems.length; i++) {
      var data = this.cardItems[i]; //这里存放的是数据

      var item = this.node.children[i]; //这里是节点

      if (item.active == true) //找到顶端的牌
        {
          item.getComponent('js_cardTemplate').moveOff();
          var nextCard = (i + 1) % this.cardItems.length;
          if (nextCard == 0) nextCard = this.cardItems.length; //console.log("i am in js_cardlist , the top card is:" + i + " \n i will get next card!: " + nextCard );

          nextItem = this.node.children[nextCard];
          nextItem.getComponent('js_cardTemplate').moveUp();
          break;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGNhcmRSZWdpb25cXGpzX2NhcmRMaXN0LmpzIl0sIm5hbWVzIjpbImNhcmRJdGVtIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiaWQiLCJmcm9tIiwiZGF0ZSIsImluZm9ybWF0aW9uIiwicGljVXJsIiwib3B0aW9uQSIsIm9wdGlvbkIiLCJDb21wb25lbnQiLCJjYXJkSXRlbXMiLCJ0eXBlIiwiY2FyZFBlcmZhYiIsIlByZWZhYiIsImluaXQiLCJpIiwibGVuZ3RoIiwiaXRlbSIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwiZGF0YSIsImlzVG9wQ2FyZCIsImdldENvbXBvbmVudCIsImdldE5leHRDYXJkIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJtb3ZlT2ZmIiwibmV4dENhcmQiLCJuZXh0SXRlbSIsIm1vdmVVcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3BCQyxFQUFBQSxJQUFJLEVBQUcsVUFEYTtBQUVwQkMsRUFBQUEsVUFBVSxFQUFDO0FBQ1BDLElBQUFBLEVBQUUsRUFBRyxDQURFO0FBRVBDLElBQUFBLElBQUksRUFBQyxHQUZFO0FBR1BILElBQUFBLElBQUksRUFBQyxHQUhFO0FBSVBJLElBQUFBLElBQUksRUFBQyxXQUpFO0FBS1BDLElBQUFBLFdBQVcsRUFBQyxXQUxMO0FBTVBDLElBQUFBLE1BQU0sRUFBQyxLQU5BO0FBT1BDLElBQUFBLE9BQU8sRUFBQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FQRDtBQVFQQyxJQUFBQSxPQUFPLEVBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQO0FBUkQ7QUFGUyxDQUFULENBQWY7QUFjQVYsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNXLFNBRFA7QUFHTFIsRUFBQUEsVUFBVSxFQUFFO0FBQ1JTLElBQUFBLFNBQVMsRUFBQztBQUNOLGlCQUFTLEVBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFZDtBQUZBLEtBREY7QUFLUmUsSUFBQUEsVUFBVSxFQUFFZCxFQUFFLENBQUNlO0FBTFAsR0FIUDtBQVdMQyxFQUFBQSxJQUFJLEVBQUMsZ0JBQVk7QUFDYjtBQUNBO0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUMsS0FBS0wsU0FBTCxDQUFlTSxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUNBO0FBQ0ksVUFBSUUsSUFBSSxHQUFHbkIsRUFBRSxDQUFDb0IsV0FBSCxDQUFlLEtBQUtOLFVBQXBCLENBQVg7QUFDQSxXQUFLTyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJILElBQW5CLEVBRkosQ0FFK0I7O0FBRTNCLFVBQUlJLElBQUksR0FBRyxLQUFLWCxTQUFMLENBQWVLLENBQWYsQ0FBWDtBQUNBLFVBQUlPLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFVBQUdQLENBQUMsSUFBRSxDQUFOLEVBQVNPLFNBQVMsR0FBRyxDQUFaLENBTmIsQ0FNNEI7O0FBQ3hCTCxNQUFBQSxJQUFJLENBQUNNLFlBQUwsQ0FBa0IsaUJBQWxCLEVBQXFDVCxJQUFyQyxDQUEwQ08sSUFBMUMsRUFBK0NDLFNBQS9DO0FBQ0g7QUFFSixHQXpCSTtBQTJCTEUsRUFBQUEsV0FBVyxFQUFDLHVCQUFVO0FBR2xCLFNBQUssSUFBSVQsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxJQUFFLEtBQUtMLFNBQUwsQ0FBZU0sTUFBaEMsRUFBd0NELENBQUMsRUFBekMsRUFDQTtBQUNJLFVBQUlNLElBQUksR0FBRyxLQUFLWCxTQUFMLENBQWVLLENBQWYsQ0FBWCxDQURKLENBQ21DOztBQUMvQixVQUFJRSxJQUFJLEdBQUcsS0FBS0UsSUFBTCxDQUFVTSxRQUFWLENBQW1CVixDQUFuQixDQUFYLENBRkosQ0FFc0M7O0FBQ2xDLFVBQUlFLElBQUksQ0FBQ1MsTUFBTCxJQUFlLElBQW5CLEVBQTBCO0FBQzFCO0FBRUlULFVBQUFBLElBQUksQ0FBQ00sWUFBTCxDQUFrQixpQkFBbEIsRUFBcUNJLE9BQXJDO0FBQ0EsY0FBSUMsUUFBUSxHQUFHLENBQUNiLENBQUMsR0FBQyxDQUFILElBQU0sS0FBS0wsU0FBTCxDQUFlTSxNQUFwQztBQUNBLGNBQUlZLFFBQVEsSUFBSSxDQUFoQixFQUFvQkEsUUFBUSxHQUFHLEtBQUtsQixTQUFMLENBQWVNLE1BQTFCLENBSnhCLENBTUk7O0FBRUFhLFVBQUFBLFFBQVEsR0FBRyxLQUFLVixJQUFMLENBQVVNLFFBQVYsQ0FBbUJHLFFBQW5CLENBQVg7QUFDQUMsVUFBQUEsUUFBUSxDQUFDTixZQUFULENBQXNCLGlCQUF0QixFQUF5Q08sTUFBekM7QUFFRDtBQUNGO0FBQ0o7QUFDSjtBQWpESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2FyZEl0ZW0gPSBjYy5DbGFzcyh7XHJcbiAgICBuYW1lIDogJ2NhcmRJdGVtJyxcclxuICAgIHByb3BlcnRpZXM6e1xyXG4gICAgICAgIGlkIDogMCxcclxuICAgICAgICBmcm9tOlwiMFwiICxcclxuICAgICAgICBuYW1lOlwiMFwiLFxyXG4gICAgICAgIGRhdGU6XCIwLzAwLzAwMDBcIixcclxuICAgICAgICBpbmZvcm1hdGlvbjpcIjAwMDAwMDAwMFwiLFxyXG4gICAgICAgIHBpY1VybDonMDAwJyxcclxuICAgICAgICBvcHRpb25BOlswLDAsMCwwXSxcclxuICAgICAgICBvcHRpb25COlswLDAsMCwwXSxcclxuICAgIH0sXHJcbn0pXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNhcmRJdGVtczp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBjYXJkSXRlbVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZFBlcmZhYjogY2MuUHJlZmFiXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQ6ZnVuY3Rpb24gKCkgeyAgXHJcbiAgICAgICAgLy/liJ3lp4vor53ml7bkvJrliJ3lp4vljJYg5aSaIOW8oOWNoeeJjFxyXG4gICAgICAgIC8v5ZKMZGF0YeWMuuW3ruS4jeWkmu+8jOaUueWPmOS6huWHveaVsOWQjeensCAgXHJcbiAgICAgICAgZm9yKCB2YXIgaT0wOyBpPHRoaXMuY2FyZEl0ZW1zLmxlbmd0aDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkUGVyZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0pOyAgLy/liJvlu7rmlrDoioLngrlcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5jYXJkSXRlbXNbaV07XHJcbiAgICAgICAgICAgIGxldCBpc1RvcENhcmQgPSAwO1xyXG4gICAgICAgICAgICBpZihpPT0xKSBpc1RvcENhcmQgPSAxOyAvL+mhtuerr+WNoeeJjOaJjeaYvuekulxyXG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudCgnanNfY2FyZFRlbXBsYXRlJykuaW5pdChkYXRhLGlzVG9wQ2FyZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TmV4dENhcmQ6ZnVuY3Rpb24oKXtcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciggdmFyIGk9MTsgaTw9dGhpcy5jYXJkSXRlbXMubGVuZ3RoOyBpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNhcmRJdGVtc1tpXTsgIC8v6L+Z6YeM5a2Y5pS+55qE5piv5pWw5o2uXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldOyAvL+i/memHjOaYr+iKgueCuVxyXG4gICAgICAgICAgICBpZiggaXRlbS5hY3RpdmUgPT0gdHJ1ZSApIC8v5om+5Yiw6aG256uv55qE54mMXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudCgnanNfY2FyZFRlbXBsYXRlJykubW92ZU9mZigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRDYXJkID0gKGkrMSkldGhpcy5jYXJkSXRlbXMubGVuZ3RoIDtcclxuICAgICAgICAgICAgICAgIGlmKCBuZXh0Q2FyZCA9PSAwICkgbmV4dENhcmQgPSB0aGlzLmNhcmRJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImkgYW0gaW4ganNfY2FyZGxpc3QgLCB0aGUgdG9wIGNhcmQgaXM6XCIgKyBpICsgXCIgXFxuIGkgd2lsbCBnZXQgbmV4dCBjYXJkITogXCIgKyBuZXh0Q2FyZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIG5leHRJdGVtID0gdGhpcy5ub2RlLmNoaWxkcmVuW25leHRDYXJkXTtcclxuICAgICAgICAgICAgICAgIG5leHRJdGVtLmdldENvbXBvbmVudCgnanNfY2FyZFRlbXBsYXRlJykubW92ZVVwKCk7XHJcblxyXG4gICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/dataRegion/js_dataList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bcec9tQbDRBXLrR9f7DsuQT', 'js_dataList');
// JS/dataRegion/js_dataList.js

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
  init: function init() {
    for (var i = 0; i < this.dataItems.length; i++) {
      var item = cc.instantiate(this.dataItemPerfab);
      this.node.addChild(item); //创建新节点

      var data = this.dataItems[i];
      item.getComponent('js_dataTemplate').init({
        itemName: data.itemName,
        itemValue: data.itemValue
      });
    }
  },
  updateValue: function updateValue(info) {
    console.log("i am updateValue in js_datalist" + info);

    for (var i = 0; i <= info.length; i++) {
      var item = this.node.children[i];
      item.getComponent('js_dataTemplate').updateValue(info[i - 1]); //奇怪了
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGRhdGFSZWdpb25cXGpzX2RhdGFMaXN0LmpzIl0sIm5hbWVzIjpbImRhdGFJdGVtIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiaXRlbU5hbWUiLCJpdGVtVmFsdWUiLCJDb21wb25lbnQiLCJkYXRhSXRlbXMiLCJ0eXBlIiwiZGF0YUl0ZW1QZXJmYWIiLCJQcmVmYWIiLCJpbml0IiwiaSIsImxlbmd0aCIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsImRhdGEiLCJnZXRDb21wb25lbnQiLCJ1cGRhdGVWYWx1ZSIsImluZm8iLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNwQkMsRUFBQUEsSUFBSSxFQUFHLFVBRGE7QUFFcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUUsRUFERjtBQUVSQyxJQUFBQSxTQUFTLEVBQUU7QUFGSDtBQUZRLENBQVQsQ0FBZjtBQVFBTCxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ00sU0FEUDtBQUdMSCxFQUFBQSxVQUFVLEVBQUU7QUFDUkksSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVMsRUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVUO0FBRkEsS0FERjtBQUtSVSxJQUFBQSxjQUFjLEVBQUdULEVBQUUsQ0FBQ1U7QUFMWixHQUhQO0FBV0xDLEVBQUFBLElBQUksRUFBQyxnQkFBVTtBQUNYLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLEtBQUtMLFNBQUwsQ0FBZU0sTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFDQTtBQUNJLFVBQUlFLElBQUksR0FBR2QsRUFBRSxDQUFDZSxXQUFILENBQWUsS0FBS04sY0FBcEIsQ0FBWDtBQUNBLFdBQUtPLElBQUwsQ0FBVUMsUUFBVixDQUFtQkgsSUFBbkIsRUFGSixDQUUrQjs7QUFFM0IsVUFBSUksSUFBSSxHQUFHLEtBQUtYLFNBQUwsQ0FBZUssQ0FBZixDQUFYO0FBQ0FFLE1BQUFBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixpQkFBbEIsRUFBcUNSLElBQXJDLENBQ0k7QUFDSVAsUUFBQUEsUUFBUSxFQUFHYyxJQUFJLENBQUNkLFFBRHBCO0FBRUlDLFFBQUFBLFNBQVMsRUFBR2EsSUFBSSxDQUFDYjtBQUZyQixPQURKO0FBTUg7QUFDSixHQXpCSTtBQTJCTGUsRUFBQUEsV0FBVyxFQUFDLHFCQUFVQyxJQUFWLEVBQWdCO0FBQ3hCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FBb0NGLElBQWhEOztBQUNBLFNBQUssSUFBSVQsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxJQUFFUyxJQUFJLENBQUNSLE1BQXRCLEVBQThCRCxDQUFDLEVBQS9CLEVBQ0E7QUFDSSxVQUFJRSxJQUFJLEdBQUcsS0FBS0UsSUFBTCxDQUFVUSxRQUFWLENBQW1CWixDQUFuQixDQUFYO0FBQ0FFLE1BQUFBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixpQkFBbEIsRUFBcUNDLFdBQXJDLENBQWlEQyxJQUFJLENBQUNULENBQUMsR0FBQyxDQUFILENBQXJELEVBRkosQ0FFaUU7QUFDaEU7QUFDSjtBQWxDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGRhdGFJdGVtID0gY2MuQ2xhc3Moe1xyXG4gICAgbmFtZSA6ICdkYXRhSXRlbScsXHJcbiAgICBwcm9wZXJ0aWVzIDp7XHJcbiAgICAgICAgaXRlbU5hbWU6ICcnLFxyXG4gICAgICAgIGl0ZW1WYWx1ZTogMCxcclxuICAgIH1cclxufSlcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZGF0YUl0ZW1zOntcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFJdGVtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhSXRlbVBlcmZhYiA6IGNjLlByZWZhYlxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZm9yKCB2YXIgaT0wOyBpPHRoaXMuZGF0YUl0ZW1zLmxlbmd0aDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5kYXRhSXRlbVBlcmZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpdGVtKTsgIC8v5Yib5bu65paw6IqC54K5XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YUl0ZW1zW2ldO1xyXG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudCgnanNfZGF0YVRlbXBsYXRlJykuaW5pdChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZSA6IGRhdGEuaXRlbU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVZhbHVlIDogZGF0YS5pdGVtVmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVZhbHVlOmZ1bmN0aW9uKCBpbmZvICl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpIGFtIHVwZGF0ZVZhbHVlIGluIGpzX2RhdGFsaXN0XCIgKyBpbmZvKTtcclxuICAgICAgICBmb3IoIGxldCBpPTA7IGk8PWluZm8ubGVuZ3RoIDtpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdqc19kYXRhVGVtcGxhdGUnKS51cGRhdGVWYWx1ZShpbmZvW2ktMV0pOyAvL+Wlh+aAquS6hlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgIFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
=======
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
    this.dataRegion.updateInfo(this.information.dataInfo); //this.cardRegion.updateInfo(this.information.cardInfo);
  },
  acceptCheck: function acceptCheck() {
    this.infomation.dataInfo.budget += 1;
    this.infomation.dataInfo.resource += 2;
    this.infomation.dataInfo.health += 3;
    this.infomation.dataInfo.popularity += 4;
    this.dataRegion.updateInfo(this.information.dataInfo);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGRhdGFSZWdpb25cXGpzX2RhdGFUZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIml0ZW1OYW1lIiwiTGFiZWwiLCJpdGVtVmFsdWUiLCJpbml0IiwiZGF0YSIsInN0cmluZyIsInVwZGF0ZVZhbHVlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUdKLEVBQUUsQ0FBQ0ssS0FETjtBQUVSQyxJQUFBQSxTQUFTLEVBQUdOLEVBQUUsQ0FBQ0s7QUFGUCxHQUhQO0FBUUxFLEVBQUFBLElBQUksRUFBRyxjQUFVQyxJQUFWLEVBQ1A7QUFDSSxTQUFLSixRQUFMLENBQWNLLE1BQWQsR0FBdUJELElBQUksQ0FBQ0osUUFBNUI7QUFDQSxTQUFLRSxTQUFMLENBQWVHLE1BQWYsR0FBd0JELElBQUksQ0FBQ0YsU0FBTCxHQUFpQixHQUF6QyxDQUZKLENBR0k7QUFDSCxHQWJJO0FBZUxJLEVBQUFBLFdBQVcsRUFBRyxxQkFBVUMsS0FBVixFQUNkO0FBQ0ksU0FBS0wsU0FBTCxDQUFlRyxNQUFmLEdBQXdCRSxLQUFLLEdBQUcsR0FBaEM7QUFDSDtBQWxCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpdGVtTmFtZSA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGl0ZW1WYWx1ZSA6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0IDogZnVuY3Rpb24oIGRhdGEgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXRlbU5hbWUuc3RyaW5nID0gZGF0YS5pdGVtTmFtZSA7XHJcbiAgICAgICAgdGhpcy5pdGVtVmFsdWUuc3RyaW5nID0gZGF0YS5pdGVtVmFsdWUgKyBcIiVcIiA7XHJcbiAgICAgICAgLy9zZXQgZm9udCBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlVmFsdWUgOiBmdW5jdGlvbiggdmFsdWUgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXRlbVZhbHVlLnN0cmluZyA9IHZhbHVlICsgJyUnO1xyXG4gICAgfVxyXG59KTtcclxuIl19
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
// JS/dataRegion/js_dataRegion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  init: function init() {
    this.node.getComponent('js_dataList').init();
  },
  updateInfo: function updateInfo(infomation) {
    info = [infomation.budget, infomation.resource, infomation.health, infomation.popularity];
    this.node.getComponent('js_dataList').updateValue(info);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGRhdGFSZWdpb25cXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJpbml0Iiwibm9kZSIsImdldENvbXBvbmVudCIsInVwZGF0ZUluZm8iLCJpbmZvbWF0aW9uIiwiaW5mbyIsImJ1ZGdldCIsInJlc291cmNlIiwiaGVhbHRoIiwicG9wdWxhcml0eSIsInVwZGF0ZVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxNQUFNLEVBQUMsa0JBQVUsQ0FFaEIsQ0FUSTtBQVdMQyxFQUFBQSxJQUFJLEVBQUMsZ0JBQVU7QUFDWCxTQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUIsYUFBdkIsRUFBc0NGLElBQXRDO0FBQ0gsR0FiSTtBQWVMRyxFQUFBQSxVQUFVLEVBQUMsb0JBQVdDLFVBQVgsRUFBdUI7QUFFOUJDLElBQUFBLElBQUksR0FBRyxDQUNGRCxVQUFVLENBQUNFLE1BRFQsRUFDa0JGLFVBQVUsQ0FBQ0csUUFEN0IsRUFFRkgsVUFBVSxDQUFDSSxNQUZULEVBRWtCSixVQUFVLENBQUNLLFVBRjdCLENBQVA7QUFJQSxTQUFLUixJQUFMLENBQVVDLFlBQVYsQ0FBdUIsYUFBdkIsRUFBc0NRLFdBQXRDLENBQWtETCxJQUFsRDtBQUdIO0FBeEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDpmdW5jdGlvbigpe1xyXG4gICBcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoJ2pzX2RhdGFMaXN0JykuaW5pdCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVJbmZvOmZ1bmN0aW9uICggaW5mb21hdGlvbiApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGluZm8gPSBbIFxyXG4gICAgICAgICAgICAgaW5mb21hdGlvbi5idWRnZXQgLCBpbmZvbWF0aW9uLnJlc291cmNlICxcclxuICAgICAgICAgICAgIGluZm9tYXRpb24uaGVhbHRoICwgaW5mb21hdGlvbi5wb3B1bGFyaXR5IF07XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoJ2pzX2RhdGFMaXN0JykudXBkYXRlVmFsdWUoaW5mbyk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/cardRegion/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15158r3AxtAf63pITgiOQVy', 'NewScript');
// JS/cardRegion/NewScript.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGNhcmRSZWdpb25cXE5ld1NjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJLENBRVIsQ0EzQkksQ0E2Qkw7O0FBN0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
cc._RF.push(module, 'c69b9CcWvJOBpmXvdhDx1MO', 'NewScript');
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
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2hvbWUuanMiXSwibmFtZXMiOlsiQ2FyZFJlZ2lvbiIsInJlcXVpcmUiLCJEYXRhUmVnaW9uIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJob21lQW5pbSIsInR5cGUiLCJBbmltYXRpb24iLCJjYXJkUmVnaW9uIiwiZGF0YVJlZ2lvbiIsImJhY2tTdGFnZSIsIk5vZGUiLCJvbkxvYWQiLCJpbmZvcm1hdGlvbiIsImdhbWVJbmZvIiwicGxheWVySWQiLCJjdXJDYXJkSWQiLCJzdG9yeUlkIiwic2VsbGVjdGVkIiwiZGF0YUluZm8iLCJidWRnZXQiLCJyZXNvdXJjZSIsImhlYWx0aCIsInBvcHVsYXJpdHkiLCJjYXJkSW5mbyIsImZyb20iLCJuYW1lIiwiZGF0ZSIsInBpY1VybCIsIm9wdGlvbkEiLCJjaGFuZ2UiLCJvcHRpb25CIiwic3RhcnQiLCJ1cGRhdGVJbmZvIiwiYWNjZXB0Q2hlY2siLCJpbmZvbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBRUFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBSUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUU7QUFBRztBQUNULGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERjtBQUtSQyxJQUFBQSxVQUFVLEVBQUU7QUFBRztBQUNYLGlCQUFTLElBREQ7QUFFUkYsTUFBQUEsSUFBSSxFQUFFUjtBQUZFLEtBTEo7QUFTUlcsSUFBQUEsVUFBVSxFQUFFO0FBQUc7QUFDWCxpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRU47QUFGRSxLQVRKO0FBYVJVLElBQUFBLFNBQVMsRUFBRTtBQUFFO0FBQ1QsaUJBQVMsSUFERjtBQUVQSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7QUFGRjtBQWJILEdBSlA7QUF1QkpDLEVBQUFBLE1BQU0sRUFBQyxrQkFBWTtBQUNoQjtBQUNBLFNBQUtDLFdBQUwsR0FDQTtBQUNJO0FBQ0FDLE1BQUFBLFFBQVEsRUFBRztBQUNQQyxRQUFBQSxRQUFRLEVBQUMsQ0FERjtBQUVQQyxRQUFBQSxTQUFTLEVBQUMsQ0FGSDtBQUdQQyxRQUFBQSxPQUFPLEVBQUMsQ0FIRDtBQUlQQyxRQUFBQSxTQUFTLEVBQUM7QUFKSCxPQUZmO0FBUUk7QUFDQUMsTUFBQUEsUUFBUSxFQUFHO0FBQ1BDLFFBQUFBLE1BQU0sRUFBQyxDQURBO0FBRVBDLFFBQUFBLFFBQVEsRUFBQyxDQUZGO0FBR1BDLFFBQUFBLE1BQU0sRUFBRSxDQUhEO0FBSVBDLFFBQUFBLFVBQVUsRUFBQztBQUpKLE9BVGY7QUFlSTtBQUNBQyxNQUFBQSxRQUFRLEVBQUc7QUFDUEMsUUFBQUEsSUFBSSxFQUFDLEdBREU7QUFFUEMsUUFBQUEsSUFBSSxFQUFDLEdBRkU7QUFHUEMsUUFBQUEsSUFBSSxFQUFDLFdBSEU7QUFJUGQsUUFBQUEsV0FBVyxFQUFDLFdBSkw7QUFLUGUsUUFBQUEsTUFBTSxFQUFDLEtBTEE7QUFNUEMsUUFBQUEsT0FBTyxFQUFDO0FBQ0pDLFVBQUFBLE1BQU0sRUFBQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVA7QUFESCxTQU5EO0FBU1BDLFFBQUFBLE9BQU8sRUFBQztBQUNKRCxVQUFBQSxNQUFNLEVBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQO0FBREg7QUFURDtBQWhCZixLQURBO0FBZ0NGLEdBekRHO0FBMkRMRSxFQUFBQSxLQUFLLEVBQUMsaUJBQVk7QUFDZCxTQUFLdkIsVUFBTCxDQUFnQndCLFVBQWhCLENBQTJCLEtBQUtwQixXQUFMLENBQWlCTSxRQUE1QyxFQURjLENBRWQ7QUFDSCxHQTlESTtBQWtFTGUsRUFBQUEsV0FBVyxFQUFHLHVCQUFhO0FBRXZCLFNBQUtDLFVBQUwsQ0FBZ0JoQixRQUFoQixDQUF5QkMsTUFBekIsSUFBbUMsQ0FBbkM7QUFDQSxTQUFLZSxVQUFMLENBQWdCaEIsUUFBaEIsQ0FBeUJFLFFBQXpCLElBQXFDLENBQXJDO0FBQ0EsU0FBS2MsVUFBTCxDQUFnQmhCLFFBQWhCLENBQXlCRyxNQUF6QixJQUFtQyxDQUFuQztBQUNBLFNBQUthLFVBQUwsQ0FBZ0JoQixRQUFoQixDQUF5QkksVUFBekIsSUFBdUMsQ0FBdkM7QUFFRCxTQUFLZCxVQUFMLENBQWdCd0IsVUFBaEIsQ0FBMkIsS0FBS3BCLFdBQUwsQ0FBaUJNLFFBQTVDO0FBQ0Y7QUExRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8xOiDliqDovb3miYDmnInmuLjmiI/pg6jku7Yg5LiOIOWKqOeUu1xyXG4vLzI6IOWtmOWCqOS/oeaBr+W5tui/m+ihjOWJjeWQjuerr+aAu+S9k+S6pOS6klxyXG5cclxuY29uc3QgQ2FyZFJlZ2lvbiA9IHJlcXVpcmUoJ2pzX2NhcmRSZWdpb24nKTtcclxuY29uc3QgRGF0YVJlZ2lvbiA9IHJlcXVpcmUoJ2pzX2RhdGFSZWdpb24nKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhvbWVBbmltOiB7ICAvL+WKqOeUu1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BbmltYXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcmRSZWdpb246IHsgIC8v5Y2h54mH5Yy65Z+fXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IENhcmRSZWdpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFSZWdpb246IHsgIC8v5pWw5YC85Yy65Z+fXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IERhdGFSZWdpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhY2tTdGFnZTogeyAvL+WQjuerr1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgIG9uTG9hZDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy/lgqjlrZjmuLjmiI/pnIDopoHnmoTkv6Hmga9cclxuICAgICAgICB0aGlzLmluZm9ybWF0aW9uID1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5ZKM5ZCO56uv5Lqk5LqS55qE5L+h5oGvXHJcbiAgICAgICAgICAgIGdhbWVJbmZvIDoge1xyXG4gICAgICAgICAgICAgICAgcGxheWVySWQ6MCxcclxuICAgICAgICAgICAgICAgIGN1ckNhcmRJZDowLFxyXG4gICAgICAgICAgICAgICAgc3RvcnlJZDowLFxyXG4gICAgICAgICAgICAgICAgc2VsbGVjdGVkOicwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy/lkozmlbDmja7ljLrkuqTkupLnmoTkv6Hmga9cclxuICAgICAgICAgICAgZGF0YUluZm8gOiB7XHJcbiAgICAgICAgICAgICAgICBidWRnZXQ6MCAsXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZTowICxcclxuICAgICAgICAgICAgICAgIGhlYWx0aDogMCxcclxuICAgICAgICAgICAgICAgIHBvcHVsYXJpdHk6MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL+WSjOWNoeeJjOWMuuS6pOS6kueahOS/oeaBr1xyXG4gICAgICAgICAgICBjYXJkSW5mbyA6IHtcclxuICAgICAgICAgICAgICAgIGZyb206XCIwXCIgLFxyXG4gICAgICAgICAgICAgICAgbmFtZTpcIjBcIixcclxuICAgICAgICAgICAgICAgIGRhdGU6XCIwLzAwLzAwMDBcIixcclxuICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uOlwiMDAwMDAwMDAwXCIsXHJcbiAgICAgICAgICAgICAgICBwaWNVcmw6JzAwMCcsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25BOntcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6WzAsMCwwLDBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uQjp7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOlswLDAsMCwwXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIFxyXG4gICAgIH0sXHJcblxyXG4gICAgc3RhcnQ6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVJlZ2lvbi51cGRhdGVJbmZvKHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8pO1xyXG4gICAgICAgIC8vdGhpcy5jYXJkUmVnaW9uLnVwZGF0ZUluZm8odGhpcy5pbmZvcm1hdGlvbi5jYXJkSW5mbyk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgYWNjZXB0Q2hlY2sgOiBmdW5jdGlvbiggICkge1xyXG5cclxuICAgICAgICB0aGlzLmluZm9tYXRpb24uZGF0YUluZm8uYnVkZ2V0ICs9IDE7XHJcbiAgICAgICAgdGhpcy5pbmZvbWF0aW9uLmRhdGFJbmZvLnJlc291cmNlICs9IDI7XHJcbiAgICAgICAgdGhpcy5pbmZvbWF0aW9uLmRhdGFJbmZvLmhlYWx0aCArPSAzO1xyXG4gICAgICAgIHRoaXMuaW5mb21hdGlvbi5kYXRhSW5mby5wb3B1bGFyaXR5ICs9IDQ7XHJcblxyXG4gICAgICAgdGhpcy5kYXRhUmVnaW9uLnVwZGF0ZUluZm8odGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mbyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcbik7XHJcbiJdfQ==
>>>>>>> Stashed changes
//------QC-SOURCE-SPLIT------
