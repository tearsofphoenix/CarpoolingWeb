angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' },
    { id: 4, name: 'Ash Ketchum' },
    { id: 5, name: 'Ash Ketchum' },
    { id: 6, name: 'Ash Ketchum' },
    { id: 7, name: 'Ash Ketchum' },
    { id: 8, name: 'Ash Ketchum' },
    { id: 9, name: 'Ash Ketchum' },
    { id: 10, name: 'Ash Ketchum' },
    { id: 11, name: 'Ash Ketchum' },
    { id: 12, name: 'Ash Ketchum' },
    { id: 13, name: 'Ash Ketchum' },
    { id: 14, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
