
var push,pop,getLength,getTop,getLast,getCardInfo,isEmpty,clear;

function q(){

    //定义一张卡牌 ， 内部储存信息
    var aCard = function( cardInfo ){
        this.info = cardInfo;
        this.next = null;
    }

    var length = 0;
    var top = null ,last= null;

    push = function( cardInfo ){
        let acard = new aCard(cardInfo);
        

        if( length == 0 ){ //第一次
            front = acard ;
        }else{
            last.next = acard;
        }

        last = acard;
        length++;
        return true;
    },

    pop = function(){
        let temp ; //临时指针
        temp = front;
        front = front.next;
        length--;
        //delete temp;
    },

    getLength = function()
    {
        return length;
    },

    getTop = function(){
        return front;
    },

    getLast = function(){
        return last;
    },

    getCardInfo = function()
    {
        return front.info;
    },

    isEmpty = function(){
        if( length == 0 ) return false;
        else return true;
    },

    clear = function()
    {
        while( this.isEmpty() == false )
        {
            this.pop();
        }
    }

};

var Queue = new q();
module.exports  = Queue;
    