var models = models || {};

(function(models){
    'use strict';

    var User = function(username, fullName, balance){
        this.username = username;
        this.fullName = fullName;
        this._balance = balance;
        this._shoppingCart = [];
    };

    User.prototype.addItemToCart = function(item){
        this._shoppingCart.push(item);
    };

    models.getUser = function getUser(username, fullName, balance) {
        return new User(username, fullName, balance);
    }

}(models));