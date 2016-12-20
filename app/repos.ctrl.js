angular.module("Member")
.controller("RepoCtrl", ["$scope", "reposvc", function ($scope, reposvc) {
  $scope.repos = []

  reposvc.fetch()
    .then(function (repos) {
      $scope.repos = repos
    })
}])
