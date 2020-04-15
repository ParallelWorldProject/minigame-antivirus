
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

//home
//1：接受 后端信息  传递 信息给子区域
//2：收获 子区域信息 传递 信息给后端
//3: 加载 页面动画  
//获得两个区域，等下准备给他们传消息
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
    // 发送请求
    HttpHelper.httpPost('/test', '', function (data) {
      cc.log('data', data);
    }); //may play animation ？
    //this.homeAnim.play('？启动动画？');
    //信息

    /*this.information ={
        curCardId:0,
        storyId:0,
        nextCardId:9,
        sellected:0,
        message:'this is a message!this is a message!this is a message!this is a message!',
        picUrl:'null',
        name:'myname',
        from:'CN',
        date:'04/14/2020',
         optionA:{
        desc:"this is a A desc",
        imgUrl:'null',
        change:[5, 0, -10, 20]
        },
        optionB:{
        desc:"this is a B desc",
        imgUrl:'null',
        change:[0, 0, 10, 15]
        }
    }*/

    this.dataInfo = {
      budget: 50,
      resource: 50,
      health: 50,
      popularity: 50
    };
    this.cardInfo = {
      from: "CN",
      name: "Tony",
      date: "4/14/2014",
      information: "this is a message!this is a message!this is a message!this is a message!"
    }; //console.log(this.dataInfo.budget);

    /*
    //当得到后台的信息输入时  处理信息 并 传递信息给子区域
    this.node.on("getBackStageInformation",
    function( msg ){
        //dataRegion.update(msg);
        //cardRegion.update(msg);
    }
    ,this
    )
     //当得到后台的信息输入时  传递信息给子区域
    this.node.on("update",
    function( msg ){
        //通知后台处理
    }
    ,this
    )
    */
  },
  start: function start() {
    this.dataRegion.init(this.dataInfo);
    this.cardRegion.init(this);
  },
  updateInfo: function updateInfo(dataInfo) {
    this.dataRegion.updateInfo(dataInfo); //this.cardRegion.update(this,this.cardInfo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2hvbWUuanMiXSwibmFtZXMiOlsiQ2FyZFJlZ2lvbiIsInJlcXVpcmUiLCJEYXRhUmVnaW9uIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJob21lQW5pbSIsInR5cGUiLCJBbmltYXRpb24iLCJjYXJkUmVnaW9uIiwiZGF0YVJlZ2lvbiIsImJhY2tTdGFnZSIsIk5vZGUiLCJvbkxvYWQiLCJIdHRwSGVscGVyIiwiaHR0cFBvc3QiLCJkYXRhIiwibG9nIiwiZGF0YUluZm8iLCJidWRnZXQiLCJyZXNvdXJjZSIsImhlYWx0aCIsInBvcHVsYXJpdHkiLCJjYXJkSW5mbyIsImZyb20iLCJuYW1lIiwiZGF0ZSIsImluZm9ybWF0aW9uIiwic3RhcnQiLCJpbml0IiwidXBkYXRlSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUVBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUlMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFO0FBQUc7QUFDVCxpQkFBUyxJQURIO0FBRU5DLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZILEtBREY7QUFLUkMsSUFBQUEsVUFBVSxFQUFFO0FBQUc7QUFDWCxpQkFBUyxJQUREO0FBRVJGLE1BQUFBLElBQUksRUFBRVI7QUFGRSxLQUxKO0FBU1JXLElBQUFBLFVBQVUsRUFBRTtBQUFHO0FBQ1gsaUJBQVMsSUFERDtBQUVSSCxNQUFBQSxJQUFJLEVBQUVOO0FBRkUsS0FUSjtBQWFSVSxJQUFBQSxTQUFTLEVBQUU7QUFBRTtBQUNULGlCQUFTLElBREY7QUFFUEosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRkY7QUFiSCxHQUpQO0FBdUJKQyxFQUFBQSxNQUFNLEVBQUMsa0JBQVk7QUFDZjtBQUNEQyxJQUFBQSxVQUFVLENBQUNDLFFBQVgsQ0FBb0IsT0FBcEIsRUFBNEIsRUFBNUIsRUFBK0IsVUFBQUMsSUFBSSxFQUFFO0FBQ2pDZCxNQUFBQSxFQUFFLENBQUNlLEdBQUgsQ0FBTyxNQUFQLEVBQWNELElBQWQ7QUFDSCxLQUZELEVBRmdCLENBS2Y7QUFDQTtBQUVBOztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLFNBQUtFLFFBQUwsR0FBZ0I7QUFDWkMsTUFBQUEsTUFBTSxFQUFDLEVBREs7QUFFWkMsTUFBQUEsUUFBUSxFQUFDLEVBRkc7QUFHWkMsTUFBQUEsTUFBTSxFQUFFLEVBSEk7QUFJWkMsTUFBQUEsVUFBVSxFQUFDO0FBSkMsS0FBaEI7QUFNQSxTQUFLQyxRQUFMLEdBQWdCO0FBQ1pDLE1BQUFBLElBQUksRUFBQyxJQURPO0FBRVpDLE1BQUFBLElBQUksRUFBQyxNQUZPO0FBR1pDLE1BQUFBLElBQUksRUFBQyxXQUhPO0FBSVpDLE1BQUFBLFdBQVcsRUFBQztBQUpBLEtBQWhCLENBdENnQixDQTRDaEI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JGLEdBdEZHO0FBd0ZMQyxFQUFBQSxLQUFLLEVBQUMsaUJBQVk7QUFDZCxTQUFLbEIsVUFBTCxDQUFnQm1CLElBQWhCLENBQXFCLEtBQUtYLFFBQTFCO0FBQ0EsU0FBS1QsVUFBTCxDQUFnQm9CLElBQWhCLENBQXFCLElBQXJCO0FBQ0gsR0EzRkk7QUE2RkxDLEVBQUFBLFVBQVUsRUFBRyxvQkFBVVosUUFBVixFQUNiO0FBQ0ksU0FBS1IsVUFBTCxDQUFnQm9CLFVBQWhCLENBQTJCWixRQUEzQixFQURKLENBRUk7QUFDSDtBQWpHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL2hvbWVcbi8vMe+8muaOpeWPlyDlkI7nq6/kv6Hmga8gIOS8oOmAkiDkv6Hmga/nu5nlrZDljLrln59cbi8vMu+8muaUtuiOtyDlrZDljLrln5/kv6Hmga8g5Lyg6YCSIOS/oeaBr+e7meWQjuerr1xuLy8zOiDliqDovb0g6aG16Z2i5Yqo55S7ICBcblxuXG4vL+iOt+W+l+S4pOS4quWMuuWfn++8jOetieS4i+WHhuWkh+e7meS7luS7rOS8oOa2iOaBr1xuY29uc3QgQ2FyZFJlZ2lvbiA9IHJlcXVpcmUoJ2pzX2NhcmRSZWdpb24nKTtcbmNvbnN0IERhdGFSZWdpb24gPSByZXF1aXJlKCdqc19kYXRhUmVnaW9uJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaG9tZUFuaW06IHsgIC8v5Yqo55S7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmRSZWdpb246IHsgIC8v5Y2h54mH5Yy65Z+fXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogQ2FyZFJlZ2lvblxuICAgICAgICB9LFxuICAgICAgICBkYXRhUmVnaW9uOiB7ICAvL+aVsOWAvOWMuuWfn1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IERhdGFSZWdpb25cbiAgICAgICAgfSxcbiAgICAgICAgYmFja1N0YWdlOiB7IC8v5ZCO56uvXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAgb25Mb2FkOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgIC8vIOWPkemAgeivt+axglxuICAgICAgICBIdHRwSGVscGVyLmh0dHBQb3N0KCcvdGVzdCcsJycsZGF0YT0+e1xuICAgICAgICAgICAgY2MubG9nKCdkYXRhJyxkYXRhKVxuICAgICAgICB9KVxuICAgICAgICAgLy9tYXkgcGxheSBhbmltYXRpb24g77yfXG4gICAgICAgICAvL3RoaXMuaG9tZUFuaW0ucGxheSgn77yf5ZCv5Yqo5Yqo55S777yfJyk7XG5cbiAgICAgICAgIC8v5L+h5oGvXG4gICAgICAgIC8qdGhpcy5pbmZvcm1hdGlvbiA9e1xuICAgICAgICAgICAgY3VyQ2FyZElkOjAsXG4gICAgICAgICAgICBzdG9yeUlkOjAsXG4gICAgICAgICAgICBuZXh0Q2FyZElkOjksXG4gICAgICAgICAgICBzZWxsZWN0ZWQ6MCxcbiAgICAgICAgICAgIG1lc3NhZ2U6J3RoaXMgaXMgYSBtZXNzYWdlIXRoaXMgaXMgYSBtZXNzYWdlIXRoaXMgaXMgYSBtZXNzYWdlIXRoaXMgaXMgYSBtZXNzYWdlIScsXG4gICAgICAgICAgICBwaWNVcmw6J251bGwnLFxuICAgICAgICAgICAgbmFtZTonbXluYW1lJyxcbiAgICAgICAgICAgIGZyb206J0NOJyxcbiAgICAgICAgICAgIGRhdGU6JzA0LzE0LzIwMjAnLFxuXG4gICAgICAgICAgICBvcHRpb25BOntcbiAgICAgICAgICAgIGRlc2M6XCJ0aGlzIGlzIGEgQSBkZXNjXCIsXG4gICAgICAgICAgICBpbWdVcmw6J251bGwnLFxuICAgICAgICAgICAgY2hhbmdlOls1LCAwLCAtMTAsIDIwXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbkI6e1xuICAgICAgICAgICAgZGVzYzpcInRoaXMgaXMgYSBCIGRlc2NcIixcbiAgICAgICAgICAgIGltZ1VybDonbnVsbCcsXG4gICAgICAgICAgICBjaGFuZ2U6WzAsIDAsIDEwLCAxNV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSovXG4gICAgXG4gICAgICAgIHRoaXMuZGF0YUluZm8gPSB7XG4gICAgICAgICAgICBidWRnZXQ6NTAgLFxuICAgICAgICAgICAgcmVzb3VyY2U6NTAgLFxuICAgICAgICAgICAgaGVhbHRoOiA1MCxcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6NTBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhcmRJbmZvID0ge1xuICAgICAgICAgICAgZnJvbTpcIkNOXCIgLFxuICAgICAgICAgICAgbmFtZTpcIlRvbnlcIixcbiAgICAgICAgICAgIGRhdGU6XCI0LzE0LzIwMTRcIixcbiAgICAgICAgICAgIGluZm9ybWF0aW9uOlwidGhpcyBpcyBhIG1lc3NhZ2UhdGhpcyBpcyBhIG1lc3NhZ2UhdGhpcyBpcyBhIG1lc3NhZ2UhdGhpcyBpcyBhIG1lc3NhZ2UhXCJcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF0YUluZm8uYnVkZ2V0KTtcbiAgICAgICAgLypcbiAgICAgICAgLy/lvZPlvpfliLDlkI7lj7DnmoTkv6Hmga/ovpPlhaXml7YgIOWkhOeQhuS/oeaBryDlubYg5Lyg6YCS5L+h5oGv57uZ5a2Q5Yy65Z+fXG4gICAgICAgIHRoaXMubm9kZS5vbihcImdldEJhY2tTdGFnZUluZm9ybWF0aW9uXCIsXG4gICAgICAgIGZ1bmN0aW9uKCBtc2cgKXtcbiAgICAgICAgICAgIC8vZGF0YVJlZ2lvbi51cGRhdGUobXNnKTtcbiAgICAgICAgICAgIC8vY2FyZFJlZ2lvbi51cGRhdGUobXNnKTtcbiAgICAgICAgfVxuICAgICAgICAsdGhpc1xuICAgICAgICApXG5cbiAgICAgICAgLy/lvZPlvpfliLDlkI7lj7DnmoTkv6Hmga/ovpPlhaXml7YgIOS8oOmAkuS/oeaBr+e7meWtkOWMuuWfn1xuICAgICAgICB0aGlzLm5vZGUub24oXCJ1cGRhdGVcIixcbiAgICAgICAgZnVuY3Rpb24oIG1zZyApe1xuICAgICAgICAgICAgLy/pgJrnn6XlkI7lj7DlpITnkIZcbiAgICAgICAgfVxuICAgICAgICAsdGhpc1xuICAgICAgICApXG4gICAgICAgICovXG4gICAgIH0sXG5cbiAgICBzdGFydDpmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGF0YVJlZ2lvbi5pbml0KHRoaXMuZGF0YUluZm8pO1xuICAgICAgICB0aGlzLmNhcmRSZWdpb24uaW5pdCh0aGlzKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlSW5mbyA6IGZ1bmN0aW9uKCBkYXRhSW5mbyApXG4gICAge1xuICAgICAgICB0aGlzLmRhdGFSZWdpb24udXBkYXRlSW5mbyhkYXRhSW5mbyk7XG4gICAgICAgIC8vdGhpcy5jYXJkUmVnaW9uLnVwZGF0ZSh0aGlzLHRoaXMuY2FyZEluZm8pO1xuICAgIH1cbiAgIFxuXG59XG4pO1xuIl19