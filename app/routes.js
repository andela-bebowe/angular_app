angular.module("Member")
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "MemberCtrl",
        templateUrl: "templates/members.html"
      })
      .when("/:username/repos", {
        controller: "ReposCtrl",
        templateUrl: "templates/repos.html"
      })
  })
