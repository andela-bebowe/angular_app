angular.module("Member")
.factory("Reposvc", ["$http", function () {
  return {
    fetch: function (username) {
      return $http.get(baseUrl + username + "/repos")
    }
  }
}])
