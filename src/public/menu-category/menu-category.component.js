(function() {
"use strict";

angular.module('public')
.component('menuCategory', {   // tag <menu-category></menu-category>
  templateUrl: 'src/public/menu-category/menu-category.html',
  bindings: {
    category: '<'
  }
});

}) ();
