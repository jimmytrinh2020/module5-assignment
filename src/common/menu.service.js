(function() {
"use strict";
angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var registeredUser;

  service.getCategories = function() {
    return $http.get(ApiPath + '/categories.json')
    .then(function(response) {
      return response.data;
    });
  };

  service.getMenuItems = function(category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    };
    return $http.get(ApiPath + '/menu_items.json', config)
    .then(function(response) {
      return response.data;
    });
  };

  service.getMenuItem = function(user) {
    var shortName = user.itemShortName.toUpperCase();
    var response = $http({
      method: "GET",
      url: (ApiPath + '/menu_items/' + shortName + '.json')
    });
    return response;
  };

  service.setRegisteredUser = function(user, menuItem) {
    service.registeredUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      itemShortName: user.itemShortName,
      menuItem: menuItem
    };
  };

  service.getRegisteredUser = function() {
    return service.registeredUser;
  };

}

})();
