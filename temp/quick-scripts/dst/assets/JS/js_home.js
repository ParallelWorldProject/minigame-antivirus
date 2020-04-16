
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2hvbWUuanMiXSwibmFtZXMiOlsiQ2FyZFJlZ2lvbiIsInJlcXVpcmUiLCJEYXRhUmVnaW9uIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJob21lQW5pbSIsInR5cGUiLCJBbmltYXRpb24iLCJjYXJkUmVnaW9uIiwiZGF0YVJlZ2lvbiIsImJhY2tTdGFnZSIsIk5vZGUiLCJvbkxvYWQiLCJpbmZvcm1hdGlvbiIsImRhdGFJbmZvIiwiYnVkZ2V0IiwicmVzb3VyY2UiLCJoZWFsdGgiLCJwb3B1bGFyaXR5Iiwic3RhcnQiLCJpbml0IiwidXBkYXRlSW5mbyIsIm5vZGUiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVEYXRhIiwidXBkYXRlQ2FyZCIsInNlbGVjdCIsImdldE5leHRDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBRUFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUU7QUFBRztBQUNULGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERjtBQUtSQyxJQUFBQSxVQUFVLEVBQUU7QUFBRztBQUNYLGlCQUFTLElBREQ7QUFFUkYsTUFBQUEsSUFBSSxFQUFFUjtBQUZFLEtBTEo7QUFTUlcsSUFBQUEsVUFBVSxFQUFFO0FBQUc7QUFDWCxpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRU47QUFGRSxLQVRKO0FBYVJVLElBQUFBLFNBQVMsRUFBRTtBQUFFO0FBQ1QsaUJBQVMsSUFERjtBQUVQSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7QUFGRjtBQWJILEdBRlA7QUFxQkpDLEVBQUFBLE1BQU0sRUFBQyxrQkFBWTtBQUNoQjtBQUVBO0FBQ0E7QUFDQSxTQUFLQyxXQUFMLEdBQW1CO0FBQ2ZDLE1BQUFBLFFBQVEsRUFBRztBQUNQQyxRQUFBQSxNQUFNLEVBQUMsQ0FEQTtBQUVQQyxRQUFBQSxRQUFRLEVBQUMsQ0FGRjtBQUdQQyxRQUFBQSxNQUFNLEVBQUUsQ0FIRDtBQUlQQyxRQUFBQSxVQUFVLEVBQUM7QUFKSjtBQURJLEtBQW5CO0FBWUYsR0F0Q0c7QUF3Q0xDLEVBQUFBLEtBQUssRUFBQyxpQkFBWTtBQUNkO0FBQ0EsU0FBS1YsVUFBTCxDQUFnQlcsSUFBaEI7QUFDQSxTQUFLWixVQUFMLENBQWdCWSxJQUFoQjtBQUNBLFNBQUtYLFVBQUwsQ0FBZ0JZLFVBQWhCLENBQTJCLEtBQUtSLFdBQUwsQ0FBaUJDLFFBQTVDLEVBSmMsQ0FNZDs7QUFDQSxTQUFLUSxJQUFMLENBQVVDLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLFlBQWM7QUFDbENDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLCtCQUFiLEVBRGtDLENBQ2U7O0FBQ2pELFdBQUtDLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFGa0MsQ0FFZjs7QUFDbkIsV0FBS0MsVUFBTCxDQUFnQixDQUFoQixFQUhrQyxDQUdmO0FBRXBCLEtBTEgsRUFLSSxJQUxKO0FBT0EsU0FBS0wsSUFBTCxDQUFVQyxFQUFWLENBQWEsU0FBYixFQUF3QixZQUFjO0FBQ3RDQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSwrQkFBYixFQURzQyxDQUNXOztBQUNqRCxXQUFLQyxVQUFMLENBQWdCLENBQWhCLEVBRnNDLENBRW5COztBQUNuQixXQUFLQyxVQUFMLENBQWdCLENBQWhCLEVBSHNDLENBR25CO0FBRWxCLEtBTEQsRUFLRSxJQUxGLEVBZGMsQ0FvQmQ7QUFDSCxHQTdESTtBQWdFTEQsRUFBQUEsVUFBVSxFQUFHLG9CQUFTRSxNQUFULEVBQ2I7QUFDRyxRQUFLQSxNQUFNLElBQUksQ0FBZixFQUFtQjtBQUNsQjtBQUNJLGFBQUtmLFdBQUwsQ0FBaUJDLFFBQWpCLENBQTBCQyxNQUExQixJQUFvQyxDQUFwQztBQUNBLGFBQUtGLFdBQUwsQ0FBaUJDLFFBQWpCLENBQTBCRSxRQUExQixJQUFzQyxDQUF0QztBQUNBLGFBQUtILFdBQUwsQ0FBaUJDLFFBQWpCLENBQTBCRyxNQUExQixJQUFvQyxDQUFwQztBQUNBLGFBQUtKLFdBQUwsQ0FBaUJDLFFBQWpCLENBQTBCSSxVQUExQixJQUF3QyxDQUF4QztBQUNILE9BTkYsTUFPTSxJQUFLVSxNQUFNLElBQUksQ0FBZixFQUNMO0FBQ0ksV0FBS2YsV0FBTCxDQUFpQkMsUUFBakIsQ0FBMEJDLE1BQTFCLElBQW9DLENBQXBDO0FBQ0EsV0FBS0YsV0FBTCxDQUFpQkMsUUFBakIsQ0FBMEJFLFFBQTFCLElBQXNDLENBQXRDO0FBQ0EsV0FBS0gsV0FBTCxDQUFpQkMsUUFBakIsQ0FBMEJHLE1BQTFCLElBQW9DLENBQXBDO0FBQ0EsV0FBS0osV0FBTCxDQUFpQkMsUUFBakIsQ0FBMEJJLFVBQTFCLElBQXdDLENBQXhDO0FBQ0g7O0FBR0YsU0FBS1QsVUFBTCxDQUFnQlksVUFBaEIsQ0FBMkIsS0FBS1IsV0FBTCxDQUFpQkMsUUFBNUMsRUFqQkgsQ0FpQjJEO0FBQzFELEdBbkZJO0FBcUZMYSxFQUFBQSxVQUFVLEVBQUcsb0JBQVNDLE1BQVQsRUFDYjtBQUNJO0FBQ0EsU0FBS3BCLFVBQUwsQ0FBZ0JxQixXQUFoQjtBQUNIO0FBekZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vMTog5Yqg6L295omA5pyJ5ri45oiP6YOo5Lu2IOS4jiDliqjnlLtcclxuLy8yOiDlrZjlgqjkv6Hmga/lubbov5vooYzliY3lkI7nq6/mgLvkvZPkuqTkupJcclxuXHJcbmNvbnN0IENhcmRSZWdpb24gPSByZXF1aXJlKCdqc19jYXJkUmVnaW9uJyk7XHJcbmNvbnN0IERhdGFSZWdpb24gPSByZXF1aXJlKCdqc19kYXRhUmVnaW9uJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaG9tZUFuaW06IHsgIC8v5Yqo55S7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkFuaW1hdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZFJlZ2lvbjogeyAgLy/ljaHniYfljLrln59cclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogQ2FyZFJlZ2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVJlZ2lvbjogeyAgLy/mlbDlgLzljLrln59cclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogRGF0YVJlZ2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFja1N0YWdlOiB7IC8v5ZCO56uvXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAgb25Mb2FkOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL+ivt+axguWQjuerr+WKoOi9vVxyXG5cclxuICAgICAgICAvL+OAguOAguOAglxyXG4gICAgICAgIC8v5Yqg6L295a6M5oiQ5ZCO5b6X5YiwXHJcbiAgICAgICAgdGhpcy5pbmZvcm1hdGlvbiA9IHtcclxuICAgICAgICAgICAgZGF0YUluZm8gOiB7XHJcbiAgICAgICAgICAgICAgICBidWRnZXQ6NCAsXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZTozICxcclxuICAgICAgICAgICAgICAgIGhlYWx0aDogMixcclxuICAgICAgICAgICAgICAgIHBvcHVsYXJpdHk6MSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICB9LFxyXG5cclxuICAgIHN0YXJ0OmZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3RoaXMuZGF0YVJlZ2lvbi51cGRhdGVJbmZvKHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8pO1xyXG4gICAgICAgIHRoaXMuZGF0YVJlZ2lvbi5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5jYXJkUmVnaW9uLmluaXQoKTtcclxuICAgICAgICB0aGlzLmRhdGFSZWdpb24udXBkYXRlSW5mbyh0aGlzLmluZm9ybWF0aW9uLmRhdGFJbmZvKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7nm5HlkKzkuovku7ZcclxuICAgICAgICB0aGlzLm5vZGUub24oJ1NlbGVjdEEnLCBmdW5jdGlvbiAoICApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdidXR0b24gcHJlc3NlZCBBIGFuZCBpIGdvdCBpdCcgKTsgIC8vMe+8mmFjIDLvvJpkZVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGEoMSk7Ly/lhbbku5blj4LmlbDnlaUgXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FyZCgxKTsvL+WPguaVsOeVpVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdTZWxlY3RCJywgZnVuY3Rpb24gKCAgKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coICdidXR0b24gcHJlc3NlZCBCIGFuZCBpIGdvdCBpdCcgKTsgIC8vMe+8mmFjIDLvvJpkZVxyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgwKTsvL+WFtuS7luWPguaVsOeVpSBcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhcmQoMCk7Ly/lj4LmlbDnlaVcclxuICAgICAgICBcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgICAgIC8v6L+Y5LiN5riF5qWa6L+Z5LmI55So55uR5ZCs5LqL5Lu25Lyg6YCS5Y+C5pWw77yM5Y+q6IO96L+Z5qC35YaZXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB1cGRhdGVEYXRhIDogZnVuY3Rpb24oc2VsZWN0KVxyXG4gICAge1xyXG4gICAgICAgaWYgKCBzZWxlY3QgPT0gMSApIC8vc2VsZWN0IOW9seWTjeiuoeeul1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5idWRnZXQgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5yZXNvdXJjZSArPSAyO1xyXG4gICAgICAgICAgICB0aGlzLmluZm9ybWF0aW9uLmRhdGFJbmZvLmhlYWx0aCArPSAzO1xyXG4gICAgICAgICAgICB0aGlzLmluZm9ybWF0aW9uLmRhdGFJbmZvLnBvcHVsYXJpdHkgKz0gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIHNlbGVjdCA9PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8uYnVkZ2V0IC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb3JtYXRpb24uZGF0YUluZm8ucmVzb3VyY2UgLT0gMjtcclxuICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5oZWFsdGggLT0gMztcclxuICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mby5wb3B1bGFyaXR5IC09IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgdGhpcy5kYXRhUmVnaW9uLnVwZGF0ZUluZm8odGhpcy5pbmZvcm1hdGlvbi5kYXRhSW5mbyk7ICAvL+iuoeeul+WujOWQjuabtOaWsOaVsOaNrlxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVDYXJkIDogZnVuY3Rpb24oc2VsZWN0KVxyXG4gICAge1xyXG4gICAgICAgIC8v546w5Zyo5Y+q5a6e546w5pi+56S65pWw57uE5Lit5YW25LuW5Y2h54mMXHJcbiAgICAgICAgdGhpcy5jYXJkUmVnaW9uLmdldE5leHRDYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuKTtcclxuIl19