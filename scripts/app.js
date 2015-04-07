var bigfishApp=angular.module('bigfishApp',["ngRoute"]);
var menuList=require("scripts/config").menuList;
//register the controllers;
bigfishApp.controller('welcomeCtrl',function($scope){
  $scope.menuItems=menuList;

});
var controllers=require('scripts/controllers');
controllers.loginCtrl.registerTo(bigfishApp,"loginCtrl",'$scope');


//config the router
bigfishApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/login',{
      templateUrl: 'scripts/views/login.html',
      controller: 'loginCtrl',
      title: 'Login'
    })
    .when('/signup',{
      templateUrl: 'scripts/views/sigup.html',
      controller: 'signupCtrl',
      title: 'Sign up'
    })
    .otherwise({
      redirectTo: '/login'
    })
}])

// change Page Title based on the routers
bigfishApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
