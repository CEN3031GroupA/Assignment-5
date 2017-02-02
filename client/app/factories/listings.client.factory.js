angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('https://localhost:80/api/listings');
      },

      create: function(listing) {
        return $http.post('https://localhost:80/api/listings', listing);
      }, 

      read: function(id) {
        return $http.get('https://localhost:80/api/listings/' + id);
      }, 

      update: function(id, listing) {
        return $http.put('https://localhost:80/api/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('https://localhost:80/api/listings/' + id);
      }
    };

    return methods;
  }
]);