angular.module("Member")
.factory("MemberSvc", ["$http", function ($http) {
  return {
    fetch: function () {
      return $http.get("https://api.github.com/orgs/andela/members")
    }
  }
}])
