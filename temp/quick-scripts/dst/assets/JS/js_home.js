
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
    //may play animation ？
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2hvbWUuanMiXSwibmFtZXMiOlsiQ2FyZFJlZ2lvbiIsInJlcXVpcmUiLCJEYXRhUmVnaW9uIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJob21lQW5pbSIsInR5cGUiLCJBbmltYXRpb24iLCJjYXJkUmVnaW9uIiwiZGF0YVJlZ2lvbiIsImJhY2tTdGFnZSIsIk5vZGUiLCJvbkxvYWQiLCJkYXRhSW5mbyIsImJ1ZGdldCIsInJlc291cmNlIiwiaGVhbHRoIiwicG9wdWxhcml0eSIsImNhcmRJbmZvIiwiZnJvbSIsIm5hbWUiLCJkYXRlIiwiaW5mb3JtYXRpb24iLCJzdGFydCIsImluaXQiLCJ1cGRhdGVJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBRUFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBSUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUU7QUFBRztBQUNULGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERjtBQUtSQyxJQUFBQSxVQUFVLEVBQUU7QUFBRztBQUNYLGlCQUFTLElBREQ7QUFFUkYsTUFBQUEsSUFBSSxFQUFFUjtBQUZFLEtBTEo7QUFTUlcsSUFBQUEsVUFBVSxFQUFFO0FBQUc7QUFDWCxpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRU47QUFGRSxLQVRKO0FBYVJVLElBQUFBLFNBQVMsRUFBRTtBQUFFO0FBQ1QsaUJBQVMsSUFERjtBQUVQSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7QUFGRjtBQWJILEdBSlA7QUF1QkpDLEVBQUFBLE1BQU0sRUFBQyxrQkFBWTtBQUNmO0FBQ0E7QUFFQTs7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLFNBQUtDLFFBQUwsR0FBZ0I7QUFDWkMsTUFBQUEsTUFBTSxFQUFDLEVBREs7QUFFWkMsTUFBQUEsUUFBUSxFQUFDLEVBRkc7QUFHWkMsTUFBQUEsTUFBTSxFQUFFLEVBSEk7QUFJWkMsTUFBQUEsVUFBVSxFQUFDO0FBSkMsS0FBaEI7QUFNQSxTQUFLQyxRQUFMLEdBQWdCO0FBQ1pDLE1BQUFBLElBQUksRUFBQyxJQURPO0FBRVpDLE1BQUFBLElBQUksRUFBQyxNQUZPO0FBR1pDLE1BQUFBLElBQUksRUFBQyxXQUhPO0FBSVpDLE1BQUFBLFdBQVcsRUFBQztBQUpBLEtBQWhCLENBbENnQixDQXdDaEI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JGLEdBbEZHO0FBb0ZMQyxFQUFBQSxLQUFLLEVBQUMsaUJBQVk7QUFDZCxTQUFLZCxVQUFMLENBQWdCZSxJQUFoQixDQUFxQixLQUFLWCxRQUExQjtBQUNBLFNBQUtMLFVBQUwsQ0FBZ0JnQixJQUFoQixDQUFxQixJQUFyQjtBQUNILEdBdkZJO0FBeUZMQyxFQUFBQSxVQUFVLEVBQUcsb0JBQVVaLFFBQVYsRUFDYjtBQUNJLFNBQUtKLFVBQUwsQ0FBZ0JnQixVQUFoQixDQUEyQlosUUFBM0IsRUFESixDQUVJO0FBQ0g7QUE3RkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy9ob21lXHJcbi8vMe+8muaOpeWPlyDlkI7nq6/kv6Hmga8gIOS8oOmAkiDkv6Hmga/nu5nlrZDljLrln59cclxuLy8y77ya5pS26I63IOWtkOWMuuWfn+S/oeaBryDkvKDpgJIg5L+h5oGv57uZ5ZCO56uvXHJcbi8vMzog5Yqg6L29IOmhtemdouWKqOeUuyAgXHJcblxyXG5cclxuLy/ojrflvpfkuKTkuKrljLrln5/vvIznrYnkuIvlh4blpIfnu5nku5bku6zkvKDmtojmga9cclxuY29uc3QgQ2FyZFJlZ2lvbiA9IHJlcXVpcmUoJ2pzX2NhcmRSZWdpb24nKTtcclxuY29uc3QgRGF0YVJlZ2lvbiA9IHJlcXVpcmUoJ2pzX2RhdGFSZWdpb24nKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhvbWVBbmltOiB7ICAvL+WKqOeUu1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BbmltYXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcmRSZWdpb246IHsgIC8v5Y2h54mH5Yy65Z+fXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IENhcmRSZWdpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFSZWdpb246IHsgIC8v5pWw5YC85Yy65Z+fXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IERhdGFSZWdpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhY2tTdGFnZTogeyAvL+WQjuerr1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgIG9uTG9hZDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIC8vbWF5IHBsYXkgYW5pbWF0aW9uIO+8n1xyXG4gICAgICAgICAvL3RoaXMuaG9tZUFuaW0ucGxheSgn77yf5ZCv5Yqo5Yqo55S777yfJyk7XHJcblxyXG4gICAgICAgICAvL+S/oeaBr1xyXG4gICAgICAgIC8qdGhpcy5pbmZvcm1hdGlvbiA9e1xyXG4gICAgICAgICAgICBjdXJDYXJkSWQ6MCxcclxuICAgICAgICAgICAgc3RvcnlJZDowLFxyXG4gICAgICAgICAgICBuZXh0Q2FyZElkOjksXHJcbiAgICAgICAgICAgIHNlbGxlY3RlZDowLFxyXG4gICAgICAgICAgICBtZXNzYWdlOid0aGlzIGlzIGEgbWVzc2FnZSF0aGlzIGlzIGEgbWVzc2FnZSF0aGlzIGlzIGEgbWVzc2FnZSF0aGlzIGlzIGEgbWVzc2FnZSEnLFxyXG4gICAgICAgICAgICBwaWNVcmw6J251bGwnLFxyXG4gICAgICAgICAgICBuYW1lOidteW5hbWUnLFxyXG4gICAgICAgICAgICBmcm9tOidDTicsXHJcbiAgICAgICAgICAgIGRhdGU6JzA0LzE0LzIwMjAnLFxyXG5cclxuICAgICAgICAgICAgb3B0aW9uQTp7XHJcbiAgICAgICAgICAgIGRlc2M6XCJ0aGlzIGlzIGEgQSBkZXNjXCIsXHJcbiAgICAgICAgICAgIGltZ1VybDonbnVsbCcsXHJcbiAgICAgICAgICAgIGNoYW5nZTpbNSwgMCwgLTEwLCAyMF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3B0aW9uQjp7XHJcbiAgICAgICAgICAgIGRlc2M6XCJ0aGlzIGlzIGEgQiBkZXNjXCIsXHJcbiAgICAgICAgICAgIGltZ1VybDonbnVsbCcsXHJcbiAgICAgICAgICAgIGNoYW5nZTpbMCwgMCwgMTAsIDE1XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSovXHJcbiAgICBcclxuICAgICAgICB0aGlzLmRhdGFJbmZvID0ge1xyXG4gICAgICAgICAgICBidWRnZXQ6NTAgLFxyXG4gICAgICAgICAgICByZXNvdXJjZTo1MCAsXHJcbiAgICAgICAgICAgIGhlYWx0aDogNTAsXHJcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6NTBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYXJkSW5mbyA9IHtcclxuICAgICAgICAgICAgZnJvbTpcIkNOXCIgLFxyXG4gICAgICAgICAgICBuYW1lOlwiVG9ueVwiLFxyXG4gICAgICAgICAgICBkYXRlOlwiNC8xNC8yMDE0XCIsXHJcbiAgICAgICAgICAgIGluZm9ybWF0aW9uOlwidGhpcyBpcyBhIG1lc3NhZ2UhdGhpcyBpcyBhIG1lc3NhZ2UhdGhpcyBpcyBhIG1lc3NhZ2UhdGhpcyBpcyBhIG1lc3NhZ2UhXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmRhdGFJbmZvLmJ1ZGdldCk7XHJcbiAgICAgICAgLypcclxuICAgICAgICAvL+W9k+W+l+WIsOWQjuWPsOeahOS/oeaBr+i+k+WFpeaXtiAg5aSE55CG5L+h5oGvIOW5tiDkvKDpgJLkv6Hmga/nu5nlrZDljLrln59cclxuICAgICAgICB0aGlzLm5vZGUub24oXCJnZXRCYWNrU3RhZ2VJbmZvcm1hdGlvblwiLFxyXG4gICAgICAgIGZ1bmN0aW9uKCBtc2cgKXtcclxuICAgICAgICAgICAgLy9kYXRhUmVnaW9uLnVwZGF0ZShtc2cpO1xyXG4gICAgICAgICAgICAvL2NhcmRSZWdpb24udXBkYXRlKG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICx0aGlzXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICAvL+W9k+W+l+WIsOWQjuWPsOeahOS/oeaBr+i+k+WFpeaXtiAg5Lyg6YCS5L+h5oGv57uZ5a2Q5Yy65Z+fXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwidXBkYXRlXCIsXHJcbiAgICAgICAgZnVuY3Rpb24oIG1zZyApe1xyXG4gICAgICAgICAgICAvL+mAmuefpeWQjuWPsOWkhOeQhlxyXG4gICAgICAgIH1cclxuICAgICAgICAsdGhpc1xyXG4gICAgICAgIClcclxuICAgICAgICAqL1xyXG4gICAgIH0sXHJcblxyXG4gICAgc3RhcnQ6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVJlZ2lvbi5pbml0KHRoaXMuZGF0YUluZm8pO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlZ2lvbi5pbml0KHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVJbmZvIDogZnVuY3Rpb24oIGRhdGFJbmZvIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRhdGFSZWdpb24udXBkYXRlSW5mbyhkYXRhSW5mbyk7XHJcbiAgICAgICAgLy90aGlzLmNhcmRSZWdpb24udXBkYXRlKHRoaXMsdGhpcy5jYXJkSW5mbyk7XHJcbiAgICB9XHJcbiAgIFxyXG5cclxufVxyXG4pO1xyXG4iXX0=