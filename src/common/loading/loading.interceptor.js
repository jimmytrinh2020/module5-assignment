(function() {
"use strict";

angular.module('common')
.factory('loadingHttpInterceptor', LoadingHttpInterceptor);

LoadingHttpInterceptor.$inject = ['$rootScope', '$q'];
/**
* Tracks when a request begins and finishes.
* When a request starts, a progress event is emitted to allow
* listeners to determine whne a request has been initialized.
* When the response completes or a responseerror occurs,
* we assume the request has ended and emit a finish event.
**/
function LoadingHttpInterceptor($rootScope, $q) {
  var loadingCount = 0;
  var loadingEventName = 'spinner:activate';

  return {
    request: function(config) {
      // console.log("Inside interceptor, config: ", config);
      if (++loadingCount === 1) {
        $rootScope.$broadcast(loadingEventName, {on:true});
      }
      // console.log("on=true, loadingCount: ", loadingCount);
      return config;
    },
    response: function(response) {
      // console.log("Inside interceptor, response: ", response);
      if (--loadingCount === 0) {
        $rootScope.$broadcast(loadingEventName, {on:false});
      }
      // console.log("on=false, loadingCount: ", loadingCount);
      return response;
    },
    responseError: function(response) {
      if (--loadingCount === 0) {
        $rootScope.$broadcast(loadingEventName, {on:false});
      }
      return $q.reject(response);
    }
  };
}

}) ();
