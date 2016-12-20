angular.module("Member")
.controller("MemberCtrl", ["$scope", "MemberSvc", function ($scope, MemberSvc) {
  $scope.members = []
  MemberSvc.fetch()
    .then(function (members) {
      console.log(members);
      $scope.members = members.data
    })
}])
