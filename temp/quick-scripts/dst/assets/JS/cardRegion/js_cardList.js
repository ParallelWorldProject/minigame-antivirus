
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/JS/cardRegion/js_cardList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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