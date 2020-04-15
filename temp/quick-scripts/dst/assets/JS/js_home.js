
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