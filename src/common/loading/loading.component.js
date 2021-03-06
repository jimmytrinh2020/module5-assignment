(function() {
"use strict";

angular.module('common')
.component('loading', {
    template: '<img src="images/spinner.svg" ng-if="$ctrl.show">',
    controller: LoadingController
});

LoadingController.$inject = ['$rootScope'];
function LoadingController($rootScope) {
  var $ctrl = this;
  var listener;

  $ctrl.$onInit = function() {
    $ctrl.show = false;
    listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
  };

  function onSpinnerActivate(event, data) {
    $ctrl.show = data.on;
    // console.log("event.name: " + event.name + " - data.on: " + data.on);
    // console.log("$ctrl.show: ", $ctrl.show);
  };

  $ctrl.$onDestroy = function() {
    listener();
  };
}

})();
