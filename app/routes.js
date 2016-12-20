angular.module("Member")
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "MemberCtrl",
        template: "templates/members.html"
      })
      .when("/:username/comments", {
        controller: "CommentCtrl",
        template: "templates/comments.html"
      })
  })
