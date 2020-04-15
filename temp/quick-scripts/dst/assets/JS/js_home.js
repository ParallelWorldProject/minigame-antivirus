
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