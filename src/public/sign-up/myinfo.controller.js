(function() {
"use strict";  // variables must be declared with a var

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'ApiPath'];
function MyInfoController(MenuService, ApiPath) {
  var myinfo = this;  var $ctrl = this;
  myinfo.basePath = ApiPath;
  myinfo.registeredUser = MenuService.getRegisteredUser();
  //console.log("MyInfoController - registeredUser: ", myinfo.registeredUser);
}


})(); // end module Immediately Invoked Function (IIFE)
