"use strict";
cc._RF.push(module, 'e091eRB3LBLnYNrsCZBQnmH', 'Queue');
// JS/cardRegion/Queue.js

"use strict";

var push, pop, getLength, getTop, getLast, getCardInfo, isEmpty, clear;

function q() {
  //定义一张卡牌 ， 内部储存信息
  var aCard = function aCard(cardInfo) {
    this.info = cardInfo;
    this.next = null;
  };

  var length = 0;
  var top = null,
      last = null;
  push = function push(cardInfo) {
    var acard = new aCard(cardInfo);

    if (length == 0) {
      //第一次
      front = acard;
    } else {
      last.next = acard;
    }

    last = acard;
    length++;
    return true;
  }, pop = function pop() {
    var temp; //临时指针

    temp = front;
    front = front.next;
    length--; //delete temp;
  }, getLength = function getLength() {
    return length;
  }, getTop = function getTop() {
    return front;
  }, getLast = function getLast() {
    return last;
  }, getCardInfo = function getCardInfo() {
    return front.info;
  }, isEmpty = function isEmpty() {
    if (length == 0) return false;else return true;
  }, clear = function clear() {
    while (this.isEmpty() == false) {
      this.pop();
    }
  };
}

;
var Queue = new q();
module.exports = Queue;

cc._RF.pop();