models = models || {};

(function(models){
    'use strict';

    function Item(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
        this._customerReviews = [];
    }

    Item.prototype.addCustomerReview = function(review){
        this._customerReviews.push(review);
    };

    Item.prototype.getCustomerReviews = function(){
        return this._customerReviews;
    };

    function UsedItem(name, description, price, condition){
        Item.call(this,name, description, price);
        this.condition = condition;
    }

    UsedItem.prototype = Object.create(Item.prototype);
    UsedItem.prototype.constructor = UsedItem;

    models.getItem = function(name, description, price){
        return new Item(name, description, price);
    };

    models.getUsedItem = function(name, description, price, condition){
        return new UsedItem(name, description, price, condition);
    }

}(models));