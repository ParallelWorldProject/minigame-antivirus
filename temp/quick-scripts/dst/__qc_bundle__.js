
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
      type: cc.node
    },
    imageBox: {
      "default": null,
      type: cc.node
    },
    selectBox: {
      "default": null,
      type: cc.node
    }
  },
  init: function init(home) {
    this.home = home; //for infomation box

    /*this.infomationBox.ch
      this.labelBudget.string = msg.budget + '%';
    this.labelResource.string = msg.resource + '%';
    this.labelHealth.string = msg.health + '%';
    this.labelPopularity.string = msg.popularity + '%';
    console.log(this.labelBudget.string);*/
  },
  acceptCheck: function acceptCheck() {
    this.msg = this.home.dataInfo;
    this.msg.budget += 1;
    this.msg.resource += 1;
    this.msg.health += 1;
    this.msg.popularity += 1;
    this.home.updateInfo(this.msg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2NhcmRSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbmZvbWF0aW9uQm94IiwidHlwZSIsIm5vZGUiLCJpbWFnZUJveCIsInNlbGVjdEJveCIsImluaXQiLCJob21lIiwiYWNjZXB0Q2hlY2siLCJtc2ciLCJkYXRhSW5mbyIsImJ1ZGdldCIsInJlc291cmNlIiwiaGVhbHRoIiwicG9wdWxhcml0eSIsInVwZGF0ZUluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZFLEtBRFA7QUFLUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVORixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQUxGO0FBU1JFLElBQUFBLFNBQVMsRUFBRTtBQUNQLGlCQUFTLElBREY7QUFFUEgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkY7QUFUSCxHQUhQO0FBa0JMRyxFQUFBQSxJQUFJLEVBQUcsY0FBVUMsSUFBVixFQUFnQjtBQUVuQixTQUFLQSxJQUFMLEdBQVlBLElBQVosQ0FGbUIsQ0FHbkI7O0FBQ0E7Ozs7OztBQU9ILEdBN0JJO0FBZ0NMQyxFQUFBQSxXQUFXLEVBQUcsdUJBQWE7QUFFdkIsU0FBS0MsR0FBTCxHQUFXLEtBQUtGLElBQUwsQ0FBVUcsUUFBckI7QUFDQSxTQUFLRCxHQUFMLENBQVNFLE1BQVQsSUFBbUIsQ0FBbkI7QUFDQSxTQUFLRixHQUFMLENBQVNHLFFBQVQsSUFBcUIsQ0FBckI7QUFDQSxTQUFLSCxHQUFMLENBQVNJLE1BQVQsSUFBbUIsQ0FBbkI7QUFDQSxTQUFLSixHQUFMLENBQVNLLFVBQVQsSUFBdUIsQ0FBdkI7QUFFQSxTQUFLUCxJQUFMLENBQVVRLFVBQVYsQ0FBcUIsS0FBS04sR0FBMUI7QUFDSDtBQXpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaW5mb21hdGlvbkJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5ub2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZUJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5ub2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RCb3g6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2Mubm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQgOiBmdW5jdGlvbiggaG9tZSApe1xyXG5cclxuICAgICAgICB0aGlzLmhvbWUgPSBob21lXHJcbiAgICAgICAgLy9mb3IgaW5mb21hdGlvbiBib3hcclxuICAgICAgICAvKnRoaXMuaW5mb21hdGlvbkJveC5jaFxyXG5cclxuICAgICAgICB0aGlzLmxhYmVsQnVkZ2V0LnN0cmluZyA9IG1zZy5idWRnZXQgKyAnJSc7XHJcbiAgICAgICAgdGhpcy5sYWJlbFJlc291cmNlLnN0cmluZyA9IG1zZy5yZXNvdXJjZSArICclJztcclxuICAgICAgICB0aGlzLmxhYmVsSGVhbHRoLnN0cmluZyA9IG1zZy5oZWFsdGggKyAnJSc7XHJcbiAgICAgICAgdGhpcy5sYWJlbFBvcHVsYXJpdHkuc3RyaW5nID0gbXNnLnBvcHVsYXJpdHkgKyAnJSc7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYWJlbEJ1ZGdldC5zdHJpbmcpOyovXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgYWNjZXB0Q2hlY2sgOiBmdW5jdGlvbiggICkge1xyXG5cclxuICAgICAgICB0aGlzLm1zZyA9IHRoaXMuaG9tZS5kYXRhSW5mb1xyXG4gICAgICAgIHRoaXMubXNnLmJ1ZGdldCArPSAxO1xyXG4gICAgICAgIHRoaXMubXNnLnJlc291cmNlICs9IDE7XHJcbiAgICAgICAgdGhpcy5tc2cuaGVhbHRoICs9IDE7XHJcbiAgICAgICAgdGhpcy5tc2cucG9wdWxhcml0eSArPSAxO1xyXG5cclxuICAgICAgICB0aGlzLmhvbWUudXBkYXRlSW5mbyh0aGlzLm1zZyk7XHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcbiJdfQ==
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
  init: function init(msg) {
    this.labelBudget.string = msg.budget + '%';
    this.labelResource.string = msg.resource + '%';
    this.labelHealth.string = msg.health + '%';
    this.labelPopularity.string = msg.popularity + '%'; //console.log(this.labelBudget.string);
  },
  updateInfo: function updateInfo(msg) {
    this.labelBudget.string = msg.budget + '%';
    this.labelResource.string = msg.resource + '%';
    this.labelHealth.string = msg.health + '%';
    this.labelPopularity.string = msg.popularity + '%';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSlNcXGpzX2RhdGFSZWdpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbEJ1ZGdldCIsInR5cGUiLCJMYWJlbCIsImxhYmVsUmVzb3VyY2UiLCJsYWJlbEhlYWx0aCIsImxhYmVsUG9wdWxhcml0eSIsImluaXQiLCJtc2ciLCJzdHJpbmciLCJidWRnZXQiLCJyZXNvdXJjZSIsImhlYWx0aCIsInBvcHVsYXJpdHkiLCJ1cGRhdGVJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQURMO0FBS1JDLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFTLElBREU7QUFFWEYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkUsS0FMUDtBQVNSRSxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZBLEtBVEw7QUFhUkcsSUFBQUEsZUFBZSxFQUFFO0FBQ2IsaUJBQVMsSUFESTtBQUViSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSTtBQWJULEdBSFA7QUF1QkxJLEVBQUFBLElBQUksRUFBRyxjQUFVQyxHQUFWLEVBQWU7QUFFbEIsU0FBS1AsV0FBTCxDQUFpQlEsTUFBakIsR0FBMEJELEdBQUcsQ0FBQ0UsTUFBSixHQUFhLEdBQXZDO0FBQ0EsU0FBS04sYUFBTCxDQUFtQkssTUFBbkIsR0FBNEJELEdBQUcsQ0FBQ0csUUFBSixHQUFlLEdBQTNDO0FBQ0EsU0FBS04sV0FBTCxDQUFpQkksTUFBakIsR0FBMEJELEdBQUcsQ0FBQ0ksTUFBSixHQUFhLEdBQXZDO0FBQ0EsU0FBS04sZUFBTCxDQUFxQkcsTUFBckIsR0FBOEJELEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUEvQyxDQUxrQixDQU1sQjtBQUNILEdBOUJJO0FBaUNMQyxFQUFBQSxVQUFVLEVBQUcsb0JBQVVOLEdBQVYsRUFDYjtBQUNJLFNBQUtQLFdBQUwsQ0FBaUJRLE1BQWpCLEdBQTBCRCxHQUFHLENBQUNFLE1BQUosR0FBYSxHQUF2QztBQUNBLFNBQUtOLGFBQUwsQ0FBbUJLLE1BQW5CLEdBQTRCRCxHQUFHLENBQUNHLFFBQUosR0FBZSxHQUEzQztBQUNBLFNBQUtOLFdBQUwsQ0FBaUJJLE1BQWpCLEdBQTBCRCxHQUFHLENBQUNJLE1BQUosR0FBYSxHQUF2QztBQUNBLFNBQUtOLGVBQUwsQ0FBcUJHLE1BQXJCLEdBQThCRCxHQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBL0M7QUFDSDtBQXZDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbEJ1ZGdldDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxSZXNvdXJjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWxIZWFsdGg6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsUG9wdWxhcml0eToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQgOiBmdW5jdGlvbiggbXNnICl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sYWJlbEJ1ZGdldC5zdHJpbmcgPSBtc2cuYnVkZ2V0ICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxSZXNvdXJjZS5zdHJpbmcgPSBtc2cucmVzb3VyY2UgKyAnJSc7XHJcbiAgICAgICAgdGhpcy5sYWJlbEhlYWx0aC5zdHJpbmcgPSBtc2cuaGVhbHRoICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxQb3B1bGFyaXR5LnN0cmluZyA9IG1zZy5wb3B1bGFyaXR5ICsgJyUnO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5sYWJlbEJ1ZGdldC5zdHJpbmcpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgdXBkYXRlSW5mbyA6IGZ1bmN0aW9uKCBtc2cgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGFiZWxCdWRnZXQuc3RyaW5nID0gbXNnLmJ1ZGdldCArICclJztcclxuICAgICAgICB0aGlzLmxhYmVsUmVzb3VyY2Uuc3RyaW5nID0gbXNnLnJlc291cmNlICsgJyUnO1xyXG4gICAgICAgIHRoaXMubGFiZWxIZWFsdGguc3RyaW5nID0gbXNnLmhlYWx0aCArICclJztcclxuICAgICAgICB0aGlzLmxhYmVsUG9wdWxhcml0eS5zdHJpbmcgPSBtc2cucG9wdWxhcml0eSArICclJztcclxuICAgIH0gXHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------
