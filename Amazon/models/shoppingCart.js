var models = models || {};

(function(models){
    'use strict';

    var ShoppingCart = function(){
        this._items = [];
        this._totalPrice = 0;
    };

    ShoppingCart.prototype.addItem = function(item){
        this._items.push(item);
    };

    ShoppingCart.prototype.getTotalPrice = function(){
        var result = 0;
        for(var i = 0; i < this._items.length; i++){
            result += this._items[i].price;
        }
        return result;
    }
}(models));