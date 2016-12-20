angular.module("Member")
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "MemberCtrl",
        templateUrl: "templates/members.html"
      })
      .when("/:username/comments", {
        controller: "CommentCtrl",
        templateUrl: "templates/comments.html"
      })
  })
