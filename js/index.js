$(document).scroll(function() {
    var scroll = $(this).scrollTop();
    if (scroll >= 150) {
      $("#popUp").css("margin-left", "-425px");
      $("#plus").css("margin-left", "0px");
    }
  });
  
  $("#plus").click(function() {
    $("#popUp").css("margin-left", "0px");
    $("#plus").css("margin-left", "-425px");
  });
  
  $("#close").click(function() {
    $("#popUp").css("margin-left", "-425px");
    $("#plus").css("margin-left", "0px");
  });

  var module = angular.module('numberApp', []);

module.controller('NumberController', function($scope) {
  $scope.getInput = function() {
    if($scope.min > $scope.max) {
      //Swap variables
      [$scope.min,$scope.max] = [$scope.max,$scope.min]; 
    }
    $scope.generateNumber();
  }
  
  $scope.loadNum = function() {
    $scope.min = 1;
    $scope.max = 10;
    $scope.generateNumber();
  }

  $scope.generateNumber = function() {
    $scope.randomNumber = Math.floor(Math.random()*($scope.max-$scope.min+1)+$scope.min);
  }
});

  $(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
