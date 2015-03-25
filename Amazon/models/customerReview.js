var models = models || {};

(function(models){

    var CustomerReview = function(customer, content, rating, createdOn){
        this.customer = customer;
        this.content = content;
        this.rating = rating;
        this.createdOn = createdOn;
    };

    models.getCustomerReview = function(customer, content, rating, createdOn){
        return new CustomerReview(customer, content, rating, createdOn);
    }
}(models));