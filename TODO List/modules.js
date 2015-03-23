/**
 * Created by Barish on 23.3.2015 г..
 */
modules = (function(){
    'use strict';
    var Container = (function(){

        var Container = function(title){
            this._title = title;
        };

        Container.prototype.addToDom = function(parent){
            var div = document.createElement('div');
            var sections = document.createElement('div');
            sections.className = 'sections';
            div.className = 'section';
            var innerDiv = document.createElement('div');
            div.className = 'w';
            var h1 = document.createElement('h1');
            var input = document.createElement('input');
            h1.innerHTML = this._title;
            input.type = 'text';
            input.placeholder = 'Title...';
            var button = document.createElement('button');
            button.innerHTML = 'New Section';
            button.addEventListener('click', function(){
                var temp = new Section(input.value);
                temp.addToDom(innerDiv);
                sections.appendChild(innerDiv);
                input.value = '';
            });


            div.appendChild(h1);
            div.appendChild(sections);
            div.appendChild(input);
            div.appendChild(button);
            parent.appendChild(div);
        };

        return Container;
    }());

    var Section = (function(){

        var Section = function(title){
            this._title = title;
        };

        Section.prototype.addToDom = function(parent){
            var div = document.createElement('div');
            var innerDiv = document.createElement('div');
            div.className = 'section';
            var h3 = document.createElement('h3');
            h3.innerHTML = this._title;
            var input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Add item...';
            var button = document.createElement('button');
            button.innerHTML = '+';
            button.addEventListener('click', function(){
                var temp = new Item(input.value);
                input.value = '';
                temp.addToDom(innerDiv);
            });
            div.appendChild(h3);
            div.appendChild(innerDiv);
            div.appendChild(input);
            div.appendChild(button);
            parent.appendChild(div);
        };

        return Section;
    }());

    var Item = (function(){

        var Item = function(title){
            this._title = title;
        };

        Item.prototype.addToDom = function(parent){
            var div = document.createElement('div');
            div.className = 'item';
            var p = document.createElement('span');
            p.innerHTML = this._title;
            var check = document.createElement('input');
            check.type = 'checkbox';
            div.appendChild(check);
            div.appendChild(p);
            parent.appendChild(div);
        };

        return Item;
    }());

    return {
        Container: Container
    };

}());