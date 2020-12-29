(function() {
"use strict";  // variables must be declared with a var

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
  var reg = this;
  //console.log("reg: ", reg);

  reg.submit = function () {
    //console.log("Submit - reg.user: ", reg.user);
    var promise = MenuService.getMenuItem(reg.user);
    promise
    .then(function(response) {
      //console.log("Submit promise - response.data: ", response.data);
      reg.completed = true;
      reg.showError = false;
      MenuService.setRegisteredUser(reg.user, response.data);
      //console.log("Submit promise - registeredUser: ", reg.user);
    })
    .catch(function(error) {
      //console.log("Submit promise - Error: " + error) ;
      reg.completed = false;
      reg.showError = true;
      reg.registeredUser = undefined;
    });

  };
}


})(); // end module Immediately Invoked Function (IIFE)
