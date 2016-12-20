describe("MemberCtrl", function () {
  beforeEach(module("Member"))
  var $scope = {}
  var $controller
  var MemberCtrl
  var mockMemberSvc = {}
  beforeEach(inject(function ($q) {
    mockMemberSvc.fetch = function () {
      var deferred = $q.defer()
      deferred.resolve({
        data: [
          {"login": "name"},
          {"login": "name2"}
        ]
      })
      console.log(deferred.promise.value);
      return deferred.promise
    }
  }))

  beforeEach(inject(function (_$controller_, $rootScope) {
    $controller = _$controller_
    $scope = $rootScope.$new()
  }))

  beforeEach(function () {
    MemberCtrl = $controller("MemberCtrl", {
      $scope: $scope,
      MemberSvc: mockMemberSvc
    })
  })
  it("should return an array of members", function () {
    expect($scope.members).to.be.a("array")
  })
  it("should have length of 2", function () {
    console.log($scope.members);
    expect($scope.members).to.have.length(2)
  })
})
