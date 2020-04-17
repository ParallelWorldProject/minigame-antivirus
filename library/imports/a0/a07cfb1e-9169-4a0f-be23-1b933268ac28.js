"use strict";
cc._RF.push(module, 'a07cfsekWlKD74jG5MyaKwo', 'js_cardRegion');
// JS/cardRegion/js_cardRegion.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init() {
    this.node.getComponent('js_cardList').init();
  },
  getNextCard: function getNextCard() {
    this.node.getComponent('js_cardList').getNextCard();
  },
  push: function push(cardInfo) {
    this.node.getComponent('js_cardList').push(cardInfo);
  },
  show: function show() {
    this.node.getComponent('js_cardList').show();
  }
});

cc._RF.pop();