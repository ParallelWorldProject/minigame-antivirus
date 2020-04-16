"use strict";
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