angular.module("Member")
.controller("MemberCtrl", ["$scope", "MemberSvc", function ($scope, MemberSvc) {
  $scope.members = []
  MemberSvc.fetch()
    .then(function (members) {
      $scope.members = members.data
    })
}])
