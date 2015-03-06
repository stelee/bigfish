var bigfishApp=angular.module('bigfishApp',[]);
var menuList=require("scripts/config").menuList;
//register the controllers;
bigfishApp.controller('welcomeCtrl',function($scope){
  $scope.menuItems=menuList;

});
